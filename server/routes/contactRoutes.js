import express from "express";
import {
  getContact,
  updateContact,
  createEnquiry,
  getEnquiries,
  getEnquiry,
  deleteEnquiry,
} from "../controllers/contactController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// CONTACT
router.get("/", getContact);
router.put("/", protect, updateContact);

// ENQUIRIES
router.post("/enquiry", createEnquiry);
router.get("/enquiries", protect, getEnquiries);
router.get("/enquiries/:id", protect, getEnquiry);
router.delete("/enquiries/:id", protect, deleteEnquiry);

export default router;