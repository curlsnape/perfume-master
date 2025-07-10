import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left Section */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <img
              src="/assets/images/white logo.png"
              alt=""
              className="w-12 sm:w-16 md:w-20 lg:w-24"
            />
            <p className="text-sm sm:text-base text-white/70 max-w-md">
              Fragrance that lingers with grace,
              <br />a whisper of who you are.
            </p>
             
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-20">
              <div className="text-xs sm:text-sm text-white/70">
                <p>address line 1</p>
                <p>address line 2</p>
                <p>address line 3</p>
              </div>
              <div className="text-xs sm:text-sm flex flex-col gap-1">
                <Link to="/" className="hover:text-white text-white/70 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/" className="hover:text-white text-white/70 transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
           
          {/* Right Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-8 lg:mt-0">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-base sm:text-lg mb-2">Our Best Sellers</p>
              <Link to="/search/2" className="hover:text-white text-white/70 text-sm sm:text-base transition-colors">
                Dior Sauvage Elixir
              </Link>
              <Link to="/search/1" className="hover:text-white text-white/70 text-sm sm:text-base transition-colors">
                Escada Moon Sparkle
              </Link>
              <Link to="/search/6" className="hover:text-white text-white/70 text-sm sm:text-base transition-colors">
                Acqua di Gio
              </Link>
              <Link to="/search/5" className="hover:text-white text-white/70 text-sm sm:text-base transition-colors">
                Calyx Original (Caramel Scent)
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-base sm:text-lg mb-2">Quick Links</p>
              <Link to="/" className="hover:text-white text-white/70 text-sm sm:text-base transition-colors">
                Home
              </Link>
              <Link to="/about" className="hover:text-white text-white/70 text-sm sm:text-base transition-colors">
                About Us
              </Link>
              <Link to="/search" className="hover:text-white text-white/70 text-sm sm:text-base transition-colors">
                Products
              </Link>
              <Link to="/contact" className="hover:text-white text-white/70 text-sm sm:text-base transition-colors">
                Contact Us
              </Link>
            </div>
            {/* Third column - hidden on mobile, visible on larger screens */}
            <div className="hidden lg:flex flex-col gap-2">
              <p className="font-semibold text-base sm:text-lg mb-2">Support</p>
              <Link to="/help" className="hover:text-white text-white/70 text-sm sm:text-base transition-colors">
                Help Center
              </Link>
              <Link to="/shipping" className="hover:text-white text-white/70 text-sm sm:text-base transition-colors">
                Shipping Info
              </Link>
              <Link to="/returns" className="hover:text-white text-white/70 text-sm sm:text-base transition-colors">
                Returns
              </Link>
              <Link to="/faq" className="hover:text-white text-white/70 text-sm sm:text-base transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
            © Calyx 2025. ALL RIGHTS RESERVED.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex gap-3 sm:gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
              <svg width="16" height="16" sm:width="20" sm:height="20" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
              <svg width="16" height="16" sm:width="20" sm:height="20" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
              <svg width="16" height="16" sm:width="20" sm:height="20" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;