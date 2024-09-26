import Card from '../_components/card/card';
import Image from 'next/image'
import Link from 'next/link'
import {blogsData} from '../_components/data/blogsdata'

export default function Home() {
  
  const one = blogsData[15]
  const six = blogsData.slice(0,6)
  const three = blogsData.slice(7,10)
  const two = blogsData.slice(11,13)
  return (
    <>
     <Link href={`/blogs/${one.title.replace(/[^A-Za-z0-9]+/g,'-')}`} className='mt-[-30px]'>
    <div className="relative h-[300px] sm:h-[300px] md:h-[350px] lg:h-[350px] w-full mt-[-40px]">
   
      <Image 
      src={one.imgUrl}
      alt="Banner Image" 
      layout="fill" 
      objectFit="cover" 
      className="absolute inset-0 z-0" 
      />
    
    <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/60 to-black"></div>
    <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center items-center p-4 lg:p-8">
      <h1 className="text-white font-bold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-screen-md">
          {one.title}
      </h1>
    </div>
  </div>
  </Link>
    <div className="container mx-auto py-8 flex flex-col gap-[70px]">
      {/* Header */}
     
      <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
        {three.map((card, index) => (
          <Card
            key={index}
            image={card.imgUrl}
            date={card.readTime}
            title={card.title}
            description={card.contents}
          />
        ))}
      </div>
      <div className="container lg:px-54 grid grid-cols-1 md:grid-cols-2 gap-6">
        {two.map((card, index) => (
          <Card
            key={index}
            image={card.imgUrl}
            date={card.readTime}
            title={card.title}
            description={card.contents}
          />
        ))}
      </div>
      <h1 className="mt-12 text-center text-3xl font-bold text-gray-800 mb-8">
        The Festival of Diamonds: A Celebration of Sparkling Elegance
      </h1>
      
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
        {six.map((card, index) => (
          <Card
            key={index}
            image={card.imgUrl}
            date={card.readTime}
            title={card.title}
            description={card.contents}
          />
        ))}
      </div>
    </div>
    </>
  );
}
