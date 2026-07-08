import { motion } from "framer-motion";

const FeatureProducts = () => {
  const products = [
    {
      id: 1,
      title: "Rolling Mill Plant",
      image: "images/ProductsImgaes/product-images/rolling-mill-plants.png",
      description:
        "Complete rolling mill solutions for various metal processing needs",
    },
    {
      id: 2,
      title: "Gear & Gearboxes",
      image: "images/ProductsImgaes/gear-boxes.jpg",
      description:
        "High-performance gears and gearboxes for industrial applications",
    },
    {
      id: 3,
      title: "TMT Equipment",
      image: "images/ProductsImgaes/tmt-equipments.webp",
      description:
        "Thermo-Mechanical Treatment equipment for reinforced steel bars",
    },
    {
      id: 4,
      title: "Rolling Mill Parts",
      image: "images/ProductsImgaes/rolling-mill-parts.jpg",
      description:
        "Precision components for rolling mill maintenance and repair",
    },
    {
      id: 5,
      title: "Hot Billet Shearing Machines",
      image: "images/ProductsImgaes/hot-billet-shearing-machine.jpg",
      description: "Heavy-duty metal shearing and cutting solutions",
    },
    {
      id: 6,
      title: "Material Handling Equipment",
      image: "/images/ProductsImgaes/product-images/material-handling-img.jpg",
      description: "Efficient systems for moving and processing metal products",
    },
    {
      id: 7,
      title: "Other Allied Machinery",
      image: "/images/ProductsImgaes/product-images/Other-Allied-Machinery.jpg",
      description:
        "Complementary equipment for complete metal processing lines",
    },
    {
      id: 8,
      title: "Rolling Mill Stands",
      image: "/images/ProductsImgaes/product-images/rolling-mill-stand.png",
      description: "Durable stands for various rolling mill configurations",
    },
    {
      id: 9,
      title: "Housingless Mill Stands",
      image: "images/ProductsImgaes/product-images/housing-less-stand.jpg",
      description:
        "Compact and efficient mill stands for space-constrained facilities",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Our Product <span className="text-orange-600">Categories</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-2"></div>
          <p className="text-gray-600">
            Atlas Rolling Mill has been manufacturing high-quality rolling mill
            equipment and components for the metal processing industry.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProducts;
