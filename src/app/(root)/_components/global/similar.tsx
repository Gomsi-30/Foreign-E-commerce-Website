import Link from 'next/link';
import AddToCartButton from './AddToCartButton';
import Image from 'next/image';
import { products as product } from '../data/products';

type SimilarProps = {
    heading: string;
    para: string;
    button: string;
};

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
