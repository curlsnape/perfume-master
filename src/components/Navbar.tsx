import React, { useRef, useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosFlower } from "react-icons/io";
import { TbPerfume } from "react-icons/tb";
import { PiFlowerLotusBold } from "react-icons/pi";
import { FaAirFreshener } from "react-icons/fa";
import { SiWolframmathematica } from "react-icons/si";
import { FaOpencart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { perfume_Data, perfumeData } from "@/PerfumeData";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { PiShareNetworkDuotone } from "react-icons/pi";
import gsap from "gsap";
import { MdDelete } from "react-icons/md";

const icons = [
  <IoIosFlower key="flower" />,
  <TbPerfume key="perfume" />,
  <PiFlowerLotusBold key="lotus" />,
  <FaAirFreshener key="air" />,
  <SiWolframmathematica key="wolf" />,
];

const Navbar = () => {
  // Search functionality state
  const [searchTerm, setSearchTerm] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [iconIndex, setIconIndex] = useState(0);
  const iconRef = useRef<HTMLDivElement>(null);

  // Cart functionality state
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<perfume_Data[]>([]);
  const [showSocials, setShowSocials] = useState(false);
  const socialRef = useRef<HTMLDivElement>(null);

  // Existing state
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if current route should have black theme
  const shouldUseBlackTheme = () => {
    const currentPath = location.pathname;
    return currentPath.includes('/search/') || currentPath === '/about' || scrolled;
  };

  // Cart functions
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length || 0);
  };

  const syncCartItems = () => {
    const cartIds: number[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const filteredProducts = perfumeData.filter((product) =>
      cartIds.includes(product.id)
    );
    setCartItems(filteredProducts);
  };

  const handleRemove = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    const newCartIds = updatedCart.map((item) => item.id);
    localStorage.setItem("cart", JSON.stringify(newCartIds));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const generateWhatsAppLink = (items: perfume_Data[]) => {
    if (items.length === 0) return "https://wa.me/9833949942";

    const message = items
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} (${item.inspired_by}) - ₹${
            item.price_inr
          }`
      )
      .join("\n");

    const finalMessage = `Hi, I'm interested in buying the following perfumes:\n\n${message}\n\nPlease let me know the next steps.`;
    const encodedMessage = encodeURIComponent(finalMessage);

    return `https://wa.me/9833949942?text=${encodedMessage}`;
  };

  // Search functions
  const filteredData = perfumeData.filter((perfume) =>
    perfume.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) =>
        prev < filteredData.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  // Effects
  useEffect(() => {
    updateCartCount();
    syncCartItems();

    const handleCartUpdate = () => {
      updateCartCount();
      syncCartItems();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        socialRef.current &&
        !socialRef.current.contains(event.target as Node)
      ) {
        setShowSocials(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setShowSocials(false);
  }, [location.pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.fromTo(
        iconRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
      setIconIndex((prev) => (prev + 1) % icons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFocusedIndex(-1);
  }, [searchTerm]);

  useEffect(() => {
    if (focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
      itemRefs.current[focusedIndex]?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [focusedIndex]);

  useEffect(() => {
    setDialogOpen(false);
    setSearchTerm("");
    setFocusedIndex(-1);
  }, [location.pathname]);

  const isBlackTheme = shouldUseBlackTheme();

  return (
    <div className={`navbar fixed w-full font-[poppins] z-30 transition-colors duration-300 ${
      isBlackTheme ? 'text-black' : 'text-zinc-600'
    }`}>
      <div className={`w-full md:w-[95%] p-2 md:p-3 my-1 md:my-2 mx-auto flex items-center justify-between gap-2 backdrop-blur-md rounded-xl md:rounded-full shadow-lg ${
        isBlackTheme ? 'bg-white/90' : 'bg-white/5'
      }`}>
        {/* Desktop menu */}
        <div className="hidden font-light text-sm md:flex gap-3 lg:gap-5 items-center">
          <img 
            src={isBlackTheme ? "/assets/images/black logo.png" : "/assets/images/CALYX-WHITE-LOGO.png"} 
            alt="Calyx Logo" 
            className="w-[3rem] md:w-[4rem] lg:w-[6rem] transition-opacity duration-300"
          />
          <Link
            to="/"
            className={`hover:text-zinc-600 transition-all duration-300 ${
              isBlackTheme ? 'text-zinc-800 hover:text-zinc-900' : 'text-white hover:text-zinc-300'
            }`}
          >
            Home
          </Link>
          <Link
            to="/search"
            className={`hover:text-zinc-600 transition-all duration-300 ${
              isBlackTheme ? 'text-zinc-800 hover:text-zinc-900' : 'text-white hover:text-zinc-300'
            }`}
          >
            Products
          </Link>
          <Link
            to="/about"
            className={`hover:text-zinc-600 transition-all duration-300 ${
              isBlackTheme ? 'text-zinc-800 hover:text-zinc-900' : 'text-white hover:text-zinc-300'
            }`}
          >
            About
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <img 
            src={isBlackTheme ? "/assets/images/black logo.png" : "/assets/images/CALYX-WHITE-LOGO.png"} 
            alt="Calyx Logo" 
            className="w-[2.5rem] sm:w-[3rem] mr-2 transition-opacity duration-300"
          />
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 rounded-lg ${
              isBlackTheme 
                ? 'bg-black/10 hover:bg-black/20' 
                : 'bg-white/20 hover:bg-white/30'
            } transition-all duration-300`}
          >
            <HiOutlineMenuAlt3 className={`text-xl sm:text-2xl ${
              isBlackTheme ? 'text-black' : 'text-white'
            }`} />
          </button>
        </div>

        {/* Mobile slide-in menu */}
        <div
          className={`fixed top-0 left-0 h-[100vh] rouned-xl bg-white/90 backdrop-blur-lg z-50 w-64 sm:w-72 shadow-xl border-r border-white/20 p-4 sm:p-6 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="flex items-center justify-between mb-6">
            <img 
              src="/assets/images/black logo.png"
              alt="Calyx Logo"
              className="w-[4rem] transition-opacity duration-300"
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-black hover:text-gray-700 bg-gray-100 hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-700 hover:text-zinc-900 hover:bg-gray-100 py-3 px-4 rounded-lg text-base transition-all duration-300 flex items-center gap-3"
              >
                <span className="text-lg"></span>
                Home
              </Link>
              <Link
                to="/search"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-700 hover:text-zinc-900 hover:bg-gray-100 py-3 px-4 rounded-lg text-base transition-all duration-300 flex items-center gap-3"
              >
                <span className="text-lg"></span>
                Products
              </Link>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-700 hover:text-zinc-900 hover:bg-gray-100 py-3 px-4 rounded-lg text-base transition-all duration-300 flex items-center gap-3"
              >
                <span className="text-lg"></span>
                About
              </Link>
            </div>
           
          </nav>
        </div>

        {/* Overlay for mobile menu */}
        {menuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Search functionality */}
        <div className="flex items-center gap-2">
          <Dialog
            open={dialogOpen}
            onOpenChange={(open) => {
              setDialogOpen(open);
              if (!open) {
                setSearchTerm("");
                setFocusedIndex(-1);
              }
            }}
          >
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className={`border ${
                  isBlackTheme 
                    ? 'border-black/30 bg-white/80 text-black hover:bg-white/90' 
                    : 'border-white/30 bg-white/30 text-white hover:bg-white/40'
                } py-1.5 md:py-2 px-2 md:px-4 lg:w-80 w-auto text-xs md:text-sm rounded-lg md:rounded-xl transition-all duration-300`}
                onClick={() => setDialogOpen(true)}
              >
                <span className="hidden sm:inline">Search Here</span>
                <IoSearchOutline className="sm:hidden text-base" />
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] mx-4">
              <DialogHeader>
                <DialogTitle className="text-sm md:text-base text-zinc-800">
                  "Discover the fragrance that defines you"
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <div className="relative w-full flex items-center">
                    <IoSearchOutline className="absolute w-4 md:w-6 mx-2 text-zinc-500" />
                    <Input
                      ref={inputRef}
                      type="text"
                      placeholder="Lavander"
                      id="searchbox"
                      name="searchbox"
                      className="pl-8 md:pl-10 py-2 placeholder:italic font-sec font-semibold text-sm md:text-lg"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                </div>
                <div className="grid gap-3 max-h-[50vh] md:max-h-[300px] overflow-y-auto">
                  {filteredData.length === 0 ? (
                    <p className="text-sm text-gray-500 px-2 h-[100px] md:h-[200px] flex items-center justify-center">
                      No perfumes found
                    </p>
                  ) : (
                    filteredData.map((perfume, index) => (
                      <Link
                        key={perfume.id}
                        to={`/search/${perfume.id}`}
                        ref={(el) => (itemRefs.current[index] = el)}
                        className={`py-2 px-2 rounded-md border-b border-slate-300 transition-all duration-200 hover:bg-blue-50 ${
                          index === focusedIndex ? "bg-blue-100" : ""
                        }`}
                      >
                        <h3 className="text-sm md:text-base font-medium">{perfume.name}</h3>
                        <span className="font-sec text-gray-700 font-semibold text-xs md:text-sm">
                          ({perfume.inspired_by})
                        </span>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Cart and social functionality */}
        <div className="flex items-center gap-2 md:gap-3 relative" ref={socialRef}>
          <Sheet>
            <SheetTrigger>
              <div className="relative">
                <FaOpencart className={`text-[1.5rem] md:text-[2rem] p-1 md:p-1.5 rounded-lg md:rounded-xl hover:bg-white/30 ${
                  isBlackTheme 
                    ? 'text-black hover:text-black' 
                    : 'text-white hover:text-white'
                } cursor-pointer transition-all duration-300`} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 md:-top-2 -right-1 md:-right-2 text-xs bg-red-600 text-white w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
            </SheetTrigger>

            <SheetContent className="flex flex-col justify-between w-full sm:w-[400px]">
              <div>
                <SheetHeader>
                  <SheetTitle className="text-lg md:text-xl">Your Cart</SheetTitle>
                </SheetHeader>
                {cartItems.length === 0 ? (
                  <p className="text-center text-gray-500 mt-6 text-sm md:text-base">
                    No products in cart.
                  </p>
                ) : (
                  <div className="mt-4 space-y-3 md:space-y-4 max-h-[60vh] md:max-h-[70vh] overflow-y-auto pr-2">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-2 md:gap-4 items-center border py-2 px-2 md:px-3 rounded-md"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-md flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm md:text-lg truncate">{item.name}</h4>
                          <p className="text-green-600 font-semibold mt-1 text-sm md:text-base">
                            ₹ {item.price_inr}
                          </p>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleRemove(item.id)}
                          className="py-1 px-2 text-xs md:text-sm flex-shrink-0"
                        >
                          <MdDelete className="text-sm md:text-base" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="mt-4">
                  <a
                    href={generateWhatsAppLink(cartItems)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full text-sm md:text-lg py-2 md:py-3">
                      Buy Now
                    </Button>
                  </a>
                </div>
              )}
            </SheetContent>
          </Sheet>

          <div
            onClick={() => setShowSocials((prev) => !prev)}
            className={`p-1.5 md:p-2 text-base md:text-[1.2rem] rounded-lg md:rounded-xl hover:bg-white/30 ${
              isBlackTheme 
                ? 'text-black hover:text-black' 
                : 'text-white hover:text-white'
            } cursor-pointer transition-all duration-300`}
          >
            <PiShareNetworkDuotone />
          </div>

          {showSocials && (
            <div className="absolute right-0 top-12 md:top-14 bg-white/95 backdrop-blur-md border border-white/30 rounded-xl p-3 shadow-lg z-50 flex flex-col gap-3 min-w-[140px]">
              <button
                onClick={() =>
                  window.open("https://wa.me/9833949942", "_blank")
                }
                className="flex items-center text-zinc-600 hover:text-zinc-800 gap-2 transition-colors duration-300 text-sm"
              >
                <FaWhatsapp className="text-green-600" /> WhatsApp
              </button>
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-600 hover:text-zinc-800 transition-colors duration-300 text-sm"
              >
                <FaInstagram className="text-pink-600" /> Instagram
              </a>
              <a
                href="https://www.facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-600 hover:text-zinc-800 transition-colors duration-300 text-sm"
              >
                <FaFacebook className="text-blue-600" /> Facebook
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;