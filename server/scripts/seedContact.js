import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Contact from "../models/Contact.js";

dotenv.config();

await connectDB();

try {
  const exists = await Contact.findOne();

  if (exists) {
    console.log("⚠️ Contact already exists.");
    process.exit();
  }

  await Contact.create({
    addresses: [
      {
        title: "Corporate Office",
        address:
          "AHS 703, 7th Floor Building Aditya High Street, Lal Kuan NH-44, Ghaziabad-201009",
      },
      {
        title: "Manufacturing Unit 1",
        address:
          "Atlas Rolling Mill Mfg. Co. Plot No. E1/6, Bulandshahar Road Industrial Area, Ghaziabad-201009, Uttar Pradesh",
      },
      {
        title: "Manufacturing Unit 2",
        address:
          "Atlas Rolling Mill Mfg. Co. Near Radha Swami Satsang Bhawan, Kacha, Shanti Nagar, Mandi Gobindgarh, Punjab - 147301",
      },
    ],

    phones: [
      "+91 9478000019",
      "+91 7888686115",
    ],

    emails: [
      "sales@atlasrollingmillmfg.com",
      "atlasrollingmillmfgco@gmail.com",
    ],
  });

  console.log("✅ Contact seeded successfully.");

  process.exit();
} catch (error) {
  console.log(error);
  process.exit(1);
}