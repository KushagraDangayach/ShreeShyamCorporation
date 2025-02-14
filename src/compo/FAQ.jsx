const FAQ = () => {
    const faqs = [
        {
          question: "What types of chickpeas do you offer?",
          answer: "We offer various types of chickpeas including Kabuli chickpeas, Desi chickpeas, and organic varieties. All our chickpeas are sourced from certified farms and undergo strict quality control."
        },
        {
          question: "Do you provide bulk orders?",
          answer: "Yes, we specialize in bulk orders for businesses and provide competitive pricing for large quantities. Please contact our sales team for detailed quotations."
        },
        {
          question: "What are your shipping terms?",
          answer: "We offer worldwide shipping with various options including sea freight and air cargo. Shipping terms and costs vary based on destination and order size."
        },
        // Add more FAQs as needed
      ];
    
      return (
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
}

export default FAQ
