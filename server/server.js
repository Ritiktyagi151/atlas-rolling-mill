import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import path from "path";
import footerRoutes from "./routes/footerRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import navbarRoutes from "./routes/navbarRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
// Auth Route
app.use("/api/auth", authRoutes);

// Gallery Route
app.use("/api/events", eventRoutes);

// Footer Route
app.use("/api/footer", footerRoutes);

// Category Route
app.use("/api/categories", categoryRoutes);

// Navbar Route
app.use("/api/navbar", navbarRoutes);

// Contact Route
app.use("/api/contact", contactRoutes);

// Blog Route
app.use("/api/blogs", blogRoutes);

// Product Route
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Atlas Backend API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});