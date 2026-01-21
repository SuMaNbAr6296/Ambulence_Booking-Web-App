import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pickup: "",
    sendTo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sendNumber = formData.sendTo.trim();

    if (!sendNumber) {
      alert("Please enter SMS number!");
      return;
    }

    const msg = `🚑 Ambulance Booking Request

👤 Name: ${formData.name}
📞 Patient Email: ${formData.email}
📍 Pickup: ${formData.pickup}

Please confirm booking.`;

    // ✅ This will open SMS app with message ready
    window.location.href = `sms:${sendNumber}?body=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="mx-auto max-w-4xl px-4 relative z-10">
        <div className="glass-card rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Book an <span className="text-red-500">Ambulance</span>
            </h3>
            <p className="text-gray-400">Fill in the details below and we will get back to you immediately.</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Pickup Information</label>
              <input
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                placeholder="Enter complete pickup address"
                required
              />
            </div>

            {/* ✅ SMS number input */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">SMS Recipient Number</label>
              <input
                name="sendTo"
                value={formData.sendTo}
                onChange={handleChange}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                placeholder="Enter Number to Send SMS (Example: 6296774399)"
                required
              />
            </div>

            <button
              type="submit"
              className="md:col-span-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-8 py-4 font-bold text-white shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] transition-all"
            >
              Send Booking Request via SMS
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-gray-500">
            Note: This will open your default messaging app with the details pre-filled. You just need to hit send.
          </p>
        </div>
      </div>
    </section>
  );
}
