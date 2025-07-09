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

  return (
    <div className={`navbar fixed w-full font-[poppins] z-30 transition-colors duration-300 ${
      scrolled ? 'text-black' : 'text-zinc-600'
    }`}>
      <div className={`w-full md:w-[95%] p-3 my-2 mx-auto flex items-center justify-between gap-2 backdrop-blur-md rounded-full shadow-lg ${
        scrolled ? 'bg-white/90' : 'bg-white/5'
      }`}>
        {/* Desktop menu - keep existing */}
        <div className="hidden font-light text-sm md:flex gap-5">
          <img 
            src={scrolled ? "/assets/images/black logo.png" : "/assets/images/CALYX-WHITE-LOGO.png"} 
            alt="Calyx Logo" 
            className="w-[4rem] lg:w-[6rem] transition-opacity duration-300"
          />
          <Link
            to="/"
            className={`hover:text-zinc-600 transition-all duration-300 ${
              scrolled ? 'text-zinc-800' : 'text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to="/search"
            className={`hover:text-zinc-600 transition-all duration-300 ${
              scrolled ? 'text-zinc-800' : 'text-white'
            }`}
          >
            Products
          </Link>
          <Link
            to="/about"
            className={`hover:text-zinc-600 transition-all duration-300 ${
              scrolled ? 'text-zinc-800' : 'text-white'
            }`}
          >
            About
          </Link>
        </div>

        {/* Mobile menu button - keep existing */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <HiOutlineMenuAlt3 className={`text-2xl ${
              scrolled ? 'text-black' : 'text-white'
            }`} />
          </button>
        </div>

        {/* Mobile slide-in menu - keep existing */}
        <div
          className={`fixed top-0 left-0 h-full bg-white/20 backdrop-blur-md z-50 w-1/2 shadow-lg p-6 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden rounded-r-2xl`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="text-right w-full font-bold text-wblack"
          >
            ✕
          </button>
          <nav className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-4">
              <img 
                src={scrolled ? "/assets/images/CALYX-BLACK-LOGO.png" : "/assets/images/CALYX-WHITE-LOGO.png"} 
                alt="Calyx Logo"
                className="w-[4rem] transition-opacity duration-300"
              />
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-600 hover:text-violet-300"
              >
                Home
              </Link>
              <Link
                to="/search"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-600 hover:text-violet-300"
              >
                Products
              </Link>
              <Link
                to="#"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-600 hover:text-violet-300"
              >
                About
              </Link>
            </div>
            <small className="text-wblack">
              Design By <br /> Ashish Singh
            </small>
          </nav>
        </div>

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
                  scrolled ? 'border-black/30 bg-white/80 text-black' : 'border-white/30 bg-white/30 text-white'
                } py-2 lg:w-80 w-auto rounded-xl hover:bg-white/40 transition-all duration-300`}
                onClick={() => setDialogOpen(true)}
              >
                Search Here
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-base text-zinc-800">
                  "Discover the fragrance that defines you"
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <div className="relative w-full flex items-center">
                    <IoSearchOutline className="absolute w-6 mx-2" />
                    <Input
                      ref={inputRef}
                      type="text"
                      placeholder="Lavander"
                      id="searchbox"
                      name="searchbox"
                      className="pl-10 py-2 placeholder:italic font-sec font-semibold text-lg"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                </div>
                <div className="grid gap-3 max-h-[300px] overflow-y-auto">
                  {filteredData.length === 0 ? (
                    <p className="text-sm text-gray-500 px-2 h-[200px]">
                      No perfumes found
                    </p>
                  ) : (
                    filteredData.map((perfume, index) => (
                      <Link
                        key={perfume.id}
                        to={`/search/${perfume.id}`}
                        ref={(el) => (itemRefs.current[index] = el)}
                        className={`py-1 px-2 rounded-md border-b border-slate-400 transition-all duration-200 hover:bg-blue-50 ${
                          index === focusedIndex ? "bg-blue-100" : ""
                        }`}
                      >
                        <h3>{perfume.name}</h3>
                        <span className="font-sec text-gray-800 font-semibold text-sm">
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
        <div className="flex items-center gap-3 relative" ref={socialRef}>
          <Sheet>
            <SheetTrigger>
              <div className="relative">
                <FaOpencart className={`text-[2rem] p-1.5 rounded-xl hover:bg-white/30 ${
                  scrolled ? 'text-black hover:text-black' : 'text-white hover:text-white'
                } cursor-pointer transition-all duration-300`} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </SheetTrigger>

            <SheetContent className="flex flex-col justify-between">
              <div>
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                </SheetHeader>
                {cartItems.length === 0 ? (
                  <p className="text-center text-gray-500 mt-6">
                    No products in cart.
                  </p>
                ) : (
                  <div className="mt-4 space-y-4 max-h-[75vh] overflow-y-auto pr-2">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-2 md:gap-4 items-center border py-1 px-2 rounded-md"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{item.name}</h4>
                          <p className="text-green-600 font-semibold mt-1">
                            ₹ {item.price_inr}
                          </p>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleRemove(item.id)}
                          className="py-0.5 px-2"
                        >
                          <MdDelete />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <a
                  href={generateWhatsAppLink(cartItems)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full text-lg">Buy Now</Button>
                </a>
              )}
            </SheetContent>
          </Sheet>

          <div
            onClick={() => setShowSocials((prev) => !prev)}
            className={`p-[8px] text-[1.2rem] rounded-xl hover:bg-white/30 ${
              scrolled ? 'text-black hover:text-black' : 'text-white hover:text-white'
            } cursor-pointer transition-all duration-300`}
          >
            <PiShareNetworkDuotone />
          </div>

          {showSocials && (
            <div className="absolute right-0 top-14 bg-white/90 backdrop-blur-md border border-white/30 rounded-xl p-3 shadow-lg z-50 flex flex-col gap-3">
              <button
                onClick={() =>
                  window.open("https://wa.me/yourphonenumber", "_blank")
                }
                className="flex items-center text-zinc-600 hover:text-zinc-700 gap-2 transition-colors duration-300"
              >
                <FaWhatsapp /> WhatsApp
              </button>
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-600 hover:text-zinc-700 transition-colors duration-300"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="https://www.facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-600 hover:text-zinc-700  transition-colors duration-300"
              >
                <FaFacebook /> Facebook
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;