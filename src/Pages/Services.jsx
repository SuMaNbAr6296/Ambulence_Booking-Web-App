import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Import your images from the assets folder
import imgEmergency from "../assets/emergency.jpg";
import imgICU from "../assets/icu.jpg";
import imgAC from "../assets/ac-ambulance.jpg";
import imgDeadBody from "../assets/dead-body.jpg";
import imgInterCity from "../assets/inter-city.jpg";

export default function Services() {
  const serviceList = [
    { title: "Emergency Ambulance", img: imgEmergency },
    { title: "ICU Ambulance", img: imgICU },
    { title: "AC/Non-AC Ambulance", img: imgAC },
    { title: "Dead Body Ambulance", img: imgDeadBody },
    { title: "Inter-city Transfer", img: imgInterCity },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-20 mx-auto max-w-7xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Our <span className="text-red-500">Services</span>
        </h1>

        {/* Grid Layout for Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden rounded-2xl group hover:border-red-500/50 transition-all duration-300"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  Professional and reliable support available 24/7.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}