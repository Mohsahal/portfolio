import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code, Palette, Zap, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: '-50px' })
  const cardsInView = useInView(cardsRef, { once: false, margin: '-100px' })

  useEffect(() => {
    if (!cardsRef.current) return
    const cards = cardsRef.current.querySelectorAll('.feature-card')
    if (cards.length === 0) return
    
    const ctx = gsap.context(() => {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none play reverse',
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
      })
    }, cardsRef)
    
    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful, responsive interfaces with attention to detail.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and excellent user experience.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams using agile methodologies.',
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary-500 rounded-full blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-gradient">About Me</h2>
          <div className="w-20 sm:w-24 h-1 bg-primary-500 mx-auto mb-6 md:mb-8"></div>
          <div className="max-w-4xl mx-auto space-y-5 md:space-y-7">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-100 leading-relaxed font-light">
              Currently pursuing <span className="text-primary-400 font-bold bg-primary-500/10 px-2 py-1 rounded">B.E in Information Science at Yenepoya institute of technology</span> with a CGPA of <span className="text-primary-400 font-bold">7.02</span>. 
              I specialize in designing, building, and securing end-to-end web applications using modern technologies like 
              { <span className="text-primary-400 font-semibold"> React, Node.js, and the MERN stack</span>. }
            </p>
            <p className="text-base sm:text-lg md:text-xl text-primary-200 leading-relaxed font-light">
              With expertise in <span className="text-primary-400 font-semibold bg-primary-500/5 px-1.5 py-0.5 rounded">web vulnerability assessment, penetration testing, and secure coding practices</span>, 
              I ensure robust application defense. Currently gaining hands-on experience as a 
              {/* <span className="text-primary-400 font-bold"> Cyber Security Intern at Interns Forge, Bengaluru</span>, 
              working on real-world security challenges and solutions. */}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-primary-300 italic font-light border-l-4 border-primary-500 pl-4 py-2">
              "Passionate about writing clean, efficient code and delivering secure, user-friendly solutions."
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="feature-card bg-dark-50 border border-primary-500/20 rounded-xl p-5 md:p-6 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-500/10 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-primary-500 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary-100 mb-2 group-hover:text-primary-400 transition-colors">{feature.title}</h3>
              <p className="text-sm md:text-base text-primary-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { number: '10+', label: 'Projects Completed' },
            { number: '2+', label: 'Years Learning' },
            { number: '7.02', label: 'CGPA' },
            { number: '100%', label: 'Dedication' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.1 }}
              className="text-center p-3"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1 md:mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm md:text-base text-primary-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
