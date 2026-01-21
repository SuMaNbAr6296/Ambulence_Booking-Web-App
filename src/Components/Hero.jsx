import heroImg from "../assets/2741.jpg";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left z-10">
            <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-semibold mb-6 animate-pulse">
              🚑 #1 Emergency Service in Kolkata
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Book 24/7 <span className="rgb-text">Emergency Ambulance</span> Services
            </h2>

            <p className="mt-4 text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
              Reliable, fast, and medically equipped. Call now to get confirmation in less than 1 minute.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="tel:+916296774399"
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-gradient-to-r from-red-600 to-rose-600 shadow-lg shadow-red-600/40 hover:scale-105 hover:shadow-red-600/60 transition-all"
              >
                Call +91 62967 74399
              </a>
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-xl text-white border border-white/20 glass hover:bg-white/10 transition-all"
              >
                Book Online
              </a>
            </div>

            {/* Badges */}
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-3">
              {[
                "✅ Quick & reliable",
                "✅ Transparent pricing",
                "✅ Trained staff",
                "✅ 24*7 available",
                "✅ Fully equipped",
                "✅ Hygienic vehicles"
              ].map((badge) => (
                <span key={badge} className="glass px-4 py-2 rounded-lg text-sm font-medium text-gray-200">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center relative z-10">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-2xl blur opacity-30 animate-pulse"></div>
              <img
                src={heroImg}
                alt="Ambulance Service"
                className="relative w-full max-w-xl md:max-w-2xl rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

