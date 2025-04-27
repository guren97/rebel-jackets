import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  EnvelopeIcon, 
  ClockIcon,
  CheckCircleIcon,
  XMarkIcon,
  ArrowPathIcon, 
} from '@heroicons/react/24/outline'
import Newsletter from '../components/Newsletter'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setShowSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      content: 'support@rebel-jackets.shop',
      link: 'mailto:support@rebel-jackets.shop'
    }, 
    {
      icon: ClockIcon,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: null
    }
  ]

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0.2 }}
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
            opacity: [0.2, 0.15, 0.2]
          }}
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            background: 'radial-gradient(circle at center, #ff4500 0%, transparent 60%), radial-gradient(circle at top right, #ff8c00 0%, transparent 60%)',
            filter: 'blur(60px)'
          }}
        />
      </div>
      
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 z-10 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: 'url(/images/noise.png)',
          backgroundSize: '200px',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="container mx-auto px-4 py-12 mt-20 relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-black mb-4 tracking-tighter leading-none">
            <span className="text-white">GET IN</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"> TOUCH</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>
              <p className="text-white/60 mb-8">
                We're here to help! Whether you have questions about our products, need assistance with an order, or just want to share your style preferences, we're ready to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-black/50 backdrop-blur-sm p-6 border border-white/10 hover:border-red-500 transition-colors group"
                >
                  {/* Diagonal Cut Corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500 group-hover:border-yellow-500 transition-colors" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500 group-hover:border-yellow-500 transition-colors" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500 group-hover:border-yellow-500 transition-colors" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500 group-hover:border-yellow-500 transition-colors" />
                  
                  <info.icon className="w-8 h-8 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-white">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-white/60">{info.content}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-black/50 backdrop-blur-sm p-8 border border-white/10"
          >
            {/* Diagonal Cut Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500" />

            <h2 className="text-3xl font-bold mb-6 text-white">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/60 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full bg-red-500 text-white py-3 px-6 font-semibold hover:bg-red-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Diagonal Cut Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 group-hover:border-white/40 transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-white/40 transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 group-hover:border-white/40 transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20 group-hover:border-white/40 transition-colors" />
                
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <ArrowPathIcon className="w-5 h-5" />
                    </motion.div>
                    <span>Sending...</span>
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccess(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-black/90 backdrop-blur-sm shadow-lg z-50 p-6 border border-white/10"
            >
              {/* Diagonal Cut Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500" />

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-yellow-500" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500 rounded-full opacity-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-500 rounded-full opacity-10" />

              {/* Close Button */}
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute right-4 top-4 text-white/40 hover:text-white transition-colors"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>

              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircleIcon className="w-12 h-12 text-red-500" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-white/60">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                  <motion.button
                    onClick={() => setShowSuccess(false)}
                    className="relative mt-6 bg-red-500 text-white px-6 py-3 font-semibold hover:bg-red-600 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Diagonal Cut Corners */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 group-hover:border-white/40 transition-colors" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-white/40 transition-colors" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 group-hover:border-white/40 transition-colors" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20 group-hover:border-white/40 transition-colors" />
                    
                    Close
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}

export default Contact 