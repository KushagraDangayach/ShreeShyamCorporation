/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProductCard = ({ name, category, description, image, specifications }) => (
  <div className="bg-[#E7F3EF] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="aspect-square relative overflow-hidden rounded-t-xl">
      <div className="absolute top-4 right-4">
        <span className="bg-[#93C572] text-white text-sm font-medium px-4 py-1.5 rounded-full">
          {category === 'chickpea' ? 'Chickpea Products' : 'Grains & Spices'}
        </span>
      </div>
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-semibold text-[#4F9153] mb-3">{name}</h3>
      <p className="text-[#5C8374] mb-6 leading-relaxed">{description}</p>
      <div className="mb-6 bg-white/50 rounded-lg p-4">
        <h4 className="text-lg font-medium text-[#4F9153] mb-3">Specifications:</h4>
        <ul className="space-y-2">
          {specifications.map((spec, index) => (
            <li key={index} className="text-[#5C8374] flex items-center">
              <span className="w-1.5 h-1.5 bg-[#93C572] rounded-full mr-2"></span>
              {spec}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-[#4F9153]"></span>
        <Link to="/contact">
        <button className="bg-gradient-to-r cursor-pointer from-[#93C572] to-[#4F9153] text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300">
          Request Quote
        </button>
        </Link>
      </div>
    </div>
  </div>
);

const Products = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [])

  const products = [
    {
      id: 1,
      name: "Kabuli Chickpeas",
      category: "chickpea",
      description: "Premium quality large Kabuli chickpeas, perfect for hummus and Middle Eastern cuisine. Known for their smooth texture and nutty flavor.",
      image: "https://img.freepik.com/free-photo/front-view-white-beans-with-peas-burlap-bag-with-wooden-spoons-wooden-surface_141793-6842.jpg",
      specifications: [
        "Size: 9mm",
        "Color: Cream",
        "Origin: Turkey",
        "Processing: Machine Cleaned"
      ]
    },
    {
      id: 2,
      name: "Desi Chickpeas",
      category: "chickpea",
      description: "Traditional brown Desi chickpeas with high protein content and rich flavor, ideal for grinding into flour or making traditional dishes.",
      image: "https://lsmedia.linker-cdn.net/346193/2024/13001808.jpeg?d=760x760&scale=0&bg=0",
      specifications: [
        "Size: 7mm",
        "Color: Brown",
        "Origin: India",
        "Processing: Double Cleaned"
      ]
    },
    {
      id: 3,
      name: "Chickpea Flour",
      category: "chickpea",
      description: "Finely ground chickpea flour, perfect for gluten-free baking and traditional recipes. Made from premium quality chickpeas.",
      image: "https://cdn.mothersalwaysright.com/wp-content/uploads/2024/10/Chickpea_Flour.jpeg",
      specifications: [
        "Texture: Fine",
        "Color: Yellow",
        "Processing: Stone Ground",
        "Packaging: Vacuum Sealed"
      ]
    },
    {
      id: 4,
      name: "Premium Basmati Rice",
      category: "grains-spices",
      description: "Aged Basmati rice with exceptional aroma and length. Perfect for biryanis and traditional rice dishes.",
      image: "https://www.isayorganic.com/cdn/shop/files/iso__0005_WhiteRice1_1024x1024@2x.jpg?v=1736270108",
      specifications: [
        "Age: 2 Years",
        "Length: Extra Long",
        "Origin: India",
        "Processing: Triple Polished"
      ]
    },
    {
      id: 5,
      name: "Organic Turmeric",
      category: "grains-spices",
      description: "High-curcumin organic turmeric powder from selected farms. Known for its intense color and authentic flavor.",
      image: "https://nuttyyogi.com/cdn/shop/products/unnamed.jpg?v=1716977923",
      specifications: [
        "Curcumin: 4%",
        "Origin: India",
        "Certification: Organic",
        "Processing: Steam Sterilized"
      ]
    },
    {
      id: 6,
      name: "Premium Black Pepper",
      category: "grains-spices",
      description: "Premium black peppercorns with intense aroma and heat. Carefully selected and processed to maintain natural oils.",
      image: "https://thottamfarmfresh.com/wp-content/uploads/2020/10/Black-peppercorns.webp",
      specifications: [
        "Grade: Premium",
        "Origin: Vietnam",
        "Type: Tellicherry",
        "Processing: Sun Dried"
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products'},
    { id: 'chickpea', name: 'Chickpea Products' },
    { id: 'grains-spices', name: 'Grains & Spices' }
  ];

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && categories.find(cat => cat.id === hash)) {
      setActiveCategory(hash);
    }
  }, [location]);

  useEffect(() => {
    let filtered = [...products];
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }
    setFilteredProducts(filtered);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E7F3EF] to-[#F5F9F7]">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-[#93C572] to-[#4F9153] text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Premium Products</h1>
            <p className="text-xl opacity-90">Discover our extensive range of high-quality agricultural products</p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md shadow-md z-10">
  <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
    <div className="py-2 sm:py-3">
      <div className="flex items-center justify-start overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 sm:gap-3 pb-1 sm:pb-0 min-w-0">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base whitespace-nowrap transition-all duration-300 
                ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#93C572] to-[#4F9153] text-white shadow-sm'
                    : 'bg-white text-[#5C8374] hover:bg-[#E7F3EF] hover:shadow-sm'
                }`}
            >
              <span className="flex items-center"> {category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white/50 backdrop-blur-sm rounded-2xl">
            <h3 className="text-2xl text-[#4F9153] font-semibold mb-2">No products found</h3>
            <p className="text-[#5C8374]">Try adjusting your filters or search query</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;