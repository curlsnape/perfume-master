import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full py-20 lg:py-40 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Section */}
          <div className="flex flex-col gap-6">
            <img
              src="/assets/images/white logo.png"
              alt=""
              className="w-[4rem] lg:w-[6rem]"
            />
            <p className="text-base text-white/70 max-w-md">
              Fragrance that lingers with grace,
              <br />a whisper of who you are.
            </p>

            <div className="flex gap-20">
              <div className="text-sm text-white/70">
                <p>address line 1</p>
                <p>address line 2</p>
                <p>address line 3</p>
              </div>
              <div className="text-sm flex flex-col gap-1">
                <Link to="/" className="hover:text-white text-white/70">
                  Terms of Service
                </Link>
                <Link to="/" className="hover:text-white text-white/70">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">Our Best Sellers</p>
              <Link to="/search/2" className="hover:text-white text-white/70">
                Dior Sauvage Elixir
              </Link>
              <Link to="/search/1" className="hover:text-white text-white/70">
                Escada Moon Sparkle
              </Link>
              <Link to="/search/6" className="hover:text-white text-white/70">
                Acqua di Gio
              </Link>
              <Link to="/search/5" className="hover:text-white text-white/70">
                Calyx Original (Caramel Scent)
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">Quick Links</p>
              <Link to="/" className="hover:text-white text-white/70">
                Home
              </Link>
              <Link to="/about" className="hover:text-white text-white/70">
                About Us
              </Link>
              <Link to="/search" className="hover:text-white text-white/70">
                Products
              </Link>
              <Link to="/contact" className="hover:text-white text-white/70">
                Contact Us
              </Link>
            </div>
            {/* <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">Explore</p>
              <Link to="/" className="hover:text-white text-white/70">Home</Link>
              <Link to="/services" className="hover:text-white text-white/70">Services</Link>
              
              
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
