
const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#FFDE59] py-20 neo-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">About Us</h1>
          <p className="text-xl text-black/70">
            Dahod's premier beverage company since 1999, now exclusive partners with Davat Beverages
          </p>
        </div>
      </div>

      {/* Company History */}
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#61E8E1] p-8 neo-border neo-shadow">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-black/80 mb-6">
              Founded by Mr. Ripal Desai in 1999, Prit Enterprise has grown from a small beverage manufacturer to Davat Beverage's Super Stockist for Dahod District. Our commitment to quality and customer service has been the cornerstone of our success.
            </p>
            <p className="text-black/80">
              In 2018, we proudly became the exclusive distributor for Davat Beverages, marking a new chapter in our journey to deliver excellence in beverage distribution.
            </p>
          </div>
          <div className="neo-border neo-shadow hover:-translate-y-1 transition-transform">
            <img 
              src="/company-image.jpg" 
              alt="Prit Enterprise History" 
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
      </div>

      {/* Partnership Highlight */}
      <div className="bg-[#FF90B3] py-20 neo-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Partnership with Davat Beverages</h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Bringing world-class beverages to Gujarat and beyond through our exclusive partnership
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Production",
                desc: "State-of-the-art facilities in Rajkot ensuring the highest quality standards"
              },
              {
                title: "Wide Coverage",
                desc: "Serving customers across Gujarat, Maharashtra, Madhya Pradesh, and Rajasthan"
              },
              {
                title: "Product Innovation",
                desc: "Continuous research and development for better beverage solutions"
              }
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 neo-border neo-shadow hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-black/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                desc: "We maintain the highest standards in product quality and storage conditions"
              },
              {
                title: "Customer Focus",
                desc: "Our success is measured by our customers' satisfaction and growth"
              },
              {
                title: "Innovation",
                desc: "We continuously adapt to meet evolving market needs"
              }
            ].map((item) => (
              <div key={item.title} className="bg-[#61E8E1] p-8 neo-border neo-shadow hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-black/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
