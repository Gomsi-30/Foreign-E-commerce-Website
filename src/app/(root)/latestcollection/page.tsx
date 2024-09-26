import ProductList from '../_components/products/productList'

const Latest = ()=> {
  return (
    <div className='container'>
      <h1 className="text-xl text-pink-500 font-bold">Latest Collection</h1>
      <p className='w-80 opacity-70 '>Browse our stunning jewellery collection, from timeless classics to the latest trends. Find rings, necklaces, earrings, and more, all in one place.</p>
      <ProductList />
    </div>
  );
}

export default Latest;