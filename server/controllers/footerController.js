import Footer from "../models/Footer.js";

// GET Footer
export const getFooter = async (req, res) => {
  try {
    let footer = await Footer.findOne();

    if (!footer) {
      footer = await Footer.create({
        description: "",
        socials: [],
        contacts: {
          addresses: [],
          phones: [],
          emails: [],
        },
      });
    }

    res.status(200).json({
      success: true,
      data: footer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE Footer
export const updateFooter = async (req, res) => {
  try {
    let footer = await Footer.findOne();

    if (!footer) {
      footer = new Footer();
    }

    footer.description = req.body.description;

    footer.socials = req.body.socials || [];

    footer.contacts = {
      addresses: req.body.contacts?.addresses || [],
      phones: req.body.contacts?.phones || [],
      emails: req.body.contacts?.emails || [],
    };

    await footer.save();

    res.status(200).json({
      success: true,
      message: "Footer updated successfully.",
      data: footer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};