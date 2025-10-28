import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // GSAP background animation
    gsap.to(".bg-grid", {
      backgroundPosition: "100% 100%",
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  }, []);
  const socialLinks = [
    { icon: Github, href: "https://github.com/Mohsahal", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohammedsahalpk",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:mohammedsahal1243@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-grid opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Glowing orbs */}
      <div className="absolute top-10 left-5 md:top-20 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-primary-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-10 right-5 md:bottom-20 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-primary-600 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-screen py-20">
        <div className="w-full max-w-5xl">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-primary-500 text-base sm:text-lg md:text-xl mb-3 md:mb-4 font-mono"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 text-gradient glow-text leading-tight px-2"
          >
            Mohammed Sahal PK
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 text-primary-100 px-2"
          >
            Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-200 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Full Stack Developer specializing in secure web applications with
            expertise in React, Node.js, and cybersecurity. Building robust,
            user-friendly solutions with clean code and best practices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 justify-center mb-8 md:mb-12 px-4 w-full max-w-md sm:max-w-none mx-auto"
          >
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-400 transition-all duration-300 shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2 text-sm md:text-base w-full sm:w-auto"
            >
              View My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-primary-500 text-primary-500 font-bold rounded-lg hover:bg-primary-500 hover:text-black transition-all duration-300 backdrop-blur-sm text-sm md:text-base w-full sm:w-auto"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex gap-4 sm:gap-6 justify-center"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-black transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} className="sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-2 md:bottom-4 lg:bottom-6 xl:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 md:gap-3"
        >
          <span className="text-primary-400 text-xs sm:text-sm font-mono">
            Scroll Down
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary-500 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-500 rounded-full"
            />
          </div>
          <ArrowDown className="text-primary-500 w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.a> */}
    </section>
  );
};

export default Hero;
