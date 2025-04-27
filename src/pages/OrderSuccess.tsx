import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircleIcon, HomeIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

const OrderSuccess = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-punk">
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
            background: 'radial-gradient(circle at center, #ff0000 0%, transparent 60%), radial-gradient(circle at top right, #ff8c00 0%, transparent 60%)',
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center relative z-20"
      >
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative max-w-2xl mx-auto bg-black/80 backdrop-blur-md border border-white/20 overflow-hidden shadow-lg"
          > 
            
            <div className="p-8 md:p-12 text-center">
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: 0.2
                }}
                className="relative flex justify-center mb-8"
              >
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-2xl" />
                <div className="relative bg-red-700 rounded-full p-4 shadow-md">
                  <CheckCircleIcon className="h-16 w-16 text-white" />
                </div>
              </motion.div>

              {/* Success Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h1 className="text-5xl font-extrabold text-white mb-4 uppercase tracking-widest">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Order Complete!</span>
                </h1>
                
                <p className="text-lg text-white/80 mb-2 font-semibold">
                  Thanks for your badass purchase!
                </p>
                <p className="text-white/60 mb-8 text-sm">
                  Your punk gear is on the way. Watch your email for a shipping update!
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link to="/all-products">
                  <motion.button
                    className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 uppercase font-bold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingBagIcon className="w-5 h-5" />
                    Get More Gear
                  </motion.button>
                </Link>
                
                <Link to="/">
                  <motion.button
                    className="w-full sm:w-auto bg-black/50 text-white border-2 border-white/20 px-8 py-3 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2 uppercase font-bold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HomeIcon className="w-5 h-5" />
                    Back to Base
                  </motion.button>
                </Link>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 pt-8 border-t border-white/20 text-sm"
              >
                <p className="text-white/60">
                  Need help? Hit us up at{' '}
                  <a href="mailto:support@rebeljackets.com" className="text-red-500 hover:text-red-400 transition-colors font-semibold">
                    support@rebel-jackets.shop
                  </a>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default OrderSuccess