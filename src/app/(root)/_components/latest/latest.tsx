import Image from 'next/image';
import Link from 'next/link';
import Header from '../global/header';
import { products } from '../data/products';

const Latest = () => {
  return (
    <div className="flex flex-col gap-4">
      <Header heading="Our Latest Arrivals" />
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 h-full">
        {products.map((product) => (
          <Link href={`/${product.name.replace(/\s+/g, '-')}`} key={product.id}>
            <div className="relative overflow-hidden w-full h-auto cursor-pointer">
              <Image
                alt={product.name}
                src={product.image}
                width={369}
                height={240}
                layout="responsive"
                className="w-full h-auto"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Latest;
