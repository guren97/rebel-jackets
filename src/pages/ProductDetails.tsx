import { motion, AnimatePresence } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import useStore from '../store/useStore'
import { 
  ShoppingCartIcon, 
  StarIcon,
  ShieldCheckIcon,
  TruckIcon,
  ArrowPathIcon,
  TagIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { useState } from 'react'

const renderStars = (rating: number) => {
  return [...Array(5)].map((_, index) => (
    <span key={index}>
      {index < Math.floor(rating) ? (
        <StarIconSolid className="w-4 h-4 text-yellow-500" />
      ) : (
        <StarIcon className="w-4 h-4 text-white/20" />
      )}
    </span>
  ))
}

const ProductDetails = () => {
  const { id } = useParams()
  const addToCart = useStore((state) => state.addToCart)
  const cart = useStore((state) => state.cart)
  const [showSuccess, setShowSuccess] = useState(false)
  const product = products.find((p) => p.id === id)

  const handleAddToCart = () => {
    if (product) {
      addToCart(product)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 2000)
    }
  }

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
        <p className="text-white/60">The product you're looking for doesn't exist.</p>
      </motion.div>
    )
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
          >
            <CheckCircleIcon className="w-5 h-5" />
            <span>Added to cart!</span>
          </motion.div>
        )}
      </AnimatePresence>

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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-16 mt-20 relative z-20"
      >
        {/* Product Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm border border-white/10">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/10">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
              </div>
            </div>
            
            {/* Product Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <ShieldCheckIcon className="w-6 h-6 text-red-500 mb-2" />
                <h4 className="font-semibold text-white">Premium Quality</h4>
                <p className="text-sm text-white/60">High-end materials</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <TagIcon className="w-6 h-6 text-red-500 mb-2" />
                <h4 className="font-semibold text-white">Trendy Design</h4>
                <p className="text-sm text-white/60">Latest streetwear style</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <TruckIcon className="w-6 h-6 text-red-500 mb-2" />
                <h4 className="font-semibold text-white">Free Shipping</h4>
                <p className="text-sm text-white/60">On all orders</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <ArrowPathIcon className="w-6 h-6 text-red-500 mb-2" />
                <h4 className="font-semibold text-white">Easy Returns</h4>
                <p className="text-sm text-white/60">30-day guarantee</p>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-black text-white mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <div className="flex">{renderStars(product.rating.stars)}</div>
                  <span className="text-sm text-white/40">({product.rating.count} reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-2xl font-bold text-white">Rs {product.price.toFixed(2)}</p>
                {product.discount && (
                  <span className="px-3 py-1 bg-red-500/20 text-red-500 rounded-full text-sm font-medium">
                    {product.discount.percentage}% OFF
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 bg-black/50 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/10">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
                <span className="px-4 py-2 bg-black/50 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/10">
                  Premium Streetwear
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">Description</h2>
              <p className="text-white/60 leading-relaxed">{product.description}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <h4 className="font-medium text-white">Material</h4>
                  <p className="text-sm text-white/60">{product.material}</p>
                </div>
                <div className="bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <h4 className="font-medium text-white">Fit</h4>
                  <p className="text-sm text-white/60">Relaxed, comfortable</p>
                </div>
                <div className="bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <h4 className="font-medium text-white">Care</h4>
                  <p className="text-sm text-white/60">Machine washable</p>
                </div>
                <div className="bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <h4 className="font-medium text-white">Style</h4>
                  <p className="text-sm text-white/60">Modern streetwear</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="w-full bg-red-500 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-red-600 transition-colors font-medium"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              Add to Cart ({cart.filter(item => item.id === product.id).length || 0})
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProductDetails 