import { Link } from 'react-router-dom'
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import useStore from '../store/useStore'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const cartItems = useStore((state) => state.cart)

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/all-products' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]
 

    return (
        <nav className="relative z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-black text-white">
                            <span className="text-red-500">REBEL</span> JACKETS
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-white/80 hover:text-white transition-colors font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/cart" className="relative">
                            <ShoppingCartIcon className="w-6 h-6 text-white/80 hover:text-white transition-colors" />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white/80 hover:text-white transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <XMarkIcon className="w-6 h-6" />
                        ) : (
                            <Bars3Icon className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="py-6 space-y-6">
                        {/* Main Navigation */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider px-2">Menu</h3>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="flex items-center text-white/80 hover:text-white transition-colors font-medium px-2 py-2 hover:bg-white/5 rounded-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div> 

                        {/* Cart */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider px-2">Cart</h3>
                            <Link
                                to="/cart"
                                className="flex items-center text-white/80 hover:text-white transition-colors font-medium px-2 py-2 hover:bg-white/5 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                <ShoppingCartIcon className="w-5 h-5" />
                                <span className="ml-3">Shopping Cart</span>
                                {cartItems.length > 0 && (
                                    <span className="ml-auto bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                        {cartItems.length}
                                    </span>
                                )}
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <div className="px-2 py-4 border-t border-white/10">
                            <p className="text-sm text-white/60">Need help?</p>
                            <a href="mailto:support@rebeljackets.com" className="text-sm text-red-500 hover:text-red-400">
                                support@rebel-jackets.shop
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </nav>
    )
}

export default Navbar 