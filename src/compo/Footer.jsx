import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' }
  ];

  const products = [
    { name: 'All Products', path: '/products' },
    { name: 'Chickpea Products', path: '/products#chickpea' },
    { name: 'Grains or Spices', path: '/products#grains-spices' },
  ];

  const contactInfo = [
    { label: 'Address', value: 'B-54, Rajdhani Krishi Mandi, Kukarheda, Sikar Road, Jaipur, India' },
    { label: 'Phone', value: '+91 91663 31604' },
    { label: 'Email', value: 'support@shrishyamcorporation.in' }
  ];

  // const socialLinks = [
  //   { name: 'Facebook', icon: '', url: '#' },
  //   { name: 'Twitter', icon: '', url: '#' },
  //   { name: 'LinkedIn', icon: '', url: '#' },
  //   { name: 'Instagram', icon: '', url: '#' }
  // ];

  return (
    <footer className="bg-[#4F9153]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Shri Shyam Corporation</h3>
            <p className="text-white mb-4">
              Premium agricultural products sourced from trusted farmers worldwide.
            </p>

          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-[#8fe995] transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Our Products</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    to={product.path}
                    className="text-white hover:text-[#8fe995] transition duration-300"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex">
                  <span className="text-white">
                    <strong className="text-white mr-2">{info.label}:</strong>
                    {info.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#4F9153]/10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm">
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} Shri Shyam Corporation. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
