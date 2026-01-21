import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-50 transition-all duration-300 glass border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-wide group-hover:text-red-400 transition-colors">
              DIAGNOEASY
            </h1>
            <p className="text-xs text-gray-400 tracking-wider">CARE THAT COMES HOME</p>
          </div>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link className="hover:text-red-400 transition-colors hover:scale-105" to="/">Home</Link>
          <Link className="hover:text-red-400 transition-colors hover:scale-105" to="/about">About Us</Link>
          <Link className="hover:text-red-400 transition-colors hover:scale-105" to="/services">Our Services</Link>
          <Link className="hover:text-red-400 transition-colors hover:scale-105" to="/contact">Contact Us</Link>
        </nav>

        {/* Call Us */}
        <a
          href="tel:+91180041229513"
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 transition-all"
        >
          <FiPhoneCall className="animate-pulse" />
          <span>Call Us</span>
        </a>
      </div>
    </header>
  );
}
