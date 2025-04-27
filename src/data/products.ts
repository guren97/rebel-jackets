// Import all product images
import mensCartoonHoodie from '../assets/images/products/Mens_Cartoon_Graphic_Hoodies_Streetwear_Hooded_Sweatshirt_2477.jpg';
import mensPulloverHoodie from '../assets/images/products/MenS_Pullover_Hoodie_Pullover_Hooded_Neck_Long-Sleeve_Tee_Tops_Classic_Tees_2267.jpg';
import retroY2kHoodie from '../assets/images/products/Retro_Y2K_Hoodie_Gothic_Casual_Alphabet_Blast_Print_Pattern_Skull_2755.jpg';
import fashionNoveltyHoodie from '../assets/images/products/Fashion_Novelty_Hip-Hop_Graffiti_Print_Mens_Hoodies_Hooded_Sweatshirts_2619.jpg';
import doughboyHoodie from '../assets/images/products/Doughboy_Poster_Pullover_Hoodie_3697.jpg';
import mensSportswearHoodie from '../assets/images/products/Mens_hooded_sportswear_Y2k_sportswear_fashionable_hip-hop_3321.jpg';
import customMensHoodie from '../assets/images/products/Custom_MenS_Hooded_Shirt_Hoodies_Sweater_Novelty_WomenS_Hoodie_4080.jpg';
import asylvainHoodie from '../assets/images/products/Asylvain_Men_Women_Fashion_Unisex_3D_Printed_Graphic_Novelty_Hoodie_2455.jpg';
import seidariseHoodie from '../assets/images/products/Seidarise_Mens_Hoodie_Sweatshirt_Hip_Hop_Pullover_Street_wear_Casual_2851.jpg';
import screenshotHoodie from '../assets/images/products/SCREENSHOT_Mens_Urban_Hip_Hop_Premium_Fleece_Hoodie_-_Modern_3775.jpg';
import unisexGalaxyHoodie from '../assets/images/products/Unisex_Realistic_3D_Print_Galaxy_Pullover_Hooded_Sweatshirt_Hoodies_with_Big_Pockets_2457.jpg';
import lilPeepHoodie from '../assets/images/products/Lil_Peep_unisex-adult_Pullover_1852.jpg';
import chaosMonkeyHoodie from '../assets/images/products/CHAOS_MONKEY_Unisex_Mens_Hoodies_3d_Print_Pullover_Hooded_Sweatshirt_1755.jpg';
import faxikioHoodie from '../assets/images/products/FAXIKIO_Love_Logo_Unisex_Fashion_Print_Hoodie_Sweatshirt_2312.jpg';
import lilPeepWhiteHoodie from '../assets/images/products/Lil_Peep_Hoodies_Sweatshirts_Pullover_Hip_Hop_Streetwear_Casual_White_1855.jpg';
import y2kSpiderHoodie from '../assets/images/products/Y2K_Men_Spider_Grunge_Vintage_Hoodie_Zip_Up_Jacket_Streetwear_2415.jpg';
import kpopRapperJacket from '../assets/images/products/KPOP_Rapper_Jeans_Denim_Jacket_Love_Printed_Fashion_Sport_Hip_Hop_4157.jpg';
import mensVarsityJacket from '../assets/images/products/Mens_Slogan_Graphic_Button_Down_Varsity_Jacket_Baseball_Bomber_3850.jpg';
import gothicHoodie from '../assets/images/products/Gothic_Hoodie_Harajuku_Printed_Sweatshirt_Mens_and_Womens_Hip_2613.jpg';
import ramenHoodie from '../assets/images/products/3D_Ramen_Chicken_Noodle_Soup_Hoodie_Beef_Sweatshirt_For_Men_1465.jpg';
import mensGraphicHoodie from '../assets/images/products/Mens_Graphic_Print_Long_Sleeve_Drawstring_Hoodie_Pullover_Sweatshirt_2609.jpg';
import trendyRapperHoodie from '../assets/images/products/Trendy_Rapper_Hoodie_Blond_Merch_Streetwear_Pullover_Hoodies_1851.jpg';
import rapperLoveHoodie from '../assets/images/products/Rapper_Hoodies_Love_Printed_Fashion_Sport_Hip_Hop_Sweatshirt_Pocket_2310.jpg';
import mensHipHopHoodie from '../assets/images/products/Mens_Hoodie_Hip_Hop_Graphic_Fleece_Hooded_Pullover_Vintage_Printed_3000.jpg';
import men3dHoodie from '../assets/images/products/Men_3D_Print_Pullover_Hoodies_-_Teen_Women_Graphic_Sweatshirt_2200.jpg';
import unisexLoveHoodie from '../assets/images/products/Unisex_Hoodie_Love_Printed_Fashion_Sport_Hip_Hop_Hoodie_Sweatshirt_2300.jpg';
import vintageRapperHoodie from '../assets/images/products/Vintage_Graphic_Rapper_Hoodie_Printed_Hooded_Sweatshirt_Hip_Hop_2000.jpg';
import mensWarmHoodie from '../assets/images/products/MenS_Hoodies_Warm_ClothesMade_Of_Cotton.SoftScary_Pictures.Fashion_2600.jpg';
import rapperDenimJacket from '../assets/images/products/Rapper_Denim_Jacket_Jeans_Love_Printed_Fashion_Sport_Hip_Hop_Hoodie_4000.jpg';
import pulloverHoodie from '../assets/images/products/Pullover_Hoodie_3000.jpg';
import musicTourHoodie from '../assets/images/products/Men_And_WomenS_Music_Tour_Long_Sleevefunny_Pullover_Hoodies_Casual_Athletic_3457.jpg'; 
import mensWomensHipHopHoodie from '../assets/images/products/Mens_And_Womens_Hip_Hop_Hoodie_Street_Novelty_Hoodies_3d.jpg';

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

