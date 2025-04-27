import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { 
  AdjustmentsHorizontalIcon, 
} from '@heroicons/react/24/outline'

const ITEMS_PER_PAGE = 9

const AllProducts = () => {
  const [searchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState('all')
  const [selectedRating, setSelectedRating] = useState('all')

  // Get filter from URL
  const filterFromUrl = searchParams.get('filter') || 'all'

  // Apply filter from URL
  useEffect(() => {
    switch (filterFromUrl) {
      case 'new':
        setSortBy('newest')
        break
      case 'bestsellers':
        setSortBy('rating')
        break
      default:
        setSortBy('featured')
    }
  }, [filterFromUrl])

  // Get unique categories from products
  const categories = Array.from(new Set(products.map(product => product.category)))

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      // Category filter
      const categoryMatch = selectedCategory === 'all' || 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      
      // Price range filter
      const priceMatch = selectedPriceRange === 'all' || 
        (selectedPriceRange === 'under-1000' && product.price < 1000) ||
        (selectedPriceRange === '1000-2000' && product.price >= 1000 && product.price <= 2000) ||
        (selectedPriceRange === 'over-2000' && product.price > 2000)
      
      // Rating filter
      const ratingMatch = selectedRating === 'all' || 
        (selectedRating === '4plus' && product.rating.stars >= 4) ||
        (selectedRating === '3plus' && product.rating.stars >= 3)

      return categoryMatch && priceMatch && ratingMatch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating.stars - a.rating.stars
        case 'newest':
          return b.id.localeCompare(a.id)
        default:
          return 0
      }
    })

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
            <span className="text-white">ALL</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"> PRODUCTS</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Discover our complete collection of premium streetwear jackets and hoodies.
          </p>
        </motion.div>

        {/* Filters and Sort */}
        <div className="flex flex-col items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:border-red-500 transition-colors"
            >
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
          <p className="text-white/60 text-center">
            Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length} products
          </p>
        </div>

        {/* Filters Panel */}
        <motion.div
          initial={false}
          animate={{ height: showFilters ? 'auto' : 0, opacity: showFilters ? 1 : 0 }}
          className="overflow-hidden bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 mb-8 max-w-4xl mx-auto"
        >
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-white font-bold mb-4">Category</h3>
              <div className="space-y-2">
                {['all', ...categories].map((category) => (
                  <label key={category} className="flex items-center justify-center gap-2 text-white/60 hover:text-white cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="text-red-500 focus:ring-red-500"
                    />
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </label>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-white font-bold mb-4">Price Range</h3>
              <div className="space-y-2">
                {['all', 'under-1000', '1000-2000', 'over-2000'].map((range) => (
                  <label key={range} className="flex items-center justify-center gap-2 text-white/60 hover:text-white cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value={range}
                      checked={selectedPriceRange === range}
                      onChange={(e) => setSelectedPriceRange(e.target.value)}
                      className="text-red-500 focus:ring-red-500"
                    />
                    {range === 'all' ? 'All Prices' :
                     range === 'under-1000' ? 'Under Rs. 1000' :
                     range === '1000-2000' ? 'Rs. 1000 - Rs. 2000' :
                     'Over Rs. 2000'}
                  </label>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-white font-bold mb-4">Rating</h3>
              <div className="space-y-2">
                {['all', '4plus', '3plus'].map((rating) => (
                  <label key={rating} className="flex items-center justify-center gap-2 text-white/60 hover:text-white cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      value={rating}
                      checked={selectedRating === rating}
                      onChange={(e) => setSelectedRating(e.target.value)}
                      className="text-red-500 focus:ring-red-500"
                    />
                    {rating === 'all' ? 'All Ratings' :
                     rating === '4plus' ? '4+ Stars' :
                     '3+ Stars'}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {paginatedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === index + 1
                    ? 'bg-red-500 text-white'
                    : 'bg-black/50 backdrop-blur-sm border border-white/10 text-white/60 hover:text-white hover:border-red-500'
                } transition-colors`}
              >
                {index + 1}
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AllProducts 