import Image from 'next/image';
import Link from 'next/link';
import Header from '../global/header';

const Category = () => {
  return (
    <div className="flex flex-col gap-4">
      <Header heading='Categories' />

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Category Item 1 */}
        <Link href="/categories/item-1">
          <div className="relative h-64 sm:h-72 lg:h-84 w-full">
            <Image
              alt="Category 1"
              src="/categories/item.png"
              fill
               className="object-contain object-center"
            />
          </div>
        </Link>

        {/* Category Item 2 */}
        <Link href="/categories/item-2">
          <div className="relative h-64 sm:h-72 lg:h-84 w-full">
            <Image
              alt="Category 2"
              src="/categories/item.png"
              fill
               className="object-contain object-center"
            />
          </div>
        </Link>

        {/* Category Item 3 */}
        <Link href="/categories/item-3">
          <div className="relative h-64 sm:h-72 lg:h-84 w-full">
            <Image
              alt="Category 3"
              src="/categories/item.png"
              fill
              className="object-contain object-center"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
