import Link from 'next/link';
import AddToCartButton from './AddToCartButton';
import Image from 'next/image';
type SimilarProps = {
    heading: string;
    para: string;
    button: string;
};

const product = [
    {
        id: 1,
        name: "Rings",
        price: "$99",
        image: "/categories/3.png",
        category: "Rings",
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
            ],
        },
    },
    {
        id: 2,
        name: "Accessories",
        price: "$99",
        image: "/categories/1.png",
        category: "Accessories",
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
                "Shipping internationally to 20+ countries",
            ],
        },
    },
    {
        id: 3,
        name: "Accessories",
        price: "$50",
        image: "/categories/2.png",
        category: "Accessories",
        description: "A set of beautiful earrings.",
        details: {
            inspiration: "Delicate earrings...",
            design: ["Gold plated", "Perfect for sensitive skin"],
            shipping: ["Free shipping", "30 days return policy"],
        },
    },
];

const Similar = ({ heading, para, button }: SimilarProps) => {
    return (
        <div className='container flex flex-col gap-12 p-4'>
        <div className='flex flex-col gap-5 items-center justify-center'>
          <h1 className='text-3xl text-pink-500 font-semibold'>{heading}</h1>
          <p className='text-md opacity-60 text-center'>{para}</p>
          <button className='py-2 hover:bg-pink-500 font-medium hover:text-white px-4 bg-white text-pink-500 border border-[1px] border-pink-100 rounded-md'>
            {button}
          </button>
        </div>
        <div className='flex flex-wrap justify-center gap-4'>
          {product.map((product) => (
            <Link href={`/${product.id}`} key={product.id} className="rounded-md p-4 w-full md:w-[45%] lg:w-[30%]">
              <Image
                src={product.image} // Use the Image component here
                alt={product.name}
                width={300} // Set an appropriate width
                height={240} // Set an appropriate height
                className="w-full h-60 md:h-80 object-cover rounded-md"
              />
              <p className="text-gray-500 text-lg font-medium mt-1">{product.name}</p>
              <h2 className="text-xl font-semibold mt-1">Price : {product.price}</h2>
              <AddToCartButton product={product} big={true} />
            </Link>
          ))}
        </div>
      </div>
    );
};

export default Similar;
