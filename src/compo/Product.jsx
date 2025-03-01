/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProductCard = ({ name, category, image, specifications, whatWeProvide, specBackground, provideBackground }) => {
  const formatSpecification = (spec) => {
    const colonIndex = spec.indexOf(':');
    
    if (colonIndex !== -1) {
      const parameter = spec.substring(0, colonIndex + 1);
      const value = spec.substring(colonIndex + 1);
      
      return (
        <>
          <strong>{parameter}</strong>{value}
        </>
      );
    }
    
    return spec;
  };

  return (
    <div className="bg-[#ecdfd6] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
      <div className="aspect-[16/9] md:aspect-[16/6] relative overflow-hidden rounded-t-xl">
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-[#93C572] text-white text-sm font-medium px-4 py-1.5 rounded-full">
            {category === 'chickpea' ? 'Chickpea Products' : 'Grains & Spices'}
          </span>
        </div>
        
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <h3 className="text-white text-5xl font-bold pl-6 pr-16 drop-shadow-lg">
            {name}
          </h3>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-col md:flex-row gap-4 mb-6 flex-grow">
          <div className="lg:w-3/5 w-full rounded-lg p-4 relative overflow-hidden">
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url('${specBackground}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(3px)"
              }}
            ></div>
            
            <div className="absolute inset-0 bg-[#ecdfd6]/40 z-0"></div>
            
            
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-black mb-3">Specifications:</h4>
              <ul className="space-y-2">
                {specifications.map((spec, index) => (
                  <li key={index} className="text-black flex items-start my-4">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2 mt-2.5"></span>
                    <span>{formatSpecification(spec)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex-1 rounded-lg p-4 relative overflow-hidden">
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url('${provideBackground}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(3px)"
              }}
            ></div>
            
            <div className="absolute inset-0 bg-[#ecdfd6]/40 z-0"></div>
            
            <div className="relative z-10">
              <h4 className="text-lg font-bold text-black mb-3">What We Provide:</h4>
              <ul className="space-y-2">
                {whatWeProvide.map((item, index) => (
                  <li key={index} className="text-black font-bold flex items-center my-4">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center mt-auto">
          <Link to="/contact">
            <button className="bg-gradient-to-r cursor-pointer from-[#93C572] to-[#4F9153] text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300">
              Request Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

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
      name: "Turmeric",
      category: "chickpea",
      image: "https://images.moneycontrol.com/static-mcnews/2024/09/20240920102005_12.jpg?impolicy=website&width=770&height=431",
      specifications: [
        "Varieties: Eagle, Badami, Scooter, Organic",
        "Color: Yellowish-Brown to Light Green",
        "Packing: As per Customer Request / (1Kg/2Kg/5Kg/10Kg/25Kg/50Kg)",
        "Usage: Used in cooking, spice blends and traditional medicine"
      ],
      whatWeProvide: [
        "Quality Certifications",
        "Bulk Packaging",
        "Custom Sorting",
        "Direct Farm Sourcing"
      ],
      specBackground: "https://www.6rasa.com/cdn/shop/articles/Turmeric.jpg?v=1664105054",
      provideBackground: "https://info.ehl.edu/hubfs/EHL-Passugg_Blog_Kurkuma_Titelbild_001.jpg"
    },
    {
      id: 2,
      name: "Chilli",
      category: "chickpea",
      image: "https://images.unsplash.com/photo-1526346698789-22fd84314424?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwY2hpbGxpfGVufDB8fDB8fHww",
      specifications: [
        `Varieties: Guntur, Byadgi, Teja (S17),
Kashmiri, Sannam (S4), Mundu`,
        `Color: Light- Deep Red`,
        "Type: Stem / Stemless",
        "Moisture: Below 12%",
        "Packing: As per Customer Request / (1Kg/2Kg/5Kg/10Kg/25Kg/50Kg)",
        `Usage: : Used in curries, pickles,
and spice blends`
      ],
      whatWeProvide: [
        "With Stem Chilli",
        "Without Stem Chilli",
        "Chilli Seeds",
        "Chilli Powder",
        "Organic Chilli Poweder"
      ],
      specBackground: "https://m.media-amazon.com/images/I/519UTs5f0hL._AC_UF1000,1000_QL80_.jpg",
      provideBackground: "https://images.news18.com/ibnlive/uploads/2023/02/chilli-pepper-dark-surface-167758613316x9.jpg?impolicy=website&width=640&height=360"
    },
    {
      id: 3,
      name: "Chickpeas",
      category: "chickpea",
      image: "https://cdn.mothersalwaysright.com/wp-content/uploads/2024/10/Chickpea_Flour.jpeg",
      specifications: [
        `100% Authentic & Naturally Grown: Sourced directly from
        India's most fertile regions, ensuring top-quality produce.`,
        `Rich in Protein & Fiber: A powerhouse of nutrition, perfect
for a healthy and balanced diet.`,
        `Versatile & Global: Ideal for traditional Indian dishes,
Mediterranean delicacies, Middle Eastern recipes, and
modern superfood trends.`,
        `Sustainably Harvested: Grown using eco-friendly and
ethical farming practices to preserve soil health and
biodiversity.`,
        `Superior Taste & Texture: Naturally rich, nutty, and
flavorful, our chickpeas add depth to any dish.`,
        `Low Glycemic Index: Helps in maintaining blood sugar
levels, making it an excellent choice for diabetics.`
      ],
      whatWeProvide: [
        "Desi Chana",
        "Chana Dal (Chickpea Dal)",
        "Chickpea Split",
        "Roasted Gram",
        "Roasted Gram Dal",
        "Flavoured Gram",
        "Organic Chana/Dal"
      ],
      specBackground: "https://media.istockphoto.com/id/647289202/photo/chickpeas-in-a-bowl.jpg?s=612x612&w=0&k=20&c=e9rOBg3IqTBqaVAIoFwQs_hgPR8FNkdXXEj6Um4Q6ww=",
      provideBackground: "https://png.pngtree.com/thumb_back/fh260/background/20220311/pngtree-ingredients-coarse-cereals-chickpea-hd-photography-material-image_1032272.jpg"
    },
    {
      id: 4,
      name: "Cumin Seeds",
      category: "grains-spices",
      image: "https://media.istockphoto.com/id/585162374/photo/cumin-seeds-in-wooden-spoon.jpg?s=612x612&w=0&k=20&c=3HIQc474YlkE4NAkHjWLCAxoWPd04XFC9ig2fn7V5RI=",
      specifications: [
        `Varieties: Indian Cumin, Organic Cumin`,
        `Color: : Light Brown to Dark Brown`,
        `Standards: Singaporean , European, IPM standard`,
        "Packing: As per Customer Request / (1Kg/2Kg/5Kg/10Kg/25Kg/50Kg)",
        "Usage: Used in cooking, spice blends, and traditional medicine" 
      ],
      whatWeProvide: [
        "Whole Cumin Seeds",
        "Cumin Powder",
        "Organically grown Cumin seeds / powder"
      ],
      specBackground: "https://static1.squarespace.com/static/52bc612ae4b038e4d94a53e6/52cc7c12e4b05997f3bbd291/64be7230fcc51f770113a1f5/1690205273983/Cumin+%284%29.JPG?format=1500w",
      provideBackground: "https://c8.alamy.com/comp/2PM5219/dry-organic-raw-cumin-seeds-in-a-bowl-2PM5219.jpg"
    },
    {
      id: 5,
      name: "Coriander Seeds",
      category: "grains-spices",
      image: "https://cdn.vegetariantimes.com/wp-content/uploads/2017/01/edible-gardening-101-harvesting-coriander-seeds-2-corriander-seeds-leaves-powder.jpg",
      specifications: [
        `Varieties: Eagle, Badami, Scooter, Organic`,
        `Color: : Yellowish-Brown to Light Green`,
        "Packing: As per Customer Request / (1Kg/2Kg/5Kg/10Kg/25Kg/50Kg)",
        "Usage: Used in cooking, spice blends, and traditional medicine"
      ],
      whatWeProvide: [
        "Whole Sortex Coriander Seeds",
        "Coriander Powder",
        "Organically grown Coriander seeds/powder",
        "Roasted Coriander Seeds"
      ],
      specBackground: "https://www.puremart.in/images/products/543-coriander-seeds-100gms-1689591792.jpeg",
      provideBackground: "https://www.stylecraze.com/wp-content/uploads/2014/08/Side-Effects-Of-Coriander-Seeds-You-Should-Know_1200px.jpg.webp"
    },
    {
      id: 6,
      name: "Fennel Seeds",
      category: "grains-spices",
      image: "https://static.toiimg.com/photo/68110011.cms",
      specifications: [
        `Varieties: Green Fennel, Yellow Fennel, Organic Fennel`,
        `Color: : Green to Yellowish-Green`,
        `Standards: Europe, Singaporean`,
        "Packing: As per Customer Request / (1Kg/2Kg/5Kg/10Kg/25Kg/50Kg)",
        "Usage: Used in cooking, spice blends, and traditional medicine"
      ],
      whatWeProvide: [
        "Fennel Seeds",
        "Roasted Fennel Seeds",
        "Fennel seeds powder",
        "Organically grown Fennel Seeds",
        "Flavored Fennel Seeds"
      ],
      specBackground: "https://vibrantliving.in/cdn/shop/files/FennelSeeds.png?v=1731060016&width=2048",
      provideBackground: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/6626118e482c021b557f70b8/screenshot_2024-04-22-12-41-13-27_680d03679600f7af0b4c700c6b270fe7-640x640.jpg"
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
      <div className="bg-[url('https://thumbs.dreamstime.com/b/various-indian-spices-wooden-spoons-metal-bowls-seeds-herbs-nuts-top-view-silver-dark-stone-table-colorful-95833102.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#93C572] to-[#4F9153] opacity-0"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Premium Products</h1>
            <p className="text-xl opacity-90">Discover our extensive range of high-quality agricultural products</p>
          </div>
        </div>
      </div>

      {/* Filters  */}
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

      <div className="container mx-auto px-4 py-16">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white/50 backdrop-blur-sm rounded-2xl">
            <h3 className="text-2xl text-[#4F9153] font-semibold mb-2">No products found</h3>
            <p className="text-[#5C8374]">Try adjusting your filters or search query</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
