import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TrashIcon } from '@heroicons/react/24/outline'
import useStore from '../store/useStore'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useStore()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="relative min-h-screen py-16">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-red-500 text-white text-sm font-bold uppercase tracking-widest">
              Your Cart
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl lg:text-5xl font-black mb-6 tracking-tighter leading-none"
          >
            <span className="text-white">SHOPPING</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"> CART</span>
          </motion.h1>
        </motion.div>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-white/60 text-lg mb-6">Your cart is empty</p>
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 text-white font-bold px-8 py-3 text-sm flex items-center justify-center gap-2 hover:bg-red-600 transition-colors"
              >
                Continue Shopping
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/50 backdrop-blur-sm border border-white/10 p-6 flex gap-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-white/60 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-white/20">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="px-3 py-1 text-white/60 hover:text-white transition-colors"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-white border-x border-white/20">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-white/60 hover:text-white transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-white/60 hover:text-red-500 transition-colors"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                      <span className="text-yellow-500 text-xl font-bold">
                        Rs {item.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 p-6 sticky top-8">
                <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-white/60">
                    <span>Subtotal</span>
                    <span>Rs {total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between text-white font-bold">
                      <span>Total</span>
                      <span>Rs {total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <Link to="/checkout">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-red-500 text-white font-bold px-8 py-3 text-sm flex items-center justify-center gap-2 hover:bg-red-600 transition-colors"
                  >
                    Proceed to Checkout
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart 