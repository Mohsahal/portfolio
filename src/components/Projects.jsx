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
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack',
      github: '#',
      live: '#',
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses using OpenAI API and WebSocket connections.',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop',
      tags: ['React', 'Python', 'FastAPI', 'OpenAI'],
      category: 'Full Stack',
      github: '#',
      live: '#',
    },
    {
      title: 'Portfolio Dashboard',
      description: 'Interactive dashboard for tracking cryptocurrency portfolio with real-time price updates and analytics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Vue.js', 'D3.js', 'Firebase'],
      category: 'Frontend',
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication, authorization, and real-time notifications.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
      category: 'Backend',
      github: '#',
      live: '#',
    },
    {
      title: 'Social Media App',
      description: 'Social networking platform with posts, comments, likes, and real-time messaging features.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tags: ['React Native', 'Firebase', 'Redux'],
      category: 'Mobile',
      github: '#',
      live: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with 7-day forecast, interactive maps, and location-based alerts.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'Weather API'],
      category: 'Frontend',
      github: '#',
      live: '#',
    },
  ]

  const categories = ['All', ...new Set(projects.map(p => p.category))]
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.project-card')
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
    })
  }, [filter])

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      
      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10
      
      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: 'power2.out',
      })
    }
    
    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="project-card group relative bg-dark-50 rounded-xl overflow-hidden border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
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
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary-100 mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-primary-300 mb-4 line-clamp-3">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-xs text-primary-400 font-mono"
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
