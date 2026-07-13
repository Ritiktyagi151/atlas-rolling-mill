import mongoose from "mongoose";

const socialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    icon: {
      type: String,
      required: true,
      trim: true,
    },

    link: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

const footerSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },

    socials: {
      type: [socialSchema],
      default: [],
    },

    contacts: {
      addresses: {
        type: [String],
        default: [],
      },

      phones: {
        type: [String],
        default: [],
      },

      emails: {
        type: [String],
        default: [],
      },
    },
  },
  {
    timestamps: true,
  }
);

const Footer = mongoose.model("Footer", footerSchema);

export default Footer;