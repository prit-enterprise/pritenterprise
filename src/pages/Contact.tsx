
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '500px'
  };
  const center = {
    lat: 22.840098,
    lng: 74.260932
  };
  
  const options = {
    mapTypeControl: true,
    streetViewControl: true,
    fullscreenControl: true,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="py-24 bg-[#FFDE59] neo-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">Contact Us</h1>
          <p className="text-xl text-black/70">Get in touch with Dahod's exclusive distributor for Davat Beverages</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="bg-[#61E8E1] p-8 neo-border neo-shadow">
              <h2 className="text-3xl font-bold text-black mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 bg-white p-4 neo-border">
                  <MapPin className="h-6 w-6 text-black" />
                  <div>
                    <p className="text-lg font-bold text-black">Visit Us</p>
                    <p className="text-black/70">L/201/5, GIDC Phase-1, Chakaliya Road, Dahod</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-white p-4 neo-border">
                  <Phone className="h-6 w-6 text-black" />
                  <div>
                    <p className="text-lg font-bold text-black">Call Us</p>
                    <p className="text-black/70">+91-9408431514</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-white p-4 neo-border">
                  <Mail className="h-6 w-6 text-black" />
                  <div>
                    <p className="text-lg font-bold text-black">Email Us</p>
                    <p className="text-black/70">ripaldesai76@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FF90B3] p-8 neo-border neo-shadow">
              <h2 className="text-3xl font-bold text-black mb-8">Business Hours</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white p-4 neo-border">
                  <span className="font-bold">Monday - Saturday</span>
                  <span className="text-black/70">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center bg-white p-4 neo-border">
                  <span className="font-bold">Sunday</span>
                  <span className="text-black/70">8:00 AM - 3:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="neo-border neo-shadow">
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
              <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                center={center} 
                zoom={17}
                options={options}
              >
                <Marker 
                  position={center}
                  title="PRIT Enterprise"
                />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
