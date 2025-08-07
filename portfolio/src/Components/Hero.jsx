import React from "react";
import { motion } from "framer-motion";
import meImage from "../assets/my_photo1.png";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
      id="home"
    >
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left - Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm <span className="bg-gradient-to-r from-blue-300 to-blue-900 text-transparent bg-clip-text">Chanuka Sandeepa</span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I build dynamic, end-to-end web applications using modern and powerful full stack technologies. 
              From crafting seamless and engaging user experiences on the front end to architecting robust, secure,
               and scalable back-end systems, I’m deeply passionate about delivering high-performing, clean, maintainable, 
               and reliable solutions that create a real, lasting impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#projects">
                <button className="bg-gradient-to-r from-blue-200 to-blue-800 hover:opacity-90 text-white py-3 px-8 rounded-full font-semibold shadow-lg transition">
                  View My Work
                </button>
              </a>
            </motion.div>
          </div>

          {/* Right - Photo (original design, smaller size) */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 lg:ml-8">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 1,
                delay: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>

              {/* Photo container - smaller size */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl bg-black">
                <img
                  src={meImage}
                  alt="Chanuka Sandeepa"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Decorative floating balls */}
              <motion.div
                className="absolute -top-4 -right-4 w-6 h-6 bg-blue-400 rounded-full"
                animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
                animate={{ y: [0, -15, 0], x: [0, 5, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />

              <motion.div
                className="absolute top-1/4 -left-8 w-5 h-5 bg-purple-500 rounded-full opacity-40"
                animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              <motion.div
                className="absolute bottom-1/4 -right-8 w-3 h-3 bg-blue-300 rounded-full opacity-50"
                animate={{ y: [0, -12, 0], x: [0, -8, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <p className="text-gray-400 mb-2">Scroll</p>
        <div className="animate-bounce text-gray-400">
          <ChevronDown className="w-6 h-6 mx-auto" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
