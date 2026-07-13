import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Event from "../models/Event.js";

dotenv.config();

await connectDB();

const images = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg",
  "photo6.jpg",
  "photo7.jpg",
  "photo8.jpg",
  "photo9.JPG",
  "photo10.jpg",
  "photo11.jpg",
  "Photo.jpg",
];

try {
  const existing = await Event.countDocuments();

  if (existing > 0) {
    console.log("⚠️ Events already exist.");
    process.exit();
  }

  const events = images.map((image, index) => ({
    image: `/uploads/events/${image}`,
    order: index + 1,
    isActive: true,
  }));

  await Event.insertMany(events);

  console.log("✅ Events seeded successfully.");
  process.exit();
} catch (error) {
  console.log(error);
  process.exit(1);
}