
const About = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="bg-[#f5f5f7] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-semibold text-gray-900 mb-6">About Us</h1>
          <p className="text-xl text-gray-500">
            Established in 2009, we've grown to become one of Gujarat's leading beverage distributors
          </p>
        </div>
      </div>

      {/* Company History */}
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded by Mr. Desai Ripal Nanubhai in 2009, Prit Enterprise has grown from a local distributor to a major player in Gujarat's beverage industry. Our commitment to quality and customer service has been the cornerstone of our success.
            </p>
            <p className="text-gray-600">
              Today, we proudly serve thousands of retailers and have established ourselves as a trusted name in beverage distribution across the region.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/images/company.jpg" 
              alt="Prit Enterprise Facility"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-[#f5f5f7] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Quality First</h3>
              <p className="text-gray-600">
                We maintain the highest standards in product quality and storage conditions
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Our success is measured by our customers' satisfaction and growth
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
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
