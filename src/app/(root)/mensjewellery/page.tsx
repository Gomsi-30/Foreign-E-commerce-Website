import ProductList from '../_components/products/productList'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mens Jewellery",
};
const Latest = ()=> {
  return (
    <div className='container'>
      <h1 className="text-xl text-pink-500 font-bold">Men&apos;s Collection</h1>
      <p className='w-80 opacity-70 '>Browse our stunning jewellery collection, from timeless classics to the latest trends. Find rings, necklaces, earrings, and more, all in one place.</p>
      <ProductList />
    </div>
  );
}

export default Latest;