import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon,  
  StarIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline' 

const About = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Premium Quality',
      description: 'Our jackets and hoodies are crafted with high-end materials to ensure comfort and durability in every piece.'
    },
    {
      icon: StarIcon,
      title: 'Trendy Design',
      description: 'Each piece is carefully designed with attention to detail, featuring modern streetwear aesthetics and contemporary style.'
    },
    {
      icon: HeartIcon,
      title: 'Style First',
      description: 'We\'re passionate about streetwear and create pieces that celebrate modern fashion with authentic designs.'
    },
    {
      icon: SparklesIcon,
      title: 'Unique Collection',
      description: 'From classic jackets to trendy hoodies, we offer a wide range of designs to suit every style preference.'
    }
  ]

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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative z-20"
      >
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl lg:text-5xl font-black mb-4 tracking-tighter leading-none">
                <span className="text-white">ABOUT</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"> REBEL JACKETS</span>
              </h1>
              <p className="text-xl text-white/60">
                Your premier destination for premium streetwear jackets and hoodies. We combine style with comfort in every piece.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-1 gap-12 items-center mb-20"
          >
            <div className='flex flex-col justify-center items-center text-center'>
              <h2 className="text-3xl font-black mb-6 text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Our Story</span>
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg mb-4 text-white/80">
                  Founded by streetwear enthusiasts, Rebel Jackets started with a simple idea: to create premium jackets and hoodies that combine style with comfort.
                </p>
                <p className="text-lg mb-4 text-white/80">
                  What began as a small collection of classic jackets has grown into a comprehensive catalog featuring punk and streetwear designs.
                </p>
                <p className="text-lg text-white/80">
                  Today, we're proud to offer a wide range of jackets and hoodies, from timeless classics to contemporary designs, all while maintaining our commitment to quality and style.
                </p>
              </div>
            </div>
         
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden bg-black/50 backdrop-blur-sm border border-white/10 hover:border-red-500 transition-colors"
              >
                {/* Diagonal Cut Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500 group-hover:border-yellow-500 transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500 group-hover:border-yellow-500 transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500 group-hover:border-yellow-500 transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500 group-hover:border-yellow-500 transition-colors" />
                
                {/* Feature Image */}
                
                <div className="p-6">
                  <feature.icon className="w-12 h-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-black/50 backdrop-blur-sm p-8 md:p-12 text-center border border-white/10 mb-20"
          >
            {/* Diagonal Cut Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500" />
            
            <h2 className="text-3xl font-black mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Our Mission</span>
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              At Rebel Jackets, our mission is to bring premium streetwear to your everyday life through high-quality, stylish jackets and hoodies. We believe that your clothing should not only provide comfort but also express your personality and sense of style.
            </p>
          </motion.div>

          {/* Collection Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl font-black mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Our Collection</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              From classic jackets to trendy hoodies, we offer a wide range of designs to suit every style preference. Each piece is carefully crafted to showcase punk and streetwear aesthetics while providing comfort and durability.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  name: 'Classic Collection',
                  image: '/src/assets/images/products/Mens_Slogan_Graphic_Button_Down_Varsity_Jacket_Baseball_Bomber_3850.jpg',
                  description: 'Timeless designs that never go out of style'
                },
                { 
                  name: 'Streetwear Collection',
                  image: '/src/assets/images/products/Retro_Y2K_Hoodie_Gothic_Casual_Alphabet_Blast_Print_Pattern_Skull_2755.jpg',
                  description: 'Urban-inspired pieces for the modern rebel'
                },
                { 
                  name: 'Urban Collection',
                  image: '/src/assets/images/products/SCREENSHOT_Mens_Urban_Hip_Hop_Premium_Fleece_Hoodie_-_Modern_3775.jpg',
                  description: 'Contemporary styles for city life'
                }
              ].map((collection, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group overflow-hidden bg-black/50 backdrop-blur-sm border border-white/10 hover:border-red-500 transition-colors"
                >
                  {/* Diagonal Cut Corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500 group-hover:border-yellow-500 transition-colors" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500 group-hover:border-yellow-500 transition-colors" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500 group-hover:border-yellow-500 transition-colors" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500 group-hover:border-yellow-500 transition-colors" />
                  
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={collection.image} 
                      alt={collection.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold mb-2">{collection.name}</h3>
                    <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {collection.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default About 