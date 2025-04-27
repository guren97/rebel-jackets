import { motion } from 'framer-motion'
import { TruckIcon, ClockIcon, MapPinIcon, ShieldCheckIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const ShippingInfo = () => {
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
            <span className="text-white">SHIPPING</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"> INFORMATION</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Everything you need to know about our shipping process, delivery times, and tracking your order.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Shipping Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
              <TruckIcon className="w-6 h-6 text-red-500" />
              Shipping Methods
            </h2>
            <div className="space-y-4">
              <div className="border border-white/10 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2 text-white">Standard Shipping</h3>
                <p className="text-white/60 mb-2">3-5 business days</p>
                <p className="text-white/60">Free on orders over Rs. 16259</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2 text-white">Express Shipping</h3>
                <p className="text-white/60 mb-2">1-2 business days</p>
                <p className="text-white/60">Rs. 8300 flat rate</p>
              </div>
            </div>
          </motion.div>

          {/* Delivery Times */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
              <ClockIcon className="w-6 h-6 text-red-500" />
              Delivery Times
            </h2>
            <div className="space-y-4">
              <div className="border border-white/10 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2 text-white">Processing Time</h3>
                <p className="text-white/60">Orders are processed within 24 hours of placement</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2 text-white">Delivery Windows</h3>
                <p className="text-white/60">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                <p className="text-white/60">Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Tracking Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
              <ArrowPathIcon className="w-6 h-6 text-red-500" />
              Track Your Order
            </h2>
            <div className="space-y-4">
              <div className="border border-white/10 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2 text-white">Tracking Number</h3>
                <p className="text-white/60 mb-4">You'll receive your tracking number via email once your order ships</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter tracking number"
                    className="flex-1 px-4 py-2 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 text-white placeholder-white/40 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                  <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
                    Track
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Shipping Coverage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
              <MapPinIcon className="w-6 h-6 text-red-500" />
              Shipping Coverage
            </h2>
            <div className="space-y-4">
              <div className="border border-white/10 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2 text-white">Domestic Shipping</h3>
                <p className="text-white/60">We ship to all major cities and towns across India</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2 text-white">International Shipping</h3>
                <p className="text-white/60">Currently available to select countries. Contact us for details.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
            <ShieldCheckIcon className="w-6 h-6 text-red-500" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2 text-white">What happens if I'm not home during delivery?</h3>
              <p className="text-white/60">Our delivery partner will attempt to deliver your package up to 3 times. If unsuccessful, you can collect it from the nearest delivery center.</p>
            </div>
            <div className="border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2 text-white">Can I change my delivery address?</h3>
              <p className="text-white/60">Yes, you can update your delivery address within 24 hours of placing your order by contacting our customer service.</p>
            </div>
            <div className="border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2 text-white">What's your return policy?</h3>
              <p className="text-white/60">We offer a 30-day return policy for all unused items in their original packaging. Return shipping is free for defective items.</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-white">Need Help?</h2>
          <p className="text-white/60 mb-6">
            Our customer service team is here to help with any shipping-related questions.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              Contact Support
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default ShippingInfo 