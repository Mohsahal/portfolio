import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code, Palette, Zap, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.feature-card')
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    })
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
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">About Me</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-primary-100 font-semibold leading-relaxed">
              Full Stack Developer & Cybersecurity Enthusiast
            </p>
            <p className="text-lg text-primary-200 leading-relaxed">
              Currently pursuing <span className="text-primary-400 font-semibold">B.E in Information Science at VTU</span> with a CGPA of <span className="text-primary-400 font-semibold">7.02</span>. 
              I specialize in designing, building, and securing end-to-end web applications using modern technologies like 
              <span className="text-primary-400 font-semibold"> React, Node.js, and the MERN stack</span>.
            </p>
            <p className="text-lg text-primary-200 leading-relaxed">
              With expertise in <span className="text-primary-400 font-semibold">web vulnerability assessment, penetration testing, and secure coding practices</span>, 
              I ensure robust application defense. Currently gaining hands-on experience as a 
              <span className="text-primary-400 font-semibold"> Cyber Security Intern at Interns Forge, Bengaluru</span>, 
              working on real-world security challenges and solutions.
            </p>
            <p className="text-lg text-primary-300 italic">
              Passionate about writing clean, efficient code and delivering secure, user-friendly solutions.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="feature-card bg-dark-50 border border-primary-500/20 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-primary-100 mb-2">{feature.title}</h3>
              <p className="text-primary-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
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
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-primary-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
