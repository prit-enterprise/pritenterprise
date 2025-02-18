import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MapPin, Phone, Mail } from "lucide-react";
const Contact = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '500px'
  };
  const center = {
    lat: 22.8373,
    lng: 74.2536 // Coordinates for Dahod
  };
  return <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="py-24 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-semibold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-500">Get in touch with Dahod's exclusive distributor for Davat Beverages</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-gray-400" />
                  <div>
                    <p className="text-lg text-gray-900">Visit Us</p>
                    <p className="text-gray-500">L/201/5,  GIDC Phase-1, Chakaliya Road,
Dahod</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-gray-400" />
                  <div>
                    <p className="text-lg text-gray-900">Call Us</p>
                    <p className="text-gray-500">+91-9408431514</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-gray-400" />
                  <div>
                    <p className="text-lg text-gray-900">Email Us</p>
                    <p className="text-gray-500">contact@pritenterprise.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Business Hours</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <span className="text-gray-500">Monday - Saturday</span>
                  <span className="text-gray-900">8:00 AM - 7:00 PM</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <span className="text-gray-500">Sunday</span>
                  <span className="text-gray-900">8:00 AM - 3:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;