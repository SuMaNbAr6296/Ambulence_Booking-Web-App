const features = [
  {
    title: "24/7 Emergency Support",
    desc: "Ambulance available anytime, anywhere in Kolkata. We are just a call away.",
    icon: "🚑"
  },
  {
    title: "Trained Staff",
    desc: "Experienced drivers and certified paramedics to ensure patient safety.",
    icon: "👨‍⚕️"
  },
  {
    title: "ICU Ambulance",
    desc: "Advanced ICU setup for critical patients with ventilator and oxygen support.",
    icon: "🏥"
  },
];

export default function Features() {
  return (
    <section className="py-20 relative">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
          Why Choose <span className="text-red-500">Us?</span>
        </h3>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300 group"
            >
              <div className="text-4xl mb-4 bg-white/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
