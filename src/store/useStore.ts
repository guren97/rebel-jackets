import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'hoodie' | 'jacket';
  description: string;
  rating: {
    stars: number;
    count: number;
  };
  likes: number;
  sizes: string[];
  colors: string[];
  material: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  inStock: boolean;
  discount?: {
    percentage: number;
    originalPrice: number;
  };
}

interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        });
      },
      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }));
      },
      updateQuantity: (productId, quantity) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        }));
      },
      clearCart: () => {
        set({ cart: [] });
      },
      getTotalPrice: () => {
        const state = get();
        return state.cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);

export default useStore; 