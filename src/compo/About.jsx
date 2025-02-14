/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { Link } from "react-router-dom";


// const StatCard = ({ number, label }) => (
//   <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-1 transition duration-300">
//     <div className="text-4xl font-bold text-[#4F9153] mb-2">{number}</div>
//     <div className="text-[#5C8374]">{label}</div>
//   </div>
// );

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [])
  // const stats = [
  //   { number: "20+", label: "Years Experience" },
  //   { number: "1000+", label: "Global Clients" },
  //   { number: "50+", label: "Products" },
  //   { number: "10+", label: "Countries Served" }
  // ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#E7F3EF] to-[#F5F9F7]">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4F9153] mb-6">
              Our Story
            </h1>
            <p className="text-lg text-[#5C8374] leading-relaxed">
              We&apos;ve been dedicated to delivering premium agricultural products 
              while supporting sustainable farming practices and empowering local communities.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="https://media.istockphoto.com/id/1401722160/photo/sunny-plantation-with-growing-soya.jpg?s=612x612&w=0&k=20&c=r_Y3aJ-f-4Oye0qU_TBKvqGUS1BymFHdx3ryPkyyV0w="
                alt="Sustainable Farming" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4F9153] mb-6">
                Our Mission
              </h2>
              <p className="text-[#5C8374] mb-6 leading-relaxed">
              Our core values lie in quality, sincerity, and dedication to best serve our customers. In order to satiate the wide variety of needs that exist in the marketplace, we have a diverse portfolio of high quality and nutritious produce which include Kabuli Chickpeas, Desi Chickpeas, Green Moong Beans, Coriander Seed, Cumin Seed, Green Moong Beans, and Red Kidney Beans to name a few.

Our relationship with our vendor exists and is cultivated with a belief system of quality and hygiene. We ensure periodic and variety of quality testing to meet international quality standards for our vendors. Apart from having higher nutritional value, we offer a longer shelf life for our esteemed clients.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#4F9153] mr-3">✓</span>
                  <span className="text-[#5C8374]">Supporting sustainable farming practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4F9153] mr-3">✓</span>
                  <span className="text-[#5C8374]">Ensuring premium product quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4F9153] mr-3">✓</span>
                  <span className="text-[#5C8374]">Building lasting partnerships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="bg-[#E7F3EF]/30 py-16">
        <h1 className=" mx-auto text-center text-3xl md:text-4xl font-bold text-[#4F9153] mb-6">Milestones</h1>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div> */}

      {/* Values Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4F9153] mb-6">
              Our Values
            </h2>
            <p className="text-[#5C8374]">
              Our core values guide everything we do, from selecting our partner farms 
              to delivering products to our customers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#E7F3EF] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-[#4F9153] mb-4">Sustainability</h3>
              <p className="text-[#5C8374]">
                We prioritize environmentally conscious farming practices and sustainable 
                resource management.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#E7F3EF] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-[#4F9153] mb-4">Quality</h3>
              <p className="text-[#5C8374]">
                We maintain rigorous quality standards throughout our entire supply chain.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#E7F3EF] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-[#4F9153] mb-4">Partnership</h3>
              <p className="text-[#5C8374]">
                We build long-lasting relationships with farmers, clients, and communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-8 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4F9153] mb-6">
              Join Our Journey
            </h2>
            <p className="text-[#5C8374] mb-8">
              Partner with us to bring premium agricultural products to markets worldwide.
            </p>
            <Link to="/contact">
            <button className="bg-gradient-to-r from-[#93C572] to-[#4F9153] text-white px-8 py-4 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 text-lg cursor-pointer">
              Get In Touch
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;