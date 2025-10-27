import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const skills = [
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'Python', level: 85, category: 'Backend' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'PostgreSQL', level: 82, category: 'Database' },
    { name: 'Docker', level: 78, category: 'DevOps' },
    { name: 'AWS', level: 75, category: 'Cloud' },
    { name: 'Git', level: 90, category: 'Tools' },
  ]

  const categories = [...new Set(skills.map(skill => skill.category))]

  useEffect(() => {
    const progressBars = sectionRef.current.querySelectorAll('.progress-bar')
    
    progressBars.forEach((bar) => {
      gsap.from(bar, {
        scrollTrigger: {
          trigger: bar,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        width: 0,
        duration: 1.5,
        ease: 'power3.out',
      })
    })
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            Proficient in a wide range of modern technologies and frameworks
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: catIndex * 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-primary-400 mb-6">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-primary-100">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'Vue', 'Angular', 'Node.js', 'Python', 'Django', 'FastAPI', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Git', 'CI/CD'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="px-6 py-3 bg-dark-100 border border-primary-500/30 rounded-lg text-primary-100 font-mono hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const SkillBar = ({ skill, index }) => {
  const [springs, api] = useSpring(() => ({
    from: { width: '0%' },
  }))

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      api.start({
        width: `${skill.level}%`,
        config: { tension: 50, friction: 20 },
      })
    }
  }, [isInView, skill.level, api])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between mb-2">
        <span className="text-primary-100 font-semibold">{skill.name}</span>
        <span className="text-primary-400 font-mono">{skill.level}%</span>
      </div>
      <div className="h-3 bg-dark-100 rounded-full overflow-hidden border border-primary-500/20">
        <animated.div
          style={springs}
          className="progress-bar h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </animated.div>
      </div>
    </motion.div>
  )
}

export default Skills
