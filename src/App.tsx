import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';
import ShippingInfo from './pages/ShippingInfo';
import './App.css';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/shipping" element={<ShippingInfo />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const basename = import.meta.env.VITE_BASE_PATH || '/rebel-jackets';

  return (
    <BrowserRouter basename={basename}>
      <div className="relative min-h-screen bg-black">
        {/* Background Elements */}
        <div className="animated-bg" />
        <div className="noise-texture" />
        <div className="diagonal-stripes" />

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <AppRoutes />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
