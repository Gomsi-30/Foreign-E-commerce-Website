import CreationDate from '../data/creationDate';
import Image from 'next/image';

type BannerProps = {
  headingText?: string;
  profileImage?: string;
  profileName?: string;
  articleImage?: string;
  profileReadTime?: string;
  articleNumber?: number; 
};

const Banner = ({
  headingText,
  profileImage,
  profileName,
  articleImage,
  profileReadTime,
  articleNumber
}: BannerProps) => {

//   const data = Math.floor(Math.random() * socialData.length);
//   const bannerImg = socialData[data].imgUrl;
//   const bannerTitle = socialData[data].title;

  return (

   <div className="flex flex-col items-center gap-4 p-4 lg:p-8">
         
          <div className="px-[20px]">
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold max-w-screen-md px-9">
              {headingText}
            </h1>
          </div>

          <div className="flex items-center gap-2 mt-4">
            {profileImage && (
              <div className="w-9 h-9 relative">
                <Image 
                  src={profileImage}
                  alt="profile-image"
                  fill
                  className="object-cover object-center rounded-full"
                />
              </div>
            )}
           
            <div className="flex flex-row items-center gap-2">
              {profileName && <div className="font-regular text-gray-500">{profileName}   |   </div>} 
              {profileReadTime && <div className="text-sm text-gray-500">{profileReadTime}   |   </div>}
              {articleNumber !== undefined && <div className="text-sm text-gray-500"><CreationDate articleNumber={articleNumber} /></div>}
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[400px] w-full max-w-screen-lg">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.6)_100%)] bg-cover bg-center"></div>
            {articleImage && (
              <Image src={articleImage} alt="Banner Image" layout="fill" objectFit="cover" />
            )}
          </div>
        </div>
  )
}
  export default Banner;