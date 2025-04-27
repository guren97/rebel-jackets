import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FacebookIcon, 
  InstagramIcon, 
  TwitterIcon, 
  YoutubeIcon 
} from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: 'All Products', path: '/all-products' }, 
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping Info', path: '/shipping' }, 
    ], 
    legal: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  }

  const socialLinks = [
    { icon: FacebookIcon, href: 'https://facebook.com' },
    { icon: InstagramIcon, href: 'https://instagram.com' },
    { icon: TwitterIcon, href: 'https://twitter.com' },
    { icon: YoutubeIcon, href: 'https://youtube.com' },
  ]

  return (
    <footer className="relative bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 text-center">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-black text-white">
                <span className="text-red-500">REBEL</span> JACKETS
              </span>
            </Link>
            <p className="text-white/60 text-sm">
              Break the rules. Define your style. Join the rebellion.
            </p>
           
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-white font-bold capitalize">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">

        <div className='flex flex-col justify-center space-x-4 mb-2 mt-6'>
            <h1 className='text-white/60 text-sm'>Contact Us</h1>
            <p className='text-white/60 font-bold text-sm'>support@rebel-jackets.shop</p>
        </div>
        
        <div className="flex items-center justify-center space-x-4 mb-12">
       
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          <div className="flex justify-center items-center">
            
            <p className="text-white/40 text-sm text-center">
            {/* Copyright ©️ 2025 | Powered by NAFEES ALI TRADERS (SMC-PRIVATE) LIMITED */}
            Copyright ©️ 2025 | Gwen Bautista
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer 