import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the newsletter subscription
    setShowModal(true)
    setEmail('')
  }

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-yellow-500/10" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-red-500 text-white text-sm font-bold uppercase tracking-widest">
              Join the Rebellion
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-black mb-6 tracking-tighter leading-none"
          >
            <span className="text-white">STAY</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"> CONNECTED</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-lg mb-8"
          >
            Subscribe to our newsletter for exclusive offers, new arrivals, and insider updates.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-red-500 text-white font-bold px-8 py-3 text-sm flex items-center justify-center gap-2 hover:bg-red-600 transition-colors"
            >
              Subscribe
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg max-w-md w-full relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Welcome to the Rebellion!</h3>
                <p className="text-white/60 mb-6">
                  Thank you for subscribing. You'll be the first to know about our latest drops and exclusive offers.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 text-white font-bold px-6 py-2 text-sm hover:bg-red-600 transition-colors"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Newsletter 