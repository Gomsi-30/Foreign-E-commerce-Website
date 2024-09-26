import AddToCartButton from '../_components/global/AddToCartButton'; 
import {products} from '../_components/data/products';
import Link from 'next/link'
import Quantity from './Quantity'
import Buy from './BuyButton'
import Image from 'next/image';

export const generateStaticParams = () => {
  return products.map(({ name }) => ({
    dynamicproduct: name.replace(/[^A-Za-z0-9]+/g, "-"),
  }));
};

export const generateMetadata = ({ params }: { params: { dynamicproduct: string } }) => {
  const { dynamicproduct } = params;
  const article = products.find(({ name }) => {
    return name.replace(/[^A-Za-z0-9]+/g, "-") === dynamicproduct;
  });

  if (article) {
    return {
      title: article.name,
      description: article.description.at(-1) || '',
      openGraph: {
        url: `/${dynamicproduct}`,
        title: article.name,
        description: article.description.at(-1) || '',
        images: [article.image],
      },
      twitter: {
        card: "summary_large_image",
        title: article.name,
        description: article.description.at(-1) || '',
        images: [article.image],
      },
    };
  }

  return {
    title: 'Product Not Found',
    description: 'No Product found for the given parameters',
  };
};



const ProductDetail = ({ params }: { params: { dynamicproduct: string } }) => {

  const { dynamicproduct } = params;
  const product = products.find((product) => product.name.replace(/\s+/g, '-') === dynamicproduct);
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col gap-10 container">
    <div className="container mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-11">
      <div className="flex-grow w-full lg:w-1/2">
        <div className="sticky top-0">
          <Image
            src={product.image} 
            alt={product.name}
            width={400}
            height={300} 
            className="object-cover object-center w-full h-64 md:h-80 lg:h-full"
          />
        </div>
      </div>

      {/* Product Details Section */}
      <div className="flex-grow w-full lg:w-[42%]">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-16 items-center">
            <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
            <Buy />
          </div>
          <hr />
          <p className="mt-3 text-sm">{product.description}</p>
          <div className="mt-3 flex flex-row gap-1 items-center">
            <h1 className="font-semibold">Price:</h1>
            <p className="font-bold">{product.price}</p>
          </div>
          <p className="text-xs mt-1">Price Inclusive of all taxes.</p>
          <h1 className="text-md font-bold text-pink-400 mt-3">Quantity</h1>
          <Quantity />
          <p className="mt-1 text-xs">
            Not sure what to buy? Check out our{' '}
            <Link className="text-red-700 font-semibold" href="/latestcollection">
              Latest Collection
            </Link>
          </p>

          <div className="flex flex-row items-center gap-3 mt-5">
            <AddToCartButton product={product} big={true} />
            <Link
              className="p-2 flex justify-center mt-2 bg-red-600 text-sm text-white font-bold rounded-md w-[100%]"
              href="/checkout"
            >
              Buy Now
            </Link>
          </div>
          <hr />

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="mt-4">{product.details.inspiration}</p>
            <h3 className="text-lg font-semibold mt-6">Design</h3>
            <ul className="list-disc list-inside mt-2">
              {product.details.design.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold">Shipping</h3>
            <ul className="list-disc list-inside mt-2">
              {product.details.shipping.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className='container flex flex-col md:flex-row w-full gap-10'>
      <div className='flex flex-col gap-2 w-full md:w-[37%] mt-16'>
        <h1 className='text-2xl font-bold'>Product Details</h1>
        <hr />
        <p className='text-xs'>
          Express your unique sense of minimalist style with the elevated details of this gold pendant...
        </p>
        <h1 className='text-xl font-bold mt-2'>Specifications</h1>
        <p className='text-sm text-gray-600 font-medium'>Brand: Trulyroselle</p>
        <p className='text-sm text-gray-600 font-medium'>Collection: Bestseller</p>
        <p className='text-sm text-gray-600 font-medium'>Gender: Women</p>
        <p className='text-sm text-gray-600 font-medium'>Product Type: PLAIN GOLD</p>
        <p className='text-sm text-gray-600 font-medium'>Occasion: Casual wear</p>
      </div>

      <div className="flex flex-col w-full md:w-[60%]">
        <h1 className="text-2xl font-bold text-pink-400 mt-8">You may also like</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-12 mt-4">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col gap-1 rounded-md">
              <Link href={`/${product.name.replace(/\s+/g, '-')}`} className="w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400} // Set an appropriate width
                  height={300} // Set an appropriate height
                  className="object-cover rounded-md w-full h-52"
                />
                <h2 className="text-xl lg:text-sm xl:text-xl font-semibold mt-2 cursor-pointer lg:whitespace-nowrap">{product.name}</h2>
              </Link>
              <p className="text-gray-700 font-bold lg:text-sm xl:text-md">Price: {product.price}</p>
              <AddToCartButton big={true} product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductDetail;