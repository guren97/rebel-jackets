import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-16 mt-20"
    >
      <h1 className="text-4xl font-pokemon text-pokemon-blue mb-8">Privacy Policy</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact information</li>
            <li>Shipping and billing addresses</li>
            <li>Payment information</li>
            <li>Order history</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Process your orders</li>
            <li>Send you order confirmations</li>
            <li>Communicate with you about products and services</li>
            <li>Improve our website and services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
          <p>
            We do not sell or share your personal information with third parties except as described in this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-2">
            Email: privacy@rebel-jackets.shop
          </p>
        </section>
      </div>
    </motion.div>
  )
}

export default PrivacyPolicy 