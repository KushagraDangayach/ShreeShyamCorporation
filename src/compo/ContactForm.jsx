import { useState } from "react";
import emailjs from '@emailjs/browser';

const countryData = [
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  // Add more countries
].sort((a, b) => a.name.localeCompare(b.name));

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false
  });
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const redirectToWhatsApp = () => {
    const whatsappMessage = `
      Hello Shri Shyam Corporation Team
    `.trim();
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = '+919166331604';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const handlewp = async (e)=>{
    e.preventDefault();
    redirectToWhatsApp();
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: `${formData.countryCode}${formData.phone}`,
        message: formData.message,
      };

      await emailjs.send(
        'service_vvb9f98',
        'template_mspnwdo',
        templateParams,
        'unzesMX_wSaJ-Yaqm'
      );

      setStatus({ loading: false, error: null, success: true });

      setTimeout(() => {
        setFormData({ name: '', email: '', countryCode: '+91', phone: '', message: '' });
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus({
        loading: false,
        error: 'Failed to send message. Please try again later.',
        success: false
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountrySelect = (code) => {
    setFormData(prev => ({
      ...prev,
      countryCode: code
    }));
    setIsCountryDropdownOpen(false);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  return (
    <div className="space-y-6">
      {status.success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Message sent successfully!
        </div>
      )}
      
      {status.error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {status.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#5C8374]">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full px-4 py-3 text-black bg-white border border-[#E7F3EF] rounded-lg focus:ring-2 focus:ring-[#93C572] focus:border-transparent transition duration-200 focus:outline-none"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            disabled={status.loading}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#5C8374]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-4 py-3 text-black bg-white border border-[#E7F3EF] rounded-lg focus:ring-2 focus:ring-[#93C572] focus:border-transparent transition duration-200 focus:outline-none"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            disabled={status.loading}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#5C8374]">
            Phone Number
          </label>
          <div className="mt-1 flex">
            <div className="relative">
              <button
                type="button"
                className="text-black inline-flex items-center px-4 py-3 border border-r-0 border-[#E7F3EF] rounded-l-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#93C572]"
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                disabled={status.loading}
              >
                {countryData.find(c => c.code === formData.countryCode)?.flag} {formData.countryCode}
              </button>
              
              {isCountryDropdownOpen && (
                <div className="absolute z-10 mt-1 w-64 text-black bg-white border border-[#E7F3EF] rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {countryData.map((country) => (
                    <button
                      key={`${country.name}-${country.code}`}
                      type="button"
                      className="w-full text-left px-4 py-2 hover:bg-[#E7F3EF] focus:outline-none focus:bg-[#E7F3EF] flex items-center space-x-2"
                      onClick={() => handleCountrySelect(country.code)}
                    >
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                      <span className="text-gray-500">{country.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="flex-1 px-4 py-2 ml-1 text-black bg-white border border-[#E7F3EF] rounded-r-lg focus:ring-2 focus:ring-[#93C572] focus:border-transparent transition duration-200 focus:outline-none"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handlePhoneChange}
              disabled={status.loading}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#5C8374]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full px-4 py-3 text-black bg-white border border-[#E7F3EF] rounded-lg focus:ring-2 focus:ring-[#93C572] focus:border-transparent transition duration-200 resize-none focus:outline-none"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            disabled={status.loading}
          />
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className={`w-full cursor-pointer bg-gradient-to-r from-[#93C572] to-[#4F9153] text-white px-8 py-4 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 text-lg font-medium ${
            status.loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {status.loading ? 'Sending...' : 'Send Message'}
        </button>

        <button
        onClick={handlewp}
  className="w-full cursor-pointer bg-[#25D366] text-white px-8 py-4 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 text-lg font-medium"
>
  Connect with WhatsApp
</button>
      </form>
    </div>
  );
};

export default ContactForm;
