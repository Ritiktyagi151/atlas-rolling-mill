import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Navbar from "../models/Navbar.js";

dotenv.config();

await connectDB();

try {
  const exists = await Navbar.findOne();

  if (exists) {
    console.log("⚠️ Navbar already exists.");
    process.exit();
  }

  await Navbar.create({
    announcements: [
      {
        text: "🎉 ISO 9001-2008 certification attests to ATLAS's unwavering commitment to quality!",
        order: 1,
      },
      {
        text: "🚚 Our solutions power industries across 21+ countries",
        order: 2,
      },
      {
        text: "⭐ Rated #1 Rolling Mill Manufacturer in India",
        order: 3,
      },
      {
        text: "📞 Call us at (+91) 9478000019 for inquiries",
        order: 4,
      },
    ],

    menuItems: [
      {
        name: "ROLLING MILL PLANT",
        type: "category",
        parentCategory: null,
        order: 1,
      },
      {
        name: "Bar & Wire Rod Rolling Mills",
        type: "product",
        parentCategory: "ROLLING MILL PLANT",
        order: 1,
      },
      {
        name: "Section Rolling Mill Plants",
        type: "product",
        parentCategory: "ROLLING MILL PLANT",
        order: 2,
      },
      {
        name: "Strip Rolling Mill Plants",
        type: "product",
        parentCategory: "ROLLING MILL PLANT",
        order: 3,
      },

      {
        name: "Rolling Mill Stands",
        type: "product",
        parentCategory: null,
        order: 2,
      },

      {
        name: "Housingless Mill Stands",
        type: "product",
        parentCategory: null,
        order: 3,
      },

      {
        name: "GEAR & GEARBOXES",
        type: "category",
        parentCategory: null,
        order: 4,
      },
      {
        name: "Helical Gear",
        type: "product",
        parentCategory: "GEAR & GEARBOXES",
        order: 1,
      },
      {
        name: "Reduction GearBox",
        type: "product",
        parentCategory: "GEAR & GEARBOXES",
        order: 2,
      },
      {
        name: "Pinion GearBox",
        type: "product",
        parentCategory: "GEAR & GEARBOXES",
        order: 3,
      },
      {
        name: "Reduction Cum Pinion GearBox",
        type: "product",
        parentCategory: "GEAR & GEARBOXES",
        order: 4,
      },
      {
        name: "Speed Increase",
        type: "product",
        parentCategory: "GEAR & GEARBOXES",
        order: 5,
      },

      {
        name: "SHEARING & CUTTING MACHINES",
        type: "category",
        parentCategory: null,
        order: 5,
      },
      {
        name: "Flying Shears Machine",
        type: "product",
        parentCategory: "SHEARING & CUTTING MACHINES",
        order: 1,
      },
      {
        name: "Crop cum Cobble shear Machine",
        type: "product",
        parentCategory: "SHEARING & CUTTING MACHINES",
        order: 2,
      },
      {
        name: "Billet shear Machine",
        type: "product",
        parentCategory: "SHEARING & CUTTING MACHINES",
        order: 3,
      },
      {
        name: "Hot Billet shearing Machine",
        type: "product",
        parentCategory: "SHEARING & CUTTING MACHINES",
        order: 4,
      },
      {
        name: "Rotary shear Machine",
        type: "product",
        parentCategory: "SHEARING & CUTTING MACHINES",
        order: 5,
      },
      {
        name: "End Cutting shear Machine",
        type: "product",
        parentCategory: "SHEARING & CUTTING MACHINES",
        order: 6,
      },
      {
        name: "Cold shear Machine",
        type: "product",
        parentCategory: "SHEARING & CUTTING MACHINES",
        order: 7,
      },
      {
        name: "Snap shear Machine",
        type: "product",
        parentCategory: "SHEARING & CUTTING MACHINES",
        order: 8,
      },
      {
        name: "Scrap/Plate shear Machine",
        type: "product",
        parentCategory: "SHEARING & CUTTING MACHINES",
        order: 9,
      },
      {
        name: "Hot Saw",
        type: "product",
        parentCategory: "SHEARING & CUTTING MACHINES",
        order: 10,
      },

      {
        name: "TMT EQUIPMENT",
        type: "category",
        parentCategory: null,
        order: 6,
      },
      {
        name: "Cooling Bed",
        type: "product",
        parentCategory: "TMT EQUIPMENT",
        order: 1,
      },
      {
        name: "Twin Channel",
        type: "product",
        parentCategory: "TMT EQUIPMENT",
        order: 2,
      },
      {
        name: "Quenching Box",
        type: "product",
        parentCategory: "TMT EQUIPMENT",
        order: 3,
      },
      {
        name: "Tail Breaker",
        type: "product",
        parentCategory: "TMT EQUIPMENT",
        order: 4,
      },

      {
        name: "MATERIAL HANDLING EQUIPMENT",
        type: "category",
        parentCategory: null,
        order: 7,
      },
      {
        name: "Roller Conveyors",
        type: "product",
        parentCategory: "MATERIAL HANDLING EQUIPMENT",
        order: 1,
      },
      {
        name: "Y Tables",
        type: "product",
        parentCategory: "MATERIAL HANDLING EQUIPMENT",
        order: 2,
      },
      {
        name: "Furnace Pusher",
        type: "product",
        parentCategory: "MATERIAL HANDLING EQUIPMENT",
        order: 3,
      },
      {
        name: "Coilers",
        type: "product",
        parentCategory: "MATERIAL HANDLING EQUIPMENT",
        order: 4,
      },
      {
        name: "Decoilers",
        type: "product",
        parentCategory: "MATERIAL HANDLING EQUIPMENT",
        order: 5,
      },
      {
        name: "Vertical Loopers",
        type: "product",
        parentCategory: "MATERIAL HANDLING EQUIPMENT",
        order: 6,
      },

      {
        name: "ROLLING MILL PARTS",
        type: "category",
        parentCategory: null,
        order: 8,
      },
      {
        name: "Flywheel & Flywheel Assembly",
        type: "product",
        parentCategory: "ROLLING MILL PARTS",
        order: 1,
      },
      {
        name: "Gear Coupling",
        type: "product",
        parentCategory: "ROLLING MILL PARTS",
        order: 2,
      },
      {
        name: "Universal Coupling",
        type: "product",
        parentCategory: "ROLLING MILL PARTS",
        order: 3,
      },
      {
        name: "Spindles",
        type: "product",
        parentCategory: "ROLLING MILL PARTS",
        order: 4,
      },
      {
        name: "Roller Guide Box",
        type: "product",
        parentCategory: "ROLLING MILL PARTS",
        order: 5,
      },
      {
        name: "Carden Shaft",
        type: "product",
        parentCategory: "ROLLING MILL PARTS",
        order: 6,
      },

      {
        name: "OTHER ALLIED MACHINERY",
        type: "category",
        parentCategory: null,
        order: 9,
      },
      {
        name: "Pinch Rolls",
        type: "product",
        parentCategory: "OTHER ALLIED MACHINERY",
        order: 1,
      },
      {
        name: "Vertical Edger",
        type: "product",
        parentCategory: "OTHER ALLIED MACHINERY",
        order: 2,
      },
      {
        name: "Straightening Machine",
        type: "product",
        parentCategory: "OTHER ALLIED MACHINERY",
        order: 3,
      },
    ],
  });

  console.log("✅ Navbar seeded successfully.");

  process.exit();
} catch (error) {
  console.log(error);
  process.exit(1);
}