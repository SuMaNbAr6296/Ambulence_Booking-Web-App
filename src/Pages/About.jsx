import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Import your main about image from assets
import aboutImage from "../assets/about-ambulance.jpg";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-20 mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Left Side: Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About <span className="text-red-500">Us</span></h1>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              We provide 24/7 emergency ambulance services with trained staff,
              ICU ambulances, and quick response across Kolkata. Our mission is
              to provide life-saving transportation with the highest level of
              medical care during critical moments.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-xl border-l-4 border-red-500">
                <h4 className="font-bold text-3xl text-white">24/7</h4>
                <p className="text-sm text-gray-400 mt-1">Availability</p>
              </div>
              <div className="glass p-6 rounded-xl border-l-4 border-red-500">
                <h4 className="font-bold text-3xl text-white">15 Min</h4>
                <p className="text-sm text-gray-400 mt-1">Avg. Response</p>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2">
            <div className="relative">
              {/* Decorative background element */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-red-600 to-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>

              <img
                src={aboutImage}
                alt="Ambulance Service Kolkata"
                className="relative rounded-2xl shadow-2xl border border-white/10 w-full h-[400px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
