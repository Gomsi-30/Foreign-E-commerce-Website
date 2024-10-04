type ProductDetails = {
  inspiration: string;
  design: string[];
  shipping: string[]; 
};

// Define the main product type
export type Product = {
  id: number;
  name: string; 
  price: string; 
  image: string; 
  description: string; 
  details: ProductDetails;
  quantity?:number;
  category?:string;
};
export const products = [
  {
    id: 1,
    name: "HD Camera Neon",
    price: "$99",
    quantity:1,
    category: 'Earrings',
    image: "/categories/1.jpg",
    description: "Indulge in the dainty yet captivating allure that makes a sleek style statement with these drop earrings in 22 karat yellow gold.",
    details: {
      inspiration: "Circle up your beautiful journey...",
      design: [
        "925 Silver with Rose Gold Plating",
        "Perfect for sensitive skin",
        "Length of chain: 44 cm + 5 cm Adjustable",
        "Comes with the GIVA Jewellery kit",
        "Brand: Trulyroselle",
        "Collection: Bestseller",
        "Gender: Women",
        "Product Type: PLAIN GOLD",
        "Occasion: Casual wear"
      ],
      shipping: [
        "Free express shipping",
        "30 days return policy",
        "6 month warranty",
      ]
    }
  },
  {
    id: 2,
    name: "Mac Book Air",
    price: "$99",
    quantity:1,
    category: 'Earrings',
    image: "/categories/lap.jpg",
    description: "Indulge in the dainty yet captivating allure that makes a sleek style statement with these drop earrings in 22 karat yellow gold.",
    details: {
      inspiration: "Pure natural honey...",
      design: [
        "100% organic honey",
        "Free from preservatives",
        "500ml glass bottle",
      ],
      shipping: [
        "Free express shipping",
        "No questions asked 30 days return policy",
        "Shipping internationally to 20+ countries"
      ]
    }
  },
  {
      id: 3,
      name: "Buggati Veyron 165",
      price: "$99",
      quantity:1,
      category: 'Accessories',
      image: "/categories/car.jpg",
      description: "Indulge in the dainty yet captivating allure that makes a sleek style statement with these drop earrings in 22 karat yellow gold.",
      details: {
        inspiration: "Pure natural honey...",
        design: [
          "100% organic honey",
          "Free from preservatives",
          "500ml glass bottle",
        ],
        shipping: [
          "Free express shipping",
          "No questions asked 30 days return policy",
          "Shipping internationally to 20+ countries"
        ]
      }
    },
    {
      id: 4,
      name: "Puma Star Football",
      price: "$99",
      quantity:1,
      category: 'Watches',
      image: "/categories/foot.jpg",
      description: "Indulge in the dainty yet captivating allure that makes a sleek style statement with these drop earrings in 22 karat yellow gold.",
      details: {
        inspiration: "Pure natural honey...",
        design: [
          "100% organic honey",
          "Free from preservatives",
          "500ml glass bottle",
        ],
        shipping: [
          "Free express shipping",
          "No questions asked 30 days return policy",
          "Shipping internationally to 20+ countries"
        ]
      }
    },
    {
      id: 5,
      name: "Earrings with Gold",
      price: "$99",
      quantity:1,
      category: 'Anklets',
      image: "/categories/ear.jpg",
      description: "Indulge in the dainty yet captivating allure that makes a sleek style statement with these drop earrings in 22 karat yellow gold.",
      details: {
        inspiration: "Pure natural honey...",
        design: [
          "100% organic honey",
          "Free from preservatives",
          "500ml glass bottle",
        ],
        shipping: [
          "Free express shipping",
          "No questions asked 30 days return policy",
          "Shipping internationally to 20+ countries"
        ]
      }
    },
    {
      id: 6,
      name: "Rolex Watch 12",
      price: "$99",
      quantity:1,
      category: 'Anklets',
      image: "/categories/wat.jpg",
      description: "Indulge in the dainty yet captivating allure that makes a sleek style statement with these drop earrings in 22 karat yellow gold.",
      details: {
        inspiration: "Pure natural honey...",
        design: [
          "100% organic honey",
          "Free from preservatives",
          "500ml glass bottle",
        ],
        shipping: [
          "Free express shipping",
          "No questions asked 30 days return policy",
          "Shipping internationally to 20+ countries"
        ]
      }
    },
];