'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Phone,
  ExternalLink,
  Code,
  Shield,
  Palette,
  GraduationCap,
  BookOpen
} from 'lucide-react'

// Navigation component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'resume', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold gradient-text"
          >
            Gregory Sarfo Arthur
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
const HeroSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Gregory_Sarfo_Arthur_Resume.pdf'
    link.click()
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Gregory Sarfo Arthur
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 text-balance">
            Computer Science graduate, educator, and emerging UI/UX practitioner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <button onClick={handleDownloadResume} className="btn-secondary">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </button>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              I recently completed a Bachelor of Education in Computer Science at the University of Cape Coast. 
              Throughout my academic journey, I have developed a strong foundation in computer science principles, 
              programming languages, and educational methodologies that enable me to effectively teach and communicate 
              complex technical concepts.
            </p>
            
            <p>
              During my time at university, I served as Public Relations Officer for APSU HOPSA UCC, where I 
              developed strong communication and organizational skills while managing student affairs and 
              coordinating various events. I also took on the role of Organizer & Hall Coordinator for Rosa UCC, 
              where I gained valuable experience in event planning, student leadership, and community building.
            </p>
            
            <p>
              My teaching practice at UPSHS provided me with hands-on experience in educational technology and 
              curriculum development. I completed comprehensive coursework in web development, UI/UX design, and 
              Microsoft Office applications through university courses and external training programs, including specialized 
              Microsoft Office training at Alison.
            </p>
            
            <p>
              As a passionate learner and educator, I am committed to continuous professional development and 
              staying current with emerging technologies. My career goals include becoming a leading expert in 
              educational technology, developing innovative educational tools, and contributing to the advancement 
              of computer science education in Ghana and beyond.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Code, label: 'Web Development', color: 'text-blue-600' },
              { icon: Palette, label: 'UI/UX Design', color: 'text-purple-600' },
              { icon: GraduationCap, label: 'Education', color: 'text-orange-600' },
              { icon: BookOpen, label: 'Microsoft Office', color: 'text-green-600' }
            ].map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <skill.icon className={`w-8 h-8 mx-auto mb-2 ${skill.color}`} />
                <p className="text-sm font-medium text-gray-700">{skill.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Learning Management System",
      problem: "A comprehensive platform for managing online courses and student progress",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      features: ["Course Management", "Student Dashboard", "Progress Tracking", "Payment Integration"],
      description: "Built a full-stack e-learning platform that enables educators to create and manage courses while providing students with an intuitive learning experience. The system includes real-time progress tracking, secure authentication, and responsive design.",
      repo: "https://github.com/gregory-sarfo/elearning-platform",
      demo: "https://bill365.hocoos.com",
      image: "/api/placeholder/600/400",
      category: "Full-Stack"
    },
    {
      title: "UI/UX Design System",
      problem: "Comprehensive design system for consistent user interfaces",
      tech: ["Figma", "Storybook", "React", "Styled Components"],
      features: ["Component Library", "Design Tokens", "Documentation", "Accessibility"],
      description: "Designed and developed a comprehensive UI/UX design system with reusable components, design tokens, and accessibility guidelines. Includes interactive documentation and implementation examples.",
      repo: "https://github.com/gregory-sarfo/design-system",
      demo: "https://vapor-turn-20648538.figma.site",
      image: "/api/placeholder/600/400",
      category: "UI/UX"
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of projects spanning full-stack development, UI/UX design, and educational technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Project Screenshot</div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.category === 'Full-Stack' ? 'bg-blue-100 text-blue-800' :
                    project.category === 'Frontend' ? 'bg-green-100 text-green-800' :
                    project.category === 'Security' ? 'bg-red-100 text-red-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{project.problem}</p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-gray-700 mb-4">{project.description}</p>

              <div className="flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary text-center text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Resume Section
const ResumeSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Gregory_Sarfo_Arthur_Resume.pdf'
    link.click()
  }

  const timeline = [
    {
      year: "2024",
      title: "Bachelor of Education in Computer Science",
      institution: "University of Cape Coast",
      description: "Graduated with comprehensive knowledge in computer science principles, educational methodologies, and practical teaching experience."
    },
    {
      year: "2023-2024",
      title: "Public Relations Officer",
      institution: "APSU HOPSA UCC",
      description: "Managed student affairs, coordinated events, and developed communication strategies for student organization."
    },
    {
      year: "2023-2024",
      title: "Hall Coordinator & Organizer",
      institution: "Rosa UCC",
      description: "Organized student events, managed hall activities, and provided leadership in student community building."
    },
    {
      year: "2023",
      title: "Teaching Practice",
      institution: "UPSHS",
      description: "Completed practical teaching experience in computer science, developing curriculum and educational materials."
    },
    {
      year: "2023",
      title: "Microsoft Office Training",
      institution: "Alison",
      description: "Completed specialized training in Microsoft Office applications including Word, Excel, PowerPoint, and Outlook."
    }
  ]

  return (
    <section id="resume" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Resume
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Download my complete resume or explore my professional journey below
            </p>
            <button onClick={handleDownloadResume} className="btn-primary">
              <Download className="w-5 h-5 mr-2" />
              Download PDF Resume
            </button>
          </div>

          {/* Resume Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900">BEd Computer Science</h4>
                  <p className="text-sm text-gray-600">University of Cape Coast</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Microsoft Office Training</h4>
                  <p className="text-sm text-gray-600">Alison</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Web Development Course</h4>
                  <p className="text-sm text-gray-600">University of Cape Coast</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Skills</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900">Programming</h4>
                  <p className="text-sm text-gray-600">HTML/CSS/JavaScript, React, Node.js, Python</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Specializations</h4>
                  <p className="text-sm text-gray-600">Microsoft Office, UI/UX Design, Teaching</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Tools</h4>
                  <p className="text-sm text-gray-600">Git, Docker, Figma, VS Code</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900">Professional Timeline</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">{item.year}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-blue-600 font-medium">{item.institution}</p>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: 'Gregory Sarfo Arthur',
    email: 'gregline0000@gmail.com',
    subject: '',
    message: '',
    honeypot: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Honeypot check
    if (formData.honeypot) {
      return
    }

    setIsSubmitting(true)
    
    try {
      // For now, use mailto as fallback
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio')
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )
      
      window.open(`mailto:gregline0000@gmail.com?subject=${subject}&body=${body}`)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              I&apos;m always interested in new opportunities and collaborations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href="mailto:gregline0000@gmail.com" className="text-gray-700 hover:text-blue-600">
                      gregline0000@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a href="tel:+233561903228" className="text-gray-700 hover:text-blue-600">
                      +233 561 903 228
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Accra, Ghana</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/gregory-arthur-aa426823b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-6 h-6 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Honeypot field */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  className="sr-only"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-sm">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-sm">Error sending message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Gregory Sarfo Arthur</h3>
            <p className="text-gray-400 text-sm">
              Computer Science graduate, educator, and emerging cybersecurity &amp; UI/UX practitioner.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white text-sm">About</a>
              <a href="#projects" className="block text-gray-400 hover:text-white text-sm">Projects</a>
              <a href="#resume" className="block text-gray-400 hover:text-white text-sm">Resume</a>
              <a href="#contact" className="block text-gray-400 hover:text-white text-sm">Contact</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/gregory-arthur-aa426823b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Gregory Sarfo Arthur. All rights reserved. | 
            <a href="/privacy" className="hover:text-white ml-1">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}