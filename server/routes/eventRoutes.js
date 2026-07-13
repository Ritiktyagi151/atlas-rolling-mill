import express from "express";
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";
import upload from "../middleware/upload.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getEvents);

router.post(
  "/",
  protect,
  upload("events").single("image"),
  createEvent
);

router.put(
  "/:id",
  protect,
  upload("events").single("image"),
  updateEvent
);

router.delete(
  "/:id",
  protect,
  deleteEvent
);

export default router;