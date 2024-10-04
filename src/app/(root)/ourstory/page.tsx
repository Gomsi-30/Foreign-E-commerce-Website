import Banner from '../_components/global/banner'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Story",
};
const OurStory = ()=> {
   return (
     <div className='flex flex-col gap-[60px] mt-[-30px]'>
         <Banner />
         <div className='container px-6 sm:px-[50px] md:px-[120px] lg:px-[187px] flex flex-col gap-[50px]'>
         <div className='flex flex-col gap-2'>
             <h1 className='text-2xl font-bold'>Our Story</h1>
             <p className='text-md leading-7 font-regular'>
                With that philosophy, we started off what&apos;s known as Tarinika. We  boast ourselves as producers of some of the best jewelry experiences  around the globe by only letting the finest and utmost unique designs  become part of our collection.

                We review our offerings every few months to ensure that you never  have to go out of trend and that you can rely on us as your Jewelry  partner for life. We make sure that every piece of our jewelry emanates a  story that is all about you and your emotions.

                Tarinika now has its store operations in India and USA and is  accompanied by the global online presence of its crafty collection. We  do guarantee worldwide delivery on orders of all sizes.
            </p>
         </div>
         <div className='flex flex-col gap-2'>
             <h1 className='text-2xl font-bold'>How it all started?</h1>
             <p className='text-md leading-7 font-regular'>
                Originating from a family of traditional jewelers, we know our craft  from the heart and take great pride in noticing people adore our  jewelry. Having experienced a wide appreciation for our unique  selections in India, we wanted to reach out to the extended audience in  the United States and globally.

                We begin our journey by participating in The International Gem and  Jewelry Show organized every week throughout the United States. It was  in these shows organized by Intergem that we realized that the love for  Indian jewelry is global. We were fascinated by the amazing customer  response and their affection for our designs.

                It&apos;s been years that we have been doing the Intergem shows with an ever-increasing customer base.
                Today, we bring you the same collection online and in many local  shows around you. Subscribe to our newsletter to get notified when we  are in your neighborhood!
            </p>
         </div>
        </div>
     </div>
   )
}

export default OurStory;