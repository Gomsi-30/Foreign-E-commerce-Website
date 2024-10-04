'use client'
import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Toaster } from 'react-hot-toast';
import Image from 'next/image';
const Reviews = () => {
   const productData = [
        {
          id: 1,
          name: "Rose Gold Diamond Ring",
          price: "$99",
          image: "/categories/a.jpg",
          description: "This is a beautiful rose gold diamond ring.",
          details: {
            inspiration: "Circle up your beautiful journey...",
            design: [
              "925 Silver with Rose Gold Plating",
              "Perfect for sensitive skin",
              "Length of chain: 44 cm + 5 cm Adjustable",
              "Comes with the GIVA Jewellery kit",
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
          name: "Natural Honey Bottle",
          price: "$99",
          image: "/categories/b.jpg",
          description: "A premium quality honey bottle.",
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
            name: "Natural Honey Bottle",
            price: "$99",
            image: "/categories/c.jpg",
            description: "A premium quality honey bottle.",
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
            name: "Natural Honey Bottle",
            price: "$99",
            image: "/categories/d.jpg",
            description: "A premium quality honey bottle.",
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
            name: "Natural Honey Bottle",
            price: "$99",
            image: "/categories/a.jpg",
            description: "A premium quality honey bottle.",
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
            name: "Natural Honey Bottle",
            price: "$99",
            image: "/categories/b.jpg",
            description: "A premium quality honey bottle.",
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
    
    const sliderRef = useRef<HTMLDivElement | null>(null);

  const slideLeft = () => {
    if (sliderRef.current) { 
      sliderRef.current.scrollLeft -= 350;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) { 
      sliderRef.current.scrollLeft += 350;
    }
  };


  return (
    <div className="container relative">
      <h1 className="text-3xl text-center font-bold text-pink-500 mb-6">Customer Reviews</h1>
      <div className="relative">
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full" 
          onClick={slideLeft}
        >
          <FiChevronLeft size={24} />
        </button>

        <div ref={sliderRef} className="flex overflow-x-scroll gap-5 no-scrollbar">
          {productData.map((product) => (
            <div key={product.id} className="min-w-[330px] rounded-md">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={400} 
                height={256} 
                className="w-full h-64 object-cover rounded-md" 
              />
      
            </div>
          ))}
        </div>

        <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md" 
          onClick={slideRight}
        >
          <FiChevronRight size={24} />
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default Reviews;