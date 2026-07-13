import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Footer from "../models/Footer.js";

dotenv.config();

await connectDB();

try {
  const footerExists = await Footer.findOne();

  if (footerExists) {
    console.log("⚠️ Footer already exists.");
    process.exit();
  }

  await Footer.create({
    description:
      "Atlas Rolling Mill Mfg. Co. is a leading manufacturer of Rolling Mills, Rolling Mill Stands, Gear Boxes, Pinion Stands and other rolling mill components.",

    socials: [
      {
        name: "LinkedIn",
        icon: "FaLinkedin",
        link: "https://www.linkedin.com/company/atlas-rolling-mill-mfg-co/?viewAsMember=true",
      },
      {
        name: "Facebook",
        icon: "FaFacebook",
        link: "https://www.facebook.com/profile.php?id=61560527662822",
      },
      {
        name: "Instagram",
        icon: "FaInstagram",
        link: "https://www.instagram.com/atlas_rolling_mill_mfg_co?igsh=M3QxZTUzbTE2Mmtr",
      },
    ],

    contacts: {
      addresses: [
        "Corporate Office : AHS 703, 7th Floor Building Aditya High Street, Lal Kuan NH-44, Ghaziabad-201009",

        "Manufacturing Unit 1 : Atlas Rolling Mill Mfg. Co. Plot No. E1/6, Bulandshahar Road Industrial Area, Ghaziabad-201009, Uttar Pradesh.",

        "Manufacturing Unit 2 : Atlas Rolling Mill Mfg. Co. Near Radha Swami Satsang Bhawan, Kacha Shanti Nagar, Mandi Gobindgarh, Ladpur, Punjab 147301, India.",
      ],

      phones: [
        "+91 9478000019",
        "+91 7888686115",
      ],

      emails: [
        "sales@atlasrollingmillmfg.com",
        "atlasrollingmillmfgco@gmail.com",
      ],
    },
  });

  console.log("✅ Footer seeded successfully.");

  process.exit();
} catch (error) {
  console.error(error);
  process.exit(1);
}