export const products: Product[] = [
  {
    id: '1',
    name: 'Mens Cartoon Graphic Hoodie',
    price: 12137.3,
    image: mensCartoonHoodie,
    category: 'hoodie',
    description: 'Streetwear hooded sweatshirt with cartoon graphics',
    rating: {
      stars: 4.5,
      count: 128
    },
    likes: 256,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Gray'],
    material: 'Premium Cotton Blend',
    features: [
      'Kangaroo Pocket',
      'Drawstring Hood',
      'Ribbed Cuffs',
      'Oversized Fit'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '320 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true,
    discount: {
      percentage: 15,
      originalPrice: 14279.2
    }
  },
  {
    id: '2',
    name: 'Mens Pullover Hoodie',
    price: 11108.3,
    image: mensPulloverHoodie,
    category: 'hoodie',
    description: 'Classic pullover hoodie with comfortable fit',
    rating: {
      stars: 4.2,
      count: 95
    },
    likes: 189,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Charcoal'],
    material: 'Fleece',
    features: [
      'Zippered Pocket',
      'Elastic Cuffs',
      'Ribbed Bottom',
      'Relaxed Fit'
    ],
    specifications: {
      'Material': '100% Cotton Fleece',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Bangladesh'
    },
    inStock: true
  },
  {
    id: '3',
    name: 'Retro Y2K Hoodie',
    price: 13499.5,
    image: retroY2kHoodie,
    category: 'hoodie',
    description: 'Gothic casual alphabet blast print pattern',
    rating: {
      stars: 4.8,
      count: 156
    },
    likes: 312,
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Red'],
    material: 'Cotton Blend',
    features: [
      'Graphic Print',
      'Oversized Hood',
      'Ribbed Cuffs',
      'Street Style'
    ],
    specifications: {
      'Material': '70% Cotton, 30% Polyester',
      'Weight': '300 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in China'
    },
    inStock: true,
    discount: {
      percentage: 20,
      originalPrice: 16874.4
    }
  },
  {
    id: '4',
    name: 'Fashion Novelty Hip-Hop Hoodie',
    price: 12833.1,
    image: fashionNoveltyHoodie,
    category: 'hoodie',
    description: 'Graffiti print mens hooded sweatshirt',
    rating: {
      stars: 4.3,
      count: 112
    },
    likes: 224,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Cotton Blend',
    features: [
      'Graffiti Design',
      'Kangaroo Pocket',
      'Drawstring Hood',
      'Urban Style'
    ],
    specifications: {
      'Material': '75% Cotton, 25% Polyester',
      'Weight': '290 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '5',
    name: 'Doughboy Poster Hoodie',
    price: 18115.3,
    image: doughboyHoodie,
    category: 'hoodie',
    description: 'Stylish pullover hoodie with unique design',
    rating: {
      stars: 4.6,
      count: 89
    },
    likes: 178,
    sizes: ['M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
    material: 'Premium Cotton',
    features: [
      'Poster Design',
      'Oversized Fit',
      'Ribbed Cuffs',
      'Street Style'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '340 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Bangladesh'
    },
    inStock: true,
    discount: {
      percentage: 10,
      originalPrice: 20128.1
    }
  },
  {
    id: '6',
    name: 'Mens Sportswear Y2K Hoodie',
    price: 16272.9,
    image: mensSportswearHoodie,
    category: 'hoodie',
    description: 'Fashionable hip-hop sportswear hoodie',
    rating: {
      stars: 4.4,
      count: 100
    },
    likes: 200,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
    material: 'Cotton Blend',
    features: [
      'Y2K Style',
      'Hip-Hop Design',
      'Comfortable Fit',
      'Fashionable Look'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '7',
    name: 'Custom Mens Hooded Shirt',
    price: 19992,
    image: customMensHoodie,
    category: 'hoodie',
    description: 'Novelty hooded shirt with unique design',
    rating: {
      stars: 4.3,
      count: 105
    },
    likes: 210,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Cotton Blend',
    features: [
      'Unique Design',
      'Novelty Hood',
      'Comfortable Fit',
      'Fashionable Look'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '290 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '8',
    name: 'Asylvain 3D Printed Hoodie',
    price: 12029.5,
    image: asylvainHoodie,
    category: 'hoodie',
    description: 'Unisex 3D printed graphic novelty hoodie',
    rating: {
      stars: 4.2,
      count: 90
    },
    likes: 180,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Cotton Blend',
    features: [
      '3D Printed',
      'Graphic Design',
      'Unisex Style',
      'Novelty Hood'
    ],
    specifications: {
      'Material': '70% Cotton, 30% Polyester',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '9',
    name: 'Seidarise Hip Hop Hoodie',
    price: 13969.9,
    image: seidariseHoodie,
    category: 'hoodie',
    description: 'Street wear casual pullover hoodie',
    rating: {
      stars: 4.1,
      count: 85
    },
    likes: 170,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
    material: 'Cotton Blend',
    features: [
      'Street Style',
      'Casual Fit',
      'Hip-Hop Design',
      'Comfortable Wear'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '290 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '10',
    name: 'Screenshot Premium Hoodie',
    price: 18497.5,
    image: screenshotHoodie,
    category: 'hoodie',
    description: 'Urban hip hop premium fleece hoodie',
    rating: {
      stars: 4.7,
      count: 140
    },
    likes: 280,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
    material: 'Cotton Blend',
    features: [
      'Premium Fleece',
      'Urban Style',
      'Comfortable Fit',
      'Fashionable Look'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '320 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '11',
    name: 'Unisex Galaxy Hoodie',
    price: 12039.3,
    image: unisexGalaxyHoodie,
    category: 'hoodie',
    description: 'Realistic 3D print galaxy pullover hoodie',
    rating: {
      stars: 4.6,
      count: 130
    },
    likes: 260,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Cotton Blend',
    features: [
      '3D Printed',
      'Galaxy Design',
      'Unisex Style',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '12',
    name: 'Lil Peep Pullover',
    price: 9074.8,
    image: lilPeepHoodie,
    category: 'hoodie',
    description: 'Unisex adult pullover hoodie',
    rating: {
      stars: 4.0,
      count: 70
    },
    likes: 140,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Cotton Blend',
    features: [
      'Unisex Design',
      'Adult Fit',
      'Comfortable Wear',
      'Street Style'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '13',
    name: 'Chaos Monkey Hoodie',
    price: 8599.5,
    image: chaosMonkeyHoodie,
    category: 'hoodie',
    description: '3D print pullover hooded sweatshirt',
    rating: {
      stars: 4.3,
      count: 100
    },
    likes: 200,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Cotton Blend',
    features: [
      '3D Printed',
      'Graffiti Design',
      'Urban Style',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '75% Cotton, 25% Polyester',
      'Weight': '290 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '14',
    name: 'Faxikio Love Logo Hoodie',
    price: 11328.8,
    image: faxikioHoodie,
    category: 'hoodie',
    description: 'Unisex fashion print hoodie sweatshirt',
    rating: {
      stars: 4.4,
      count: 100
    },
    likes: 200,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Cotton Blend',
    features: [
      'Love Print Design',
      'Unisex Style',
      'Fashionable Look',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '15',
    name: 'Lil Peep White Hoodie',
    price: 9089.5,
    image: lilPeepWhiteHoodie,
    category: 'hoodie',
    description: 'Hip hop streetwear casual white hoodie',
    rating: {
      stars: 4.0,
      count: 60
    },
    likes: 120,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White'],
    material: 'Cotton Blend',
    features: [
      'Street Style',
      'Casual Fit',
      'White Color',
      'Hip-Hop Design'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '16',
    name: 'Y2K Spider Grunge Hoodie',
    price: 11833.5,
    image: y2kSpiderHoodie,
    category: 'hoodie',
    description: 'Vintage zip up jacket streetwear',
    rating: {
      stars: 4.2,
      count: 80
    },
    likes: 160,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Red'],
    material: 'Cotton Blend',
    features: [
      'Vintage Style',
      'Zip Up Jacket',
      'Grunge Design',
      'Streetwear Look'
    ],
    specifications: {
      'Material': '70% Cotton, 30% Polyester',
      'Weight': '300 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '17',
    name: 'KPOP Rapper Denim Jacket',
    price: 20369.3,
    image: kpopRapperJacket,
    category: 'jacket',
    description: 'Love printed fashion sport hip hop jacket',
    rating: {
      stars: 4.7,
      count: 145
    },
    likes: 290,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Black'],
    material: 'Denim',
    features: [
      'Love Print Design',
      'Denim Material',
      'Hip Hop Style',
      'Sporty Fit'
    ],
    specifications: {
      'Material': '100% Cotton Denim',
      'Weight': '400 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true,
    discount: {
      percentage: 25,
      originalPrice: 27159.1
    }
  },
  {
    id: '18',
    name: 'Mens Varsity Jacket',
    price: 18865,
    image: mensVarsityJacket,
    category: 'jacket',
    description: 'Slogan graphic button down baseball bomber',
    rating: {
      stars: 4.4,
      count: 98
    },
    likes: 196,
    sizes: ['M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
    material: 'Polyester Blend',
    features: [
      'Baseball Style',
      'Ribbed Cuffs',
      'Button Closure',
      'Varsity Design'
    ],
    specifications: {
      'Material': '65% Polyester, 35% Cotton',
      'Weight': '350 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in China'
    },
    inStock: true
  },
  {
    id: '19',
    name: 'Gothic Harajuku Hoodie',
    price: 12803.7,
    image: gothicHoodie,
    category: 'hoodie',
    description: 'Printed sweatshirt for men and women',
    rating: {
      stars: 4.3,
      count: 90
    },
    likes: 180,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Cotton Blend',
    features: [
      'Gothic Style',
      'Harajuku Design',
      'Printed Sweatshirt',
      'Unisex Look'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '20',
    name: '3D Ramen Noodle Hoodie',
    price: 7178.5,
    image: ramenHoodie,
    category: 'hoodie',
    description: 'Chicken noodle soup design sweatshirt',
    rating: {
      stars: 4.0,
      count: 50
    },
    likes: 100,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Cotton Blend',
    features: [
      'Chicken Noodle Design',
      'Comfortable Fit',
      'Sweatshirt Style',
      '3D Printed'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '21',
    name: 'Mens Graphic Print Hoodie',
    price: 12784.1,
    image: mensGraphicHoodie,
    category: 'hoodie',
    description: 'Long sleeve drawstring pullover sweatshirt',
    rating: {
      stars: 4.2,
      count: 80
    },
    likes: 160,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Cotton Blend',
    features: [
      'Graphic Print',
      'Drawstring Hood',
      'Long Sleeve',
      'Sweatshirt Style'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '22',
    name: 'Trendy Rapper Hoodie',
    price: 9069.9,
    image: trendyRapperHoodie,
    category: 'hoodie',
    description: 'Blond merch streetwear pullover hoodie',
    rating: {
      stars: 4.0,
      count: 50
    },
    likes: 100,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Cotton Blend',
    features: [
      'Blond Merch Design',
      'Streetwear Style',
      'Pullover Hoodie',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '23',
    name: 'Rapper Love Hoodie',
    price: 11319,
    image: rapperLoveHoodie,
    category: 'hoodie',
    description: 'Love printed fashion sport hip hop sweatshirt',
    rating: {
      stars: 4.3,
      count: 90
    },
    likes: 180,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Cotton Blend',
    features: [
      'Love Print Design',
      'Sweatshirt Style',
      'Hip-Hop Design',
      'Fashionable Look'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '24',
    name: 'Mens Hip Hop Hoodie',
    price: 14700,
    image: mensHipHopHoodie,
    category: 'hoodie',
    description: 'Graphic fleece hooded pullover vintage printed',
    rating: {
      stars: 4.5,
      count: 110
    },
    likes: 220,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
    material: 'Cotton Blend',
    features: [
      'Graphic Print',
      'Vintage Style',
      'Fleece Hood',
      'Hip-Hop Design'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '290 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '25',
    name: 'Men 3D Print Hoodie',
    price: 10780,
    image: men3dHoodie,
    category: 'hoodie',
    description: 'Teen women graphic sweatshirt',
    rating: {
      stars: 4.1,
      count: 60
    },
    likes: 120,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Cotton Blend',
    features: [
      '3D Printed',
      'Graphic Design',
      'Sweatshirt Style',
      'Teen Women'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '26',
    name: 'Unisex Love Hoodie',
    price: 11270,
    image: unisexLoveHoodie,
    category: 'hoodie',
    description: 'Love printed fashion sport hip hop hoodie',
    rating: {
      stars: 4.2,
      count: 70
    },
    likes: 140,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Cotton Blend',
    features: [
      'Love Print Design',
      'Unisex Style',
      'Fleece Hood',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '27',
    name: 'Vintage Rapper Hoodie',
    price: 9800,
    image: vintageRapperHoodie,
    category: 'hoodie',
    description: 'Graphic rapper hoodie printed hooded sweatshirt',
    rating: {
      stars: 4.0,
      count: 50
    },
    likes: 100,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Cotton Blend',
    features: [
      'Vintage Style',
      'Rapper Design',
      'Printed Hoodie',
      'Comfortable Fit'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '28',
    name: 'Mens Warm Hoodie',
    price: 12740,
    image: mensWarmHoodie,
    category: 'hoodie',
    description: 'Cotton made soft scary pictures fashion hoodie',
    rating: {
      stars: 4.1,
      count: 60
    },
    likes: 120,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
    material: 'Cotton Blend',
    features: [
      'Soft Scary Pictures',
      'Fashion Hoodie',
      'Comfortable Fit',
      'Warm Design'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '29',
    name: 'Rapper Denim Jacket',
    price: 19600,
    image: rapperDenimJacket,
    category: 'jacket',
    description: 'Love printed fashion sport hip hop denim jacket',
    rating: {
      stars: 4.5,
      count: 100
    },
    likes: 200,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Black'],
    material: 'Denim',
    features: [
      'Love Print Design',
      'Denim Material',
      'Hip Hop Style',
      'Sporty Fit'
    ],
    specifications: {
      'Material': '100% Cotton Denim',
      'Weight': '400 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '30',
    name: 'Pullover Hoodie',
    price: 14700,
    image: pulloverHoodie,
    category: 'hoodie',
    description: 'Classic pullover hoodie design',
    rating: {
      stars: 4.2,
      count: 70
    },
    likes: 140,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
    material: 'Cotton Blend',
    features: [
      'Classic Design',
      'Pullover Hoodie',
      'Comfortable Fit',
      'Fashionable Look'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '31',
    name: 'Music Tour Hoodie',
    price: 16939.3,
    image: musicTourHoodie,
    category: 'hoodie',
    description: 'Long sleeve funny pullover hoodies casual athletic',
    rating: {
      stars: 4.3,
      count: 80
    },
    likes: 160,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
    material: 'Cotton Blend',
    features: [
      'Music Tour Design',
      'Long Sleeve',
      'Funny Pullover',
      'Casual Athletic'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  },
  {
    id: '32',
    name: 'Mens Womens Hip Hop Hoodie',
    price: 14700,
    image: mensWomensHipHopHoodie,
    category: 'hoodie',
    description: 'Street novelty hoodies 3D design',
    rating: {
      stars: 4.4,
      count: 90
    },
    likes: 180,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
    material: 'Cotton Blend',
    features: [
      'Street Novelty Design',
      '3D Hoodie',
      'Fashionable Look',
      'Unisex Style'
    ],
    specifications: {
      'Material': '80% Cotton, 20% Polyester',
      'Weight': '280 GSM',
      'Care': 'Machine washable',
      'Origin': 'Made in Vietnam'
    },
    inStock: true
  }
];