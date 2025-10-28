import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, Code } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('All')

  const projects = [
    {
      title: 'Career Companion System',
      description: 'AI-powered career guidance platform using machine learning algorithms to analyze user profiles, skills, and interests. Provides personalized career path recommendations, job matching, and skill gap analysis with predictive analytics.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['Machine Learning', 'Python', 'React', 'TensorFlow', 'scikit-learn'],
      category: 'AI/ML',
      github: 'https://github.com/Mohsahal',
      live: '#',
    },
    {
      title: 'Heart Disease Prediction using Neural Network',
      description: 'AI-powered heart disease prediction system built using Deep Learning and Neural Networks with an interactive Gradio interface. Predicts heart disease likelihood based on medical attributes including age, cholesterol, blood pressure, and ECG results with high accuracy.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      tags: ['Deep Learning', 'Neural Networks', 'Python', 'Gradio', 'TensorFlow'],
      category: 'AI/ML',
      github: 'https://github.com/Mohsahal',
      live: '#',
    },
    {
      title: 'E-Learning Platform',
      description: 'Full-featured MERN stack application with secure authentication, course browsing, video lessons, live classes, certificate generation, progress tracking, and integrated payment gateway. Deployed on Render.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      tags: ['MERN', 'Payment Gateway', 'WebRTC', 'Render'],
      category: 'Full Stack',
      github: 'https://github.com/Mohsahal',
      live: '#',
    },
    {
      title: 'E-commerce Web Application',
      description: 'MERN stack application with user authentication, product browsing, shopping cart, and basic checkout system. Complete online shopping experience.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      category: 'Full Stack',
      github: 'https://github.com/Mohsahal',
      live: '#',
    },
    {
      title: 'Packet Analysis Tool',
      description: 'Real-time network monitoring and traffic inspection tool to identify suspicious patterns and malicious activities. Utilizes network packet capture and analysis techniques for enhanced cybersecurity visibility.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['Python', 'Wireshark', 'Network Security'],
      category: 'Cyber Security',
      github: 'https://github.com/Mohsahal',
      live: '#',
    },
    // {
    //   title: 'VAPT Project',
    //   description: 'Vulnerability Assessment and Penetration Testing project focused on assessing system security through ethical hacking methodologies. Includes scanning, exploitation, and remediation phases.',
    //   image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    //   tags: ['Metasploit', 'Burp Suite', 'Nmap', 'Nessus'],
    //   category: 'Cyber Security',
    //   github: 'https://github.com/Mohsahal',
    //   live: '#',
    // },
  ]

  const categories = ['All', 'AI/ML', 'Full Stack', 'Cyber Security']
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.project-card')
    if (!cards || cards.length === 0) return
    
    // Reset cards first
    gsap.set(cards, { y: 0, opacity: 1 })
    
    // Then animate
    gsap.from(cards, {
      y: 20,
      opacity: 0,
      stagger: 0.03,
      duration: 0.25,
      ease: 'power1.out',
      clearProps: 'all'
    })
  }, [filter])

  return (
    <section id="projects" ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary-500 rounded-full blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.25 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-gradient">Featured Projects</h2>
          <div className="w-20 sm:w-24 h-1 bg-primary-500 mx-auto mb-6 md:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-primary-200 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-primary-500 text-black'
                  : 'bg-dark-50 text-primary-100 border border-primary-500/30 hover:border-primary-500'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const rotateX = (y - centerY) / 15
      const rotateY = (centerX - x) / 15
      
      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
    
    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
    
    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.02, duration: 0.2 }}
      className="project-card group relative bg-dark-50 rounded-xl overflow-hidden border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Image */}
      <div className="relative h-44 sm:h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
        
        {/* Overlay Links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.2, rotate: 360 }}
            className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-black hover:bg-primary-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href={project.live}
            whileHover={{ scale: 1.2, rotate: 360 }}
            className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-black hover:bg-primary-400 transition-colors"
            aria-label="Live Demo"
          >
            <ExternalLink size={20} />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-100 mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-primary-300 mb-3 md:mb-4 line-clamp-3">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-[10px] sm:text-xs text-primary-400 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
