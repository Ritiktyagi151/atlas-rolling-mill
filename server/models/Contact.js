import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    addresses: [
      {
        title: {
          type: String,
          required: true,
          trim: true,
        },
        address: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],

    phones: [
      {
        type: String,
        trim: true,
      },
    ],

    emails: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Contact", contactSchema);