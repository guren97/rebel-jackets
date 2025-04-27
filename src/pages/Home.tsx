import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />

       

        <FeaturedProducts />
         {/* Featured Categories */}
         <section className="py-16 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,0,0,0.1)_10px,rgba(255,0,0,0.1)_20px)]" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="px-6 py-2 bg-red-500 text-white text-sm font-bold uppercase tracking-widest">
                  Shop by Category
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-5xl font-black mb-6 tracking-tighter leading-none"
              >
                <span className="text-white">EXPLORE</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"> COLLECTIONS</span>
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Hoodies',
                  description: 'Street Style Essentials',
                  image: '/src/assets/images/products/Retro_Y2K_Hoodie_Gothic_Casual_Alphabet_Blast_Print_Pattern_Skull_2755.jpg'
                },
                {
                  name: 'Jackets',
                  description: 'Bold & Rebellious',
                  image: '/src/assets/images/products/KPOP_Rapper_Jeans_Denim_Jacket_Love_Printed_Fashion_Sport_Hip_Hop_4157.jpg'
                },
                {
                  name: 'Streetwear',
                  description: 'Urban Edge',
                  image: '/src/assets/images/products/Mens_Graphic_Print_Long_Sleeve_Drawstring_Hoodie_Pullover_Sweatshirt_2609.jpg'
                }
              ].map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group relative h-[400px] overflow-hidden bg-black/50 backdrop-blur-sm border border-white/10"
                >
                  {/* Diagonal Stripes */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,0,0,0.1)_10px,rgba(255,0,0,0.1)_20px)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image Container */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * index }}
                    >
                      <h3 className="text-4xl font-black text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-white/60 text-sm font-medium mb-4 group-hover:text-white/80 transition-colors duration-300">
                        {category.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-500 text-white font-bold px-6 py-2 text-sm flex items-center gap-2 hover:bg-red-600 transition-colors w-fit"
                      >
                        Shop Now
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Newsletter />
      </div>
    </div>
  )
}

export default Home 