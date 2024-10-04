import Image from 'next/image';

const Banner = () => {
  return (
    <div className="w-full min-h-[230px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] relative">
      <Image
        alt="Banner Image"
        src="/categories/banner.png"
        fill
        className="object-fit object-center"
      />
    </div>
  );
};

export default Banner;
