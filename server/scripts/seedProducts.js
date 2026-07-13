import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import slugify from "slugify";
import connectDB from "../config/db.js";
import Product from "../models/Product.js";
import Category from "../models/Category.js";

dotenv.config();

const dataFile = path.resolve(process.cwd(), "data/products.json");

const readProducts = () => {
  if (!fs.existsSync(dataFile)) {
    throw new Error(`Products file not found: ${dataFile}`);
  }

  return JSON.parse(fs.readFileSync(dataFile, "utf8"));
};

const normalizeCategoryName = (name) =>
  String(name || "")
    .trim()
    .replace(/\s+/g, " ");

const ensureCategory = async (name, order) => {
  const normalized = normalizeCategoryName(name);
  if (!normalized) return null;

  const slug = slugify(normalized, {
    lower: true,
    strict: true,
  });

  const category = await Category.findOneAndUpdate(
    { name: normalized },
    {
      $setOnInsert: {
        name: normalized,
        slug,
        order,
      },
    },
    {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    }
  );

  return category;
};

const seedProducts = async () => {
  await connectDB();

  const productsData = readProducts();
  const uniqueCategoryNames = [
    ...new Set(
      productsData
        .filter((product) => product.hasCategory && product.category)
        .map((product) => normalizeCategoryName(product.category))
    ),
  ];

  const categoryMap = new Map();

  for (const [index, categoryName] of uniqueCategoryNames.entries()) {
    const category = await ensureCategory(categoryName, index + 1);
    categoryMap.set(categoryName, category._id);
  }

  let inserted = 0;
  let updated = 0;

  for (const product of productsData) {
    const slug = slugify(product.slug || product.name, {
      lower: true,
      strict: true,
    });

    const payload = {
      name: product.name,
      slug,
      hasCategory: Boolean(product.hasCategory),
      category: product.hasCategory
        ? categoryMap.get(normalizeCategoryName(product.category)) || null
        : null,
      description: product.description || "No description available.",
    };

    const existing = await Product.findOne({ slug });

    if (existing) {
      await Product.updateOne({ slug }, { $set: payload });
      updated += 1;
    } else {
      await Product.create(payload);
      inserted += 1;
    }
  }

  console.log(`✅ Seed complete: ${inserted} inserted, ${updated} updated.`);
  process.exit(0);
};

seedProducts().catch((error) => {
  console.error("❌ Product seeding failed:", error.message);
  process.exit(1);
});
