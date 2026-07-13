import Navbar from "../models/Navbar.js";

// GET NAVBAR
export const getNavbar = async (req, res) => {
  try {
    let navbar = await Navbar.findOne();

    if (!navbar) {
      navbar = await Navbar.create({
        announcements: [],
        menuItems: [],
      });
    }

    res.status(200).json({
      success: true,
      data: navbar,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE NAVBAR
export const updateNavbar = async (req, res) => {
  try {
    let navbar = await Navbar.findOne();

    if (!navbar) {
      navbar = new Navbar();
    }

    navbar.announcements = req.body.announcements || [];
    navbar.menuItems = req.body.menuItems || [];

    await navbar.save();

    res.status(200).json({
      success: true,
      message: "Navbar updated successfully.",
      data: navbar,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};