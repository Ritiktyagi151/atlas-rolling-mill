// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const galleryItems = [
//     {
//       id: 1,
//       src: "images/Gallery/photo1.jpg",
//     },
//     {
//       id: 2,
//       src: "images/Gallery/photo2.jpg",
//     },
//     {
//       id: 3,
//       src: "images/Gallery/photo3.jpg",
//     },
//     {
//       id: 4,
//       src: "images/Gallery/photo4.jpg",
//     },
//     {
//       id: 5,
//       src: "images/Gallery/photo5.jpg",
//     },
//     {
//       id: 6,
//       src: "images/Gallery/photo6.jpg",
//     },
//     {
//       id: 7,
//       src: "images/Gallery/photo7.jpg",
//     },
//     {
//       id: 8,
//       src: "images/Gallery/photo8.jpg",
//     },
//     {
//       id: 9,
//       src: "images/Gallery/photo9.JPG",
//     },
//     {
//       id: 10,
//       src: "images/Gallery/photo10.jpg",
//     },
//     {
//       id: 11,
//       src: "images/Gallery/photo11.jpg",
//     },
//     {
//       id: 12,
//       src: "images/Gallery/Photo.jpg",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 ">
//       <div className="mb-10">
//   {/* Desktop Banner - Visible only on md and above */}
//   <img
//     src="images/banners/event-new.jpg"
//     alt="event-banner-desktop"
//     className="hidden md:block w-full"
//   />

//   {/* Mobile Banner - Visible only below md */}
//   <img
//     src="images/banners/event-phone.jpg"
//     alt="event-banner-mobile"
//     className="block md:hidden w-full"
//   />
// </div>

//       <div className="max-w-6xl mx-auto ">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
//           {galleryItems.map((item) => (
//             <motion.div
//               key={item.id}
//               className="relative overflow-hidden rounded-lg shadow-md bg-white cursor-pointer"
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => setSelectedImage(item)}
//               layoutId={`card-${item.id}`}
//             >
//               <motion.img
//                 src={item.src}
//                 alt={item.title}
//                 className="w-full h-80 object-cover"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {item.title}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Modal for fullscreen image */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             className="fixed inset-0 backdrop-blur-sm z-300 flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)}
//           >
//             <motion.div
//               className="relative max-w-4xl w-full"
//               layoutId={`card-${selectedImage.id}`}
//             >
//               <motion.img
//                 src={selectedImage.src}
//                 alt={selectedImage.title}
//                 className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
//               />
//               <motion.div
//                 className="absolute bottom-0 left-0 right-0 p-6"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 <h3 className="text-xl font-bold text-white">
//                   {selectedImage.title}
//                 </h3>
//               </motion.div>

//               <motion.button
//                 className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setSelectedImage(null);
//                 }}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-gray-800"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Gallery;
