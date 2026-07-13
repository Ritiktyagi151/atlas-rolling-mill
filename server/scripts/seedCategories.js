import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Category from "../models/Category.js";

dotenv.config();

await connectDB();

try {
  const exists = await Category.countDocuments();

  if (exists > 0) {
    console.log("⚠️ Categories already exist.");
    process.exit();
  }

  const categories = [
    {
      name: "ROLLING MILL PLANT",
      order: 1,
    },
    {
      name: "GEAR & GEARBOXES",
      order: 2,
    },
    {
      name: "SHEARING & CUTTING MACHINES",
      order: 3,
    },
    {
      name: "TMT EQUIPMENT",
      order: 4,
    },
    {
      name: "MATERIAL HANDLING EQUIPMENT",
      order: 5,
    },
    {
      name: "ROLLING MILL PARTS",
      order: 6,
    },
    {
      name: "OTHER ALLIED MACHINERY",
      order: 7,
    },
  ];

  await Category.insertMany(categories);

  console.log("✅ Categories seeded successfully.");

  process.exit();
} catch (error) {
  console.log(error);
  process.exit(1);
}