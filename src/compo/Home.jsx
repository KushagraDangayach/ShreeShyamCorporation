/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import InfiniteCarousel from "./InfiniteCarousel";
import ContactForm from "./ContactForm";
import { useEffect } from "react";

const ProductCategory = ({ imagesrc, title, description, products, link }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
    <div className="h-64 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
      <img className="h-full w-full" src={imagesrc} alt="" />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-semibold text-green-700 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      <div className="mb-6 h-56">
        <h4 className="text-lg font-medium text-green-600 mb-3">Products:</h4>
        <ul className="space-y-2">
          {products.map((product, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              {product}
            </li>
          ))}
        </ul>
      </div>
      
      <Link 
        to={link}
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center group w-full text-center justify-center"
      >
        View All {title}
        <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
      </Link>
    </div>
  </div>
);

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [])
  const categories = [
    {
      imagesrc: "https://media.istockphoto.com/id/647289202/photo/chickpeas-in-a-bowl.jpg?s=612x612&w=0&k=20&c=e9rOBg3IqTBqaVAIoFwQs_hgPR8FNkdXXEj6Um4Q6ww=",
      title: "Chickpea Products",
      description: "Premium quality chickpeas and derived products, perfect for your culinary needs and professional food service requirements.",
      products: [
        "Kabuli Chickpeas",
        "Desi Chickpeas",
        "Chickpea Flour",
        "Roasted Chickpeas"
      ],
      link: "/products#chickpea"
    },
    {
      imagesrc: "https://sublimehouseoftea.com/cdn/shop/articles/tips-to-keep-your-kitchen-spices-fresh-for-a-longer-period-226520.jpg?v=1675082946",
      title: "Grains & Spices",
      description: "A comprehensive selection of premium grains and aromatic spices, sourced from the finest growing regions for superior quality and authentic flavor.",
      products: [
        "Basmati Rice",
        "Whole Wheat",
        "Premium Turmeric",
        "Black Pepper",
        "Cardamom",
        "Red Chili"
      ],
      link: "/products#grains-spices"
    }
  ];

  // Rest of the Home component remains the same
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4 py-4 md:py-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-green-500 to-green-400">
                Premium Quality Agricultural Products
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                Discover our extensive range of high-quality chickpeas, grains, and spices sourced directly from trusted farmers across the globe.
              </p>
              <Link 
                to="/products" 
                className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 text-lg"
              >
                Explore Products
              </Link>
            </div>

            <div className="flex-1 max-w-sm">
              <div className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://5.imimg.com/data5/ANDROID/Default/2021/11/OF/WR/CA/10407326/agri-products-exporter-in-india-alram-exports-1526644067-3879870-jpeg-500x500.jpeg" 
                    alt="Agricultural Products Showcase"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InfiniteCarousel />

      {/* Featured Categories Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-green-700 mb-6">
              Our Product Categories
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our selection of premium agricultural products, carefully curated for quality and sustainability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <ProductCategory key={index} {...category} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
              Send us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;