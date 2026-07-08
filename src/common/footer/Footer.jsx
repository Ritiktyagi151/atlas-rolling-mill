import { useState } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaDraftingCompass,
  FaRulerCombined,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegCopyright,
} from "react-icons/fa";
import { motion } from "framer-motion";
import ImageSlider from "../../components/Clientslider";

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      color: "text-[#0077b5] hover:text-[#005582]",
      href: "https://www.linkedin.com/company/atlas-rolling-mill-mfg-co/?viewAsMember=true",
    },
    {
      icon: <FaFacebook />,
      color: "text-[#4267B2] hover:text-[#344e86]",
      href: "https://www.facebook.com/profile.php?id=61560527662822",
    },
    {
      icon: <FaInstagram />,
      color: "text-[#E1306C] hover:text-[#C13584]",
      href: "https://www.instagram.com/atlas_rolling_mill_mfg_co?igsh=M3QxZTUzbTE2Mmtr",
    },
  ];

  const products = [
    { name: "Section Rolling Mill Plants", path: "/section-mills" },
    {
      name: "Bar & Wire Rod Rolling Mills",
      path: "/bar-wire-rod-mills",
    },
    // { name: "Section Rolling Mill Plants", path: "/section-mills" },
    { name: "Strip Rolling Mill Plants", path: "/strip-mills" },
    { name: "Pinion Gear Box", path: "/pinion-gearbox" },
    { name: "Helical Gear", path: "helical-gear" },
    { name: "Cooling Bed", path: "/cooling-bed" },
    { name: "Gear Coupling ", path: "/gear-coupling" },
    { name: "Roller Conveyors", path: "/roller-conveyors" },
    { name: "Pinch Rolls ", path: "/pinch-rolls" },
    { name: "Rolling Mill Stands", path: "/rolling-mill-stands" },
    { name: "Housingless Mill Stands", path: "/housingless-mill-stands" },
    { name: "Snap Shear Machine", path: "/snap-machine" },
    { name: "Universal Coupling", path: "/universal-coupling" },
    { name: "Tail Breaker", path: "/tail-breaker" },
  ];

  return (
    <div>
      <footer className="relative bg-[url('https://img.freepik.com/free-vector/geometric-pattern-background-vector-white_53876-128361.jpg?uid=R201800195&ga=GA1.1.1513718733.1745227870&semt=ais_items_boosted&w=740')] bg-center rounded-tl-[120px] rounded-tr-[120px] text-gray-800 pt-10 pb-10 px-4 md:px-8 border-t-4 border-orange-400 shadow-[2px_-10px_30px_-2px_rgba(0,0,0,0.2)]">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
            {/* Company Info - spans 3 columns */}
            <div className="md:col-span-3">
              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    className="h-34 w-34"
                    src="images/logo/atlas-logo-final.png"
                    alt="Atlas Rolling Mill logo"
                  />
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Atlas Rolling Mill Mfg. Co. is a leading manufacturer of Rolling
                Mills, Rolling Mill Stands, Gear Boxes, Pinion Stands and other
                rolling mill components.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    target="_blank"
                    href={social.href}
                    className={`${social.color} text-2xl transition-all duration-300 transform hover:scale-x-[-1]`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links - spans 2 columns (reduced width) */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-6 border-b-2 border-orange-500 pb-2">
                Quick Links
              </h3>
              <ul className="grid grid-cols-1 gap-4">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about-us" },
                  { name: "Blogs", path: "/blogs" },
                  { name: "Events", path: "/gallerypage" },
                  { name: "Contact Us", path: "/contact-us" },
                  // { name: "Admin Login" },
                ].map((link, i) => (
                  <motion.li key={i} whileHover={{ x: 5 }}>
                    <a
                      href={link.path}
                      className="text-gray-600 hover:text-orange-500 flex items-center transition-colors"
                    >
                      <span className="w-3 h-3 border-2 border-orange-500 rounded-full mr-3 hover:bg-orange-500 transition-colors"></span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Products - spans 4 columns (increased width) */}
            <div className="md:col-span-4">
              <h3 className="text-xl font-semibold mb-6 flex items-center border-b-2 border-orange-500 pb-2">
                Our Products
              </h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                {products.map((product, i) => (
                  <motion.li key={i} whileHover={{ x: 5 }} className="group">
                    <a
                      href={product.path}
                      className="text-gray-600 hover:text-orange-500 flex items-center transition-colors"
                    >
                      <span className="w-3 h-3 border-2 border-orange-500 rounded-full mr-3 group-hover:bg-orange-500 transition-colors"></span>
                      {product.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact - spans 3 columns */}
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-6 border-b-2 border-orange-500 pb-2">
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3" />
                  <address className="text-gray-600 not-italic">
                    <span className="text-gray-800 font-bold text-[14px]">
                      Corporate Office :
                    </span>{" "}
                    AHS 703, 7th Floor Building Aditya High Street, Lal kuan
                    NH-44, Ghaziabad-201009
                  </address>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3" />
                  <address className="text-gray-600 not-italic">
                    <span className="text-gray-800 font-bold text-[14px]">
                      Manufacturing Unit 1 :
                    </span>{" "}
                    Atlas Rolling Mill Mfg. Co. Plot no. E1/6
                    Bulandshahar road Industrial Area, Ghaziabad-201009 UP.
                  </address>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3" />
                  <address className="text-gray-600 not-italic">
                    <span className="text-gray-800 font-bold text-[14px]">
                      Manufacturing Unit 2 :
                    </span>{" "}
                    Atlas Rolling Mill Mfg. Co. Near Radha Swami Satsang Bhawan
                    Kacha, shanti nagar, Mandi Gobindgarh, Ladpur, Punjab 147301
                    India
                  </address>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-orange-500 mr-3" />
                  <a
                    href="tel:+91  9478000019"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    (+91) 9478000019
                  </a>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-orange-500 mr-3" />
                  <a
                    href="tel:+91 7888686115"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    (+91) 7888686115
                  </a>
                </div>

                <div className="flex items-center">
                  <FaEnvelope className="text-orange-500 mr-3" />
                  <a
                    href="mailto:atlasrollingmillmfgco@gmail.com"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    sales@atlasrollingmillmfg.com
                  </a>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-orange-500 mr-3" />
                  <a
                    href="mailto:atlasrollingmillmfgco@gmail.com"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    atlasrollingmillmfgco@gmail.com
                  </a>
                </div>
                {/* <div className="flex items-center">
                  <FaEnvelope className="text-orange-500 mr-3" />
                  <a
                    href="mailto:atlasrollingmillmfgco@gmail.com"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    sales@atlasrollingmillmfg.com
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <FaRegCopyright className="mr-2 text-gray-500" />
              <span className="text-gray-600 text-sm">
                {currentYear} Atlas Rolling Mill Mfg. Co. All Rights Reserved.
              </span>
            </div>
            <div className="">
              <p>
                Design and Developed By{" "}
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600"
                    href="https://www.jaikviktechnology.com/"
                  >
                    Jaikvik Technology India Pvt Ltd
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
