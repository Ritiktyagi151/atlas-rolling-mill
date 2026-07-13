import fs from "fs";
import path from "path";
import Event from "../models/Event.js";

// Get All Events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ order: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      data: events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create Event
export const createEvent = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const event = await Event.create({
      image: `/uploads/events/${req.file.filename}`,
      order: req.body.order || 0,
    });

    res.status(201).json({
      success: true,
      message: "Event image uploaded successfully",
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Event
export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    if (req.file) {
      const oldImage = path.join(process.cwd(), event.image);

      if (fs.existsSync(oldImage)) {
        fs.unlinkSync(oldImage);
      }

      event.image = `/uploads/events/${req.file.filename}`;
    }

    if (req.body.order !== undefined) {
      event.order = req.body.order;
    }

    if (req.body.isActive !== undefined) {
      event.isActive = req.body.isActive;
    }

    await event.save();

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Event
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    const imagePath = path.join(process.cwd(), event.image);

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await Event.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};