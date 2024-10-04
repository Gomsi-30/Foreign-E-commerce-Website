import Image from 'next/image';
import Link from 'next/link';

const ImageSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      {/* Image */}
      <div className="relative w-80 h-80">
        <Image
          src="/astro.webp" 
          alt="Astronaut Image"
          layout="fill"
          objectFit="contain"
        />
      </div>
      
 
      <Link href="/" >
        <div className="mt-6 text-lg text-white underline hover:text-yellow-400">
          Go to Homepage
        </div>
      </Link>
    </div>
  );
};

export default ImageSection;
