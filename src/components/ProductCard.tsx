import { motion, AnimatePresence } from 'framer-motion'
import { Product } from '../store/useStore'
import useStore from '../store/useStore'
import { ShoppingBagIcon, StarIcon, HeartIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = useStore((state) => state.addToCart)
  const [imageError, setImageError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 2000)
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span key={index}>
        {index < Math.floor(rating) ? (
          <StarIconSolid className="w-4 h-4 text-yellow-500" />
        ) : (
          <StarIcon className="w-4 h-4 text-white/30" />
        )}
      </span>
    ))
  }

  return (
    <>
      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 z-[100] bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
          >
            <CheckCircleIcon className="w-5 h-5" />
            <span>Added to cart!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Link to={`/product/${product.id}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-black/50 backdrop-blur-sm border border-white/10 p-4 group hover:border-red-500 transition-colors"
        >
          <div className="relative h-64 mb-4 p-4 overflow-hidden items-center flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-60% h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={handleImageError}
            />
            {imageError && (
              <div className="w-full h-full bg-black/30 flex items-center justify-center">
                <span className="text-white/60">Image not available</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Discount Badge */}
            {product.discount && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 text-sm font-bold">
                -{product.discount.percentage}%
              </div>
            )}

            {/* Add to Cart Button */}
            <div className="absolute bottom-4 left-4 right-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="w-full bg-red-500 text-white px-4 py-2 text-sm flex items-center justify-center gap-2 hover:bg-red-600 transition-colors"
              >
                <ShoppingBagIcon className="w-4 h-4" />
                Add to Cart
              </motion.button>
            </div>
          </div>

          <div className="space-y-3">
            {/* Product Name */}
            <h3 className="text-white text-xl font-bold">{product.name}</h3>

            {/* Category and Material */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-white/60 capitalize">{product.category}</span>
              <span className="text-sm text-white/40">•</span>
              <span className="text-sm text-white/60">{product.material}</span>
            </div>

            {/* Features Tags */}
            <div className="flex flex-wrap gap-2">
              {product.features.slice(0, 3).map((feature, index) => (
                <span key={index} className="px-2 py-1 text-xs font-medium bg-white/10 text-white/80 rounded">
                  {feature}
                </span>
              ))}
            </div>

            {/* Rating and Likes */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="flex">{renderStars(product.rating.stars)}</div>
                <span className="text-sm text-white/60">({product.rating.count})</span>
              </div>
              <div className="flex items-center gap-1">
                <HeartIcon className="w-4 h-4 text-red-500" />
                <span className="text-sm text-white/60">{product.likes}</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              {product.discount ? (
                <>
                  <span className="text-yellow-500 text-xl font-bold">Rs {product.price.toFixed(2)}</span>
                  <span className="text-white/60 text-sm line-through">Rs {product.discount.originalPrice.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-yellow-500 text-xl font-bold">Rs {product.price.toFixed(2)}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-white/80 line-clamp-2">{product.description}</p>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm text-white/60">
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </>
  )
}

export default ProductCard 