import { motion } from 'framer-motion'
import { products } from '../data/products'
import ProductCard from './ProductCard'

const FeaturedProducts = () => {
  // Get 6 random products for featured section
  const featuredProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 6)

  return (
    <div className="relative py-16 bg-black overflow-hidden">
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

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-red-500 text-white text-sm font-bold uppercase tracking-widest">
              Featured Collection
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-black mb-6 tracking-tighter leading-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-white">TRENDING</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"> NOW</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts 