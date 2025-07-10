import React from "react";
import { motion } from "framer-motion";

function Main2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.4,
      },
    },
  };

  const slideInBottom = {
    hidden: { y: 180, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const slideInTop = {
    hidden: { y: -180, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  // Capsule text block animation
  const capsuleTextVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const capsuleLineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="w-full h-[100vh] flex overflow-hidden bg-[#000] flex-col lg:flex-row"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Half */}
      <motion.div
        className="lefthalf relative flex items-end justify-center bg-[#000] w-full lg:w-[25%] h-full lg:h-full"
        variants={slideInBottom}
      >
        {/* <div className="divleft w-44 rounded-t-full mb-10">
          <motion.img
            className="h-[30vh] w-full rounded-t-full object-cover"
            src="/assets/images/perfume-right.jpg"
            alt=""
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="mt-2 border-[0.2px] rounded-b-full pb-8 pt-5 text-sm text-center border-zinc-900 w-full"
            variants={capsuleTextVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3
              variants={capsuleLineVariants}
              className="font-[Doren] text-zinc-500 font-medium text-2xl"
            >
              Crimson
            </motion.h3>
            <motion.h4
              variants={capsuleLineVariants}
              className="text-zinc-600 text-xs font-light font-[poppins]"
            >
              Lorem ipsum dolor <br /> sit amet consectetur.
            </motion.h4>
          </motion.div>
        </div> */}
      </motion.div>

      {/* Middle Half */}
      <motion.div
        className="midhalf w-full lg:w-[50%] flex justify-center flex-col items-center px-4 lg:px-0 order-1 lg:order-2"
        variants={fadeInUp}
      >
        <motion.h2
          className="text-3xl sm:text-4xl mt-20 md:text-5xl lg:text-7xl text-center font-[Doren] font-medium drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] metal-3d"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Awaken Your Senses <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            with Every Note
          </motion.span>
        </motion.h2>

        <motion.div
          className="img w-[60%] sm:w-[50%] md:w-[45%] lg:w-[90%] mt-6 lg:mt-10 h-[30vh] lg:h-[60vh] relative"
          variants={scaleIn}
        >
          {/* Background blend overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-transparent to-[#000000] opacity-40 rounded-lg"></div>

          {/* Dark overlay to blend with background */}
          <div className="absolute inset-0 bg-[#000000] opacity-20 rounded-lg mix-blend-multiply"></div>

          <motion.img
            className="h-full w-full  relative z-10 filter brightness-110 contrast-110"
            src="/assets/images/perfume landing2.png"
            alt=""
            style={{
              filter: "brightness(1.1) contrast(1.1) saturate(1.8)",
              mixBlendMode: "screen",
            }}
          />

          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent rounded-lg"></div>
        </motion.div>
      </motion.div>

      {/* Right Half */}
      <motion.div
        className="righthalf relative flex items-start justify-center bg-[#000] w-full lg:w-[25%] h-full lg:h-full order-3"
        variants={slideInTop}
      >
        {/* <div className="divright w-44 h-full mt-32 overflow-hidden">
          
          <motion.div
            className="border rounded-t-full p-6 text-sm text-center border-zinc-800 w-full"
            variants={capsuleTextVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3
              variants={capsuleLineVariants}
              className="font-[Doren] text-zinc-500 font-medium text-2xl"
            >
              Azure
            </motion.h3>
            <motion.h4
              variants={capsuleLineVariants}
              className="text-zinc-700 font-light text-xs font-[poppins]"
            >
              Lorem ipsum dolor <br /> sit amet consectetur.
            </motion.h4>
          </motion.div>

         
          <motion.img
            className="h-[30vh] w-full mt-2 rounded-b-full object-cover"
            src="/assets/images/Villian.png"
            alt=""
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div> */}
      </motion.div>

      <style jsx>{`
        .metal-3d {
          background: linear-gradient(
            90deg,
            #27272a 0%,
            #2f2f33 20%,
            #d4d4d8 50%,
            #2f2f33 80%,
            #27272a 100%
          );
          background-size: 200% auto;
          background-position: 0% center;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(
            circle at center,
            var(--tw-gradient-stops)
          );
        }
      `}</style>
    </motion.div>
  );
}

export default Main2;
