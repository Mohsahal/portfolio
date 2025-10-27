import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Database, Cloud, Server, Layers, Zap, CheckCircle2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' })

  const skills = [
    { name: 'React', level: 90, category: 'Web Development', color: '#61DAFB' },
    { name: 'Node.js', level: 88, category: 'Web Development', color: '#339933' },
    { name: 'Express', level: 85, category: 'Web Development', color: '#000000' },
    { name: 'HTML', level: 95, category: 'Web Development', color: '#E34F26' },
    { name: 'CSS', level: 92, category: 'Web Development', color: '#1572B6' },
    { name: 'JavaScript', level: 90, category: 'Programming', color: '#F7DF1E' },
    { name: 'Python', level: 88, category: 'Programming', color: '#3776AB' },
    { name: 'C', level: 82, category: 'Programming', color: '#A8B9CC' },
    { name: 'C++', level: 80, category: 'Programming', color: '#00599C' },
    { name: 'SQL', level: 85, category: 'Programming', color: '#4479A1' },
    { name: 'MongoDB', level: 87, category: 'Database', color: '#47A248' },
    { name: 'MySQL', level: 88, category: 'Database', color: '#4479A1' },
    { name: 'PostgreSQL', level: 85, category: 'Database', color: '#4169E1' },
    { name: 'Git', level: 92, category: 'Tools', color: '#F05032' },
    { name: 'GitHub', level: 90, category: 'Tools', color: '#181717' },
    { name: 'Postman', level: 88, category: 'Tools', color: '#FF6C37' },
    { name: 'VS Code', level: 95, category: 'Tools', color: '#007ACC' },
    { name: 'Wireshark', level: 82, category: 'Cyber Security', color: '#1679A7' },
    { name: 'Metasploit', level: 78, category: 'Cyber Security', color: '#2596CD' },
    { name: 'Burp Suite', level: 80, category: 'Cyber Security', color: '#FF6633' },
    { name: 'Nmap', level: 85, category: 'Cyber Security', color: '#0E83CD' },
    { name: 'Nessus', level: 75, category: 'Cyber Security', color: '#00C176' },
  ]

  const categoryIcons = {
    'Web Development': Code2,
    'Programming': Layers,
    'Database': Database,
    'Tools': Zap,
    'Cyber Security': Server,
  }

  const categories = [...new Set(skills.map(skill => skill.category))]

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.skill-card')
    if (!cards) return
    
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none play none',
        },
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        delay: index * 0.08,
        ease: 'power2.out',
      })
    })
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-10 left-5 md:top-20 md:left-10 w-64 h-64 md:w-96 md:h-96 bg-primary-500 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-10 right-5 md:bottom-20 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-primary-600 rounded-full blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-gradient">Skills & Expertise</h2>
          <div className="w-20 sm:w-24 h-1 bg-primary-500 mx-auto mb-6 md:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-primary-200 max-w-3xl mx-auto">
            Proficient in modern technologies and frameworks
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => {
            const CategoryIcon = categoryIcons[category]
            const categorySkills = skills.filter(skill => skill.category === category)
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: catIndex * 0.2, duration: 0.8 }}
              >
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <CategoryIcon className="w-6 h-6 md:w-7 md:h-7 text-primary-500" />
                  <h3 className="text-xl sm:text-2xl font-bold text-primary-400">{category}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
                  {categorySkills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tech Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 md:mt-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 text-primary-100">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {['React', 'Next.js', 'Vue', 'Angular', 'Node.js', 'Python', 'TypeScript', 'Django', 'FastAPI', 'Express', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Git', 'CI/CD', 'REST API', 'GraphQL'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-3 py-1.5 md:px-4 md:py-2 bg-dark-100 border border-primary-500/30 rounded-lg text-primary-100 font-mono text-xs md:text-sm hover:border-primary-500 hover:bg-primary-500/10 transition-all duration-300"
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

const SkillCard = ({ skill, index }) => {
  const [count, setCount] = useState(0)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = skill.level
      const duration = 2000
      const increment = end / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      
      return () => clearInterval(timer)
    }
  }, [isInView, skill.level])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="skill-card group relative bg-dark-100 border border-primary-500/20 rounded-xl p-3 md:p-4 hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        {/* Progress Bar */}
        <div className="w-full mb-2 md:mb-3">
          <div className="flex justify-between items-center mb-1.5 md:mb-2">
            <span className="text-xs sm:text-sm font-bold text-primary-100">{skill.name}</span>
            <span className="text-[10px] sm:text-xs font-mono text-primary-400">{count}%</span>
          </div>
          <div className="h-1.5 md:h-2 bg-dark-50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : {}}
              transition={{ delay: index * 0.1 + 0.3, duration: 1.5, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </motion.div>
          </div>
        </div>
        
        {/* Check Icon */}
        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  )
}

export default Skills
