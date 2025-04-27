import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' 
import { ArrowRightIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
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
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 relative z-20">
        <div className="flex flex-col items-center min-h-screen justify-center">
          {/* Hero Header */}
          <motion.div
            className="w-full text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-6 py-2 bg-red-500 text-white text-sm font-bold uppercase tracking-widest">
                Limited Edition
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl lg:text-8xl font-black mb-6 tracking-tighter leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-white">BREAK</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"> THE RULES</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-8 text-white/80 max-w-2xl mx-auto font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Streetwear for the defiant. Bold designs that challenge conventions
              and embrace the rebel within.
            </motion.p>
          </motion.div>
          
          {/* Featured Products Grid */}
        
          
          {/* Call to Action */}
          <motion.div
            className="w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link to="/all-products">
              <motion.button
                className="bg-transparent border-2 border-white text-white font-bold px-12 py-5 text-xl hover:bg-white hover:text-black transition-colors flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collection
                <ArrowRightIcon className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Features Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-white/10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center flex items-center gap-2"
              >
                <TruckIcon className="w-6 h-6 text-red-500" />
                <div>
                  <p className="text-white font-bold text-lg">Free Shipping</p>
                  <p className="text-white/60 text-sm">On all orders over $100</p>
                </div>
              </motion.div>
            </div>
            <div className="flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-white/10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center flex items-center gap-2"
              >
                <ShieldCheckIcon className="w-6 h-6 text-yellow-500" />
                <div>
                  <p className="text-white font-bold text-lg">30-Day Returns</p>
                  <p className="text-white/60 text-sm">No questions asked</p>
                </div>
              </motion.div>
            </div>
            <div className="flex items-center justify-center p-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center flex items-center gap-2"
              >
                <ShieldCheckIcon className="w-6 h-6 text-red-500" />
                <div>
                  <p className="text-white font-bold text-lg">Secure Payment</p>
                  <p className="text-white/60 text-sm">Encrypted transactions</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
     
    </section>
  )
}

export default Hero