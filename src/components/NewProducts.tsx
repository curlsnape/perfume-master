import Card from "./Card";
import { perfumeData } from "@/PerfumeData";
import { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const NewProducts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 280; // Reduced for smaller cards

  const scrollLeft = () => {
    const container = scrollRef.current;
    if (container) {
      if (container.scrollLeft === 0) {
        // Scroll to end if already at start
        container.scrollTo({
          left: container.scrollWidth,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    if (container) {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (Math.ceil(container.scrollLeft) >= maxScrollLeft) {
        // Loop back to start
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative py-12 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="flex items-center justify-between mb-8"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-5xl font-medium font-[Doren] text-gray-900 tracking-wide">
            Best Selling Products
          </h2>
          
          <div className="flex items-center gap-3">
            <motion.button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border-[1px] border-zinc-500 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="text-zinc-600" />
              {/* <FaCircleChevronLeft className="w-full h-full text-white" /> */}
            </motion.button>
            <motion.button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border-[1px] border-zinc-500 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             <ArrowRight className="text-zinc-600" />
            </motion.button>
          </div>
        </motion.div>

        {/* Products Container */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          {/* Products Grid */}
          <div
            className="overflow-x-auto scrollbar-hide"
            ref={scrollRef}
          >
            <motion.div
              className="flex items-center justify-start gap-6 min-w-max pb-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {perfumeData.map((perfume, index) => (
                <motion.div
                  key={perfume.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 * index,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -4,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  className="flex-shrink-0 w-64" 
                >
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                      <img 
                        src={perfume.image} 
                        alt={perfume.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1 flex justify-between font-[doren] items-center">
                      <h3 className="font-medium text-gray-900 text-xl">{perfume.name}</h3>
                      <p className="text-lg font-medium text-gray-900">250</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="flex justify-center mb-12"
          variants={itemVariants}
        >
          <Link
            to="/search"
            className="group inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full text-sm font-[poppins] font-medium hover:bg-gray-800 transition-all duration-300"
          >
            <span>Show more</span>
            <GoArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
          variants={itemVariants}
        >
          <motion.div
            className="flex-1 max-w-7xl"
            variants={itemVariants}
          >
            <p className="text-lg font-[poppins] md:text-lg lg:text-base leading-none text-center text-gray-600  font-light">
              Explore a world of
              <span className="text-zinc-600 font-medium"> olfactory elegance</span>{" "}
              where top notes dance with your senses, heart notes captivate your soul,
              and base notes leave a{" "}
              <span className="text-zinc-600 font-medium">lasting impression</span>.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewProducts;