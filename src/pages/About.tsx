
const About = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="bg-[#f5f5f7] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-semibold text-gray-900 mb-6">About Us</h1>
          <p className="text-xl text-gray-500">
            Dahod's premier beverage company since 1999, now exclusive partners with Davat Beverages
          </p>
        </div>
      </div>

      {/* Company History */}
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded by Mr. Ripal Desai in 1999, Prit Enterprise has grown from a small beverage manufacturer to Davat Beverage's Super Stockist for Dahod District. Our commitment to quality and customer service has been the cornerstone of our success.
            </p>
            <p className="text-gray-600">
              In 2018, we proudly became the exclusive distributor for Davat Beverages, marking a new chapter in our journey to deliver excellence in beverage distribution.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/company-image.jpg" 
              alt="Prit Enterprise History" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Partnership Highlight */}
      <div className="bg-[#f5f5f7] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-6">Our Partnership with Davat Beverages</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Bringing world-class beverages to Gujarat and beyond through our exclusive partnership
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Modern Production</h3>
              <p className="text-gray-600">
                State-of-the-art facilities in Rajkot ensuring the highest quality standards
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Wide Coverage</h3>
              <p className="text-gray-600">
                Serving customers across Gujarat, Maharashtra, Madhya Pradesh, and Rajasthan
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Product Innovation</h3>
              <p className="text-gray-600">
                Continuous research and development for better beverage solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f5f5f7] p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Quality First</h3>
              <p className="text-gray-600">
                We maintain the highest standards in product quality and storage conditions
              </p>
            </div>
            <div className="bg-[#f5f5f7] p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Our success is measured by our customers' satisfaction and growth
              </p>
            </div>
            <div className="bg-[#f5f5f7] p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously adapt to meet evolving market needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
