import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

const Contact = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mohammedsahal1243@gmail.com',
      link: 'mailto:mohammedsahal1243@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7306093151',
      link: 'tel:+917306093151',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kerala, India',
      link: '#',
    },
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (response.ok && data.success) {
        setFormData({ name: '', email: '', message: '' })
        alert('✅ Message sent successfully! I will get back to you soon.')
      } else {
        alert('❌ ' + (data.message || 'Failed to send message. Please try again.'))
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('❌ Failed to send message. Please make sure the server is running.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // React Spring animation for form
  const formSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: {
      opacity: isInView ? 1 : 0,
      transform: isInView ? 'translateX(0px)' : 'translateX(-50px)',
    },
    config: { tension: 100, friction: 20 },
  })

  return (
    <section id="contact" ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-primary-500 rounded-full blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-gradient">Get In Touch</h2>
          <div className="w-20 sm:w-24 h-1 bg-primary-500 mx-auto mb-6 md:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-primary-200 max-w-3xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <animated.div style={formSpring}>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm md:text-base text-primary-100 font-semibold mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-dark-100 border border-primary-500/30 rounded-lg text-sm md:text-base text-primary-100 focus:outline-none focus:border-primary-500 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm md:text-base text-primary-100 font-semibold mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-dark-100 border border-primary-500/30 rounded-lg text-sm md:text-base text-primary-100 focus:outline-none focus:border-primary-500 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm md:text-base text-primary-100 font-semibold mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-dark-100 border border-primary-500/30 rounded-lg text-sm md:text-base text-primary-100 focus:outline-none focus:border-primary-500 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(34, 197, 94, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 md:px-8 md:py-4 bg-primary-500 text-black text-sm md:text-base font-semibold rounded-lg hover:bg-primary-400 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 md:w-5 md:h-5 border-2 border-black border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="md:w-5 md:h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </animated.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="bg-dark-100 border border-primary-500/20 rounded-xl p-5 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-primary-100 mb-4 md:mb-6">Contact Information</h3>
              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-3 md:gap-4 group"
                  >
                    <div className="w-11 h-11 md:w-12 md:h-12 bg-primary-500/10 rounded-lg flex items-center justify-center group-hover:bg-primary-500/20 transition-all duration-300">
                      <info.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base text-primary-100 font-semibold mb-1">{info.title}</h4>
                      <p className="text-xs sm:text-sm md:text-base text-primary-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-dark-100 border border-primary-500/20 rounded-xl p-4 h-48 md:h-64 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 md:w-16 md:h-16 text-primary-500 mx-auto mb-3 md:mb-4" />
                <p className="text-sm md:text-base text-primary-300">Map Integration</p>
                <p className="text-primary-400 text-xs sm:text-sm mt-2">San Francisco, CA</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
