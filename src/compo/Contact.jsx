import { useEffect } from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [])
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#E7F3EF] to-[#F5F9F7]">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4F9153] mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-[#5C8374] leading-relaxed">
              Have questions about our products or services? We&apos;d love to hear from you. 
              Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <div className="bg-[#E7F3EF]/30 p-8 md:p-12 rounded-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-[#4F9153] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold text-[#4F9153] mb-2">Address</h3>
                    <p className="text-[#5C8374]">
                    B-54, Rajdhani Krishi Mandi, <br/> Kukarheda, Sikar Road, <br/> Jaipur, India
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4F9153] mb-2">Email</h3>
                    <p className="text-[#5C8374]">support@shrishyamcorporation.in</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4F9153] mb-2">Phone</h3>
                    <p className="text-[#5C8374]">+91 91663 31604</p>
                  </div>
                  {/* <div>
                    <h3 className="font-semibold text-[#4F9153] mb-2">Business Hours</h3>
                    <p className="text-[#5C8374]">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div> */}
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-[#4F9153] mb-6">
                  Send us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map or Additional Info Section */}
      <div className="bg-[#E7F3EF]/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#4F9153] mb-6">
              Visit Our Office
            </h2>
            <p className="text-[#5C8374] mb-8">
              We&apos;re conveniently located in the heart of the business district. 
              Stop by during business hours to meet our team and discuss your needs in person.
            </p>
            {/* Add Map Component Here if needed */}
            <div className="aspect-video bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Replace with actual map component */}
            <div className="w-full h-full bg-[#F5F9F7] flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4452590166416!2d73.77356887523872!3d18.599032282509796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9002da40695%3A0x512fd13b7a448155!2sSwami%20Sparsh!5e0!3m2!1sen!2sin!4v1738490001909!5m2!1sen!2sin"
              className="h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
