import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import gsap from 'gsap'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)

  // React Spring animation for floating effect
  const floatingAnimation = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(-20px)' })
        await next({ transform: 'translateY(0px)' })
      }
    },
    config: { duration: 3000 },
  })

  useEffect(() => {
    // GSAP text animation
    const chars = titleRef.current.querySelectorAll('.char')
    gsap.from(chars, {
      opacity: 0,
      y: 50,
      rotateX: -90,
      stagger: 0.05,
      duration: 1,
      ease: 'back.out(1.7)',
    })

    // GSAP background animation
    gsap.to('.bg-grid', {
      backgroundPosition: '100% 100%',
      duration: 20,
      repeat: -1,
      ease: 'none',
    })
  }, [])

  const title = 'Full Stack Developer'
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ]

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid opacity-20" style={{
        backgroundImage: 'linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }}></div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-600 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Avatar */}
        <animated.div style={floatingAnimation} className="mb-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1 border-glow"
          >
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <span className="text-5xl">👨‍💻</span>
            </div>
          </motion.div>
        </animated.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-primary-500 text-lg mb-4 font-mono"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-6xl md:text-8xl font-bold mb-6 text-gradient glow-text"
        >
          John Doe
        </motion.h1>

        {/* Title with GSAP animation */}
        <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold mb-8 text-primary-100">
          {title.split('').map((char, index) => (
            <span key={index} className="char inline-block">
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-xl text-primary-200 mb-12 max-w-2xl mx-auto"
        >
          Crafting beautiful, performant web experiences with modern technologies.
          Passionate about clean code and innovative solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(34, 197, 94, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary-500 text-black font-semibold rounded-lg hover:bg-primary-400 transition-all duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-lg hover:bg-primary-500 hover:text-black transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex gap-6 justify-center mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-black transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2.5, y: { repeat: Infinity, duration: 1.5 } }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-primary-500 w-8 h-8" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
