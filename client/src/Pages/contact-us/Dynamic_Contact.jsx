import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGlobe,
  FaShippingFast,
  FaWarehouse,
  FaLanguage,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { HiOutlineClock, HiOutlineGlobeAlt } from "react-icons/hi";


const API_URL = import.meta.env.VITE_API_URL;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    country: "",
    inquiryType: "General Inquiry",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const [contact, setContact] = useState({
  phones: [],
  emails: [],
  addresses: [],
});

  const countries = [
    "India",
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Australia",
    "Japan",
    "UAE",
    "Saudi Arabia",
    "South Africa",
    "Nigeria",
    "Brazil",
    "Mexico",
    "Singapore",
    "Other",
  ];

  const inquiryTypes = [
    { value: "General Inquiry", label: "General Inquiry" },
    { value: "Rolling Mill Inquiry", label: "Rolling Mill Inquiry" },
    { value: "Spare Parts Request", label: "Spare Parts Request" },
    { value: "Technical Support", label: "Technical Support" },
    { value: "Become a Distributor", label: "Become a Distributor" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      isVideoPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  useEffect(() => {
  const fetchContact = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}/api/contact`
      );

      setContact(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchContact();
}, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const cardHover = {
    hover: {
      y: -8,
      boxShadow:
        "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
    },
  };

  const pulse = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: { duration: 1.5, repeat: Infinity },
    },
  };

  return (
    <div className="bg-white">
      {/* Hero Video Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/video/videos/contact.mp4"
          muted
          loop
          playsInline
          autoPlay
          onClick={toggleVideoPlay}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-8">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Connect With Atlas Rolling Mill Mfg. Co.
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Floating background circles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-100 opacity-20"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3 rounded-full inline-block">
              <HiOutlineGlobeAlt className="text-2xl" />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact{" "}
            <span className="text-orange-500">Atlas Rolling Mill Mfg. Co.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for inquiries about rolling mills, spare
            parts, technical support, or becoming a distributor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ==================== CONTACT FORM (REAL FORMSUBMIT.CO) ==================== */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            variants={cardHover}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100 relative z-10"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 to-amber-400" />
            <div className="p-8 sm:p-10">
              <motion.h2 className="text-2xl font-bold text-gray-800 mb-6">
                Rolling Mill Inquiry Form
              </motion.h2>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200"
                >
                  Thank you! Your inquiry has been sent successfully. Our team
                  will contact you shortly.
                </motion.div>
              )}

              {/* Error Message */}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200"
                >
                  {submitError}
                </motion.div>
              )}

              {/* REAL FORM WITH FORMSUBMIT.CO */}
              <form
  onSubmit={async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      await axios.post(`${API_URL}/api/contact/enquiry`, {
        fullName: formData.name,
        country: formData.country,
        email: formData.email,
        phone: formData.phone,
        inquiryType: formData.inquiryType,
        message: formData.message,
      });

      setSubmitSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        country: "",
        inquiryType: "General Inquiry",
      });
    } catch (err) {
      console.error(err);
      setSubmitError("Failed to submit enquiry.");
    }

    setIsSubmitting(false);
  }}
>
  {/* Name & Country */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    <div>
      <label
        htmlFor="name"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Full Name *
      </label>

      <input
        type="text"
        id="name"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
      />
    </div>

    <div>
      <label
        htmlFor="country"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Country
      </label>

      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
      >
        <option value="">Select your country</option>

        {countries.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  </div>

  {/* Email & Phone */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Email Address *
      </label>

      <input
        type="email"
        id="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
      />
    </div>

    <div>
      <label
        htmlFor="phone"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Phone Number
      </label>

      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
      />
    </div>
  </div>

  {/* Inquiry Type */}
  <div className="mt-5">
    <label className="block text-sm font-medium text-gray-700 mb-3">
      Inquiry Type
    </label>

    <div className="grid grid-cols-2 gap-3">
      {inquiryTypes.map((type) => (
        <label
          key={type.value}
          className="flex items-center cursor-pointer"
        >
          <input
            type="radio"
            name="inquiryType"
            value={type.label}
            checked={formData.inquiryType === type.label}
            onChange={handleChange}
            className="h-4 w-4 text-orange-500"
          />

          <span className="ml-2 text-sm text-gray-700">
            {type.label}
          </span>
        </label>
      ))}
    </div>
  </div>

  {/* Message */}
  <div className="mt-5">
    <label
      htmlFor="message"
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      Your Message *
    </label>

    <textarea
      id="message"
      name="message"
      rows="4"
      required
      value={formData.message}
      onChange={handleChange}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
      placeholder="Please include details about your rolling mill requirements..."
    />
  </div>

  {/* Submit Button */}
  <motion.button
    type="submit"
    disabled={isSubmitting}
    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all mt-5 ${
      isSubmitting
        ? "bg-amber-400"
        : "bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-lg"
    }`}
  >
    {isSubmitting ? (
      "Sending..."
    ) : (
      <>
        <FaPaperPlane className="mr-2" />
        Submit Inquiry
      </>
    )}
  </motion.button>
</form>
            </div>

            {/* Global Export Support Card */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              variants={cardHover}
              className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl shadow-lg overflow-hidden relative z-10 mt-8"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <FaGlobe className="text-2xl text-white mr-3" />
                  <h2 className="text-2xl font-bold text-white">
                    Global Export Support
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: FaShippingFast,
                      title: "Worldwide Shipping",
                      desc: "Export to 30+ countries with full documentation",
                    },
                    {
                      icon: FaWarehouse,
                      title: "Extensive Spare Parts Network",
                      desc: "Efficient supply chain providing quick access to essential machine components",
                    },
                    {
                      icon: FaLanguage,
                      title: "Technical Documentation",
                      desc: "English, Spanish, Arabic, French",
                    },
                    {
                      icon: HiOutlineClock,
                      title: "Installation Support",
                      desc: "On-site commissioning worldwide",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                    >
                      <div className="flex items-center mb-2">
                        <item.icon className="text-white mr-2" />
                        <h3 className="font-medium text-white">{item.title}</h3>
                      </div>
                      <p className="text-white/90 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Details */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              variants={cardHover}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 to-amber-400" />
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Atlas Rolling Mill Mfg. Co.
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                      <FaCalendarAlt className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Working Hours
                      </h3>
                      <p className="text-gray-600 mt-1 flex items-center">
                        <FaClock className="mr-2 text-orange-500" /> Monday -
                        Saturday: 8:30AM - 6:30PM IST
                      </p>
                    </div>
                  </div>
                  {contact.emails.map((mail)=>(
                    <div key={mail} className="flex items-start space-x-4">
                      <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                        <FaEnvelope className="text-xl" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">Email</h3>
                        <a
                          href={`mailto:${mail}`}
                          className="text-gray-600 hover:text-orange-500 transition-colors mt-1 block"
                        >
                          {mail}
                        </a>
                      </div>
                    </div>
                  ))}
                  {contact.phones.map((ph)=>(
                    <div key={ph} className="flex items-start space-x-4">
                      <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                        <FaPhone className="text-xl" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">Phone</h3>
                        <a
                          href={`tel:${ph}`}
                          className="text-gray-600 hover:text-orange-500 transition-colors mt-1 block"
                        >
                          {ph}
                        </a>
                      </div>
                    </div>
                  ))}
                  {contact.addresses.map((item,index)=>(
<div
key={index}
className="flex items-start space-x-4"
>

<div className="p-3 bg-orange-100 rounded-full text-orange-600">
<FaMapMarkerAlt className="text-xl"/>
</div>

<div>

<h3 className="font-medium text-gray-800">
{item.title}
</h3>

<address className="text-gray-600 not-italic mt-1">
{item.address}
</address>

</div>

</div>
))}

                  
                  
                </div>
              </div>
            </motion.div>

            {/* Google Map */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* --- Location 1: Ghaziabad --- */}
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100"
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 to-amber-400" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaMapMarkerAlt className="text-orange-500 mr-2" />
                    Mfg. Unit-1: Ghaziabad
                  </h2>

                  <div className="rounded-lg overflow-hidden border border-gray-200 mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.321422600279!2d77.46088787550147!3d28.650093075655057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM5JzAwLjMiTiA3N8KwMjcnNDguNSJF!5e0!3m2!1sen!2sin!4v1773419201142!5m2!1sen!2sin"
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=E1/6,+BS+Road+Industrial+Area,+Ghaziabad"
                      target="_blank"
                      className="text-orange-600 font-medium hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* --- Location 2: Punjab --- */}
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100"
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 to-amber-400" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaMapMarkerAlt className="text-orange-500 mr-2" />
                    Mfg. Unit-2: Punjab
                  </h2>

                  <div className="rounded-lg overflow-hidden border border-gray-200 mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.9660180736187!2d76.27002867503452!3d30.656378589319697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39101b069d1a73db%3A0x3918e3270280b3b7!2sAtlas%20Rolling%20Mill%20Mfg%20Co!5e1!3m2!1sen!2sin!4v1765185386913!5m2!1sen!2sin"
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Atlas+Rolling+Mill+Mfg.+Co.+Mandi+Gobindgarh+Punjab"
                      target="_blank"
                      className="text-orange-600 font-medium hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
