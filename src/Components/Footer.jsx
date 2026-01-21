export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm py-8 relative z-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white tracking-wide mb-1">
            DIAGNOEASY
          </h2>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-gray-400 text-sm mb-1">Emergency Helpline</p>
          <a className="text-xl font-bold text-red-500 hover:text-red-400 transition-colors" href="tel:+91180041229513">
            +91 1800 4122 9513
          </a>
        </div>
      </div>
    </footer>
  );
}
