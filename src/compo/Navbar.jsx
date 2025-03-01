import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const handleDownloadCatalogue = () => {
    const pdfUrl = "/Shri Shyam Corporation.pdf";
    
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "Shri Shyam Corporation.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`sticky w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#4F9153]/95 shadow-xl backdrop-blur-sm ' 
          : 'bg-[#4F9153] shadow-xl'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#93C572] to-[#4F9153] rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <span className="text-xl font-bold text-white">SC</span>
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] bg-clip-text text-transparent">
              Shri Shyam Corporation
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {[
              { path: "/", label: "Home" },
              { path: "/products", label: "Products" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 relative group ${
                  isActivePath(item.path)
                    ? 'text-[#FFFFFF] font-semibold '
                    : 'text-[#E7F3EF] font-medium hover:text-white  '
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFFFFF] to-[#93C572] transform origin-left transition-transform duration-300 ${
                    isActivePath(item.path)
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
            
            <button
              onClick={handleDownloadCatalogue}
              className="ml-2 px-4 py-2 rounded-lg bg-white text-[#4F9153] font-semibold flex items-center space-x-1 hover:bg-[#E7F3EF] transition-colors duration-300 transform hover:scale-105 shadow-md"
            >
              <span>Product Catalogue</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" 
                />
              </svg>
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#4F9153]/20 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 text-[#E7F3EF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-screen opacity-100 py-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
              { path: "/products", label: "Products" },
              // { path: "/faq", label: "FAQ" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  isActivePath(item.path)
                    ? 'bg-[#93C572]/20 font-semibold text-white'
                    : 'text-[#a3e590] hover:bg-[#93C572]/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Product Catalogue Download Button for Mobile */}
            <button
              onClick={() => {
                handleDownloadCatalogue();
                setIsMobileMenuOpen(false);
              }}
              className="mx-4 mt-2 px-4 py-3 rounded-lg bg-white text-[#4F9153] font-semibold flex items-center justify-center space-x-2 shadow-md"
            >
              <span>Download Product Catalogue</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
