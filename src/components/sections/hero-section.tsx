import Image from 'next/image';
import { Gift, Sparkles, Snowflake, Star } from 'lucide-react';
import McDonaldsGiftCard from './McDonaldsGiftCard';

const HeroSection = () => {
  return (
    <div className="max-w-lg mx-auto text-center">
        <div className="mb-0 flex flex-col items-center -mt-8">
            <div className="w-32 h-32 mb-0">
              <Image
                src="/wendys-logo.png"
                alt="Wendy's Logo"
                width={128}
                height={128}
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>
      </div>

      <div className="relative mb-0 -mt-14 animate-float-gentle">
        <div className="relative inline-block">
          <McDonaldsGiftCard />

          <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent blur-3xl -z-10"></div>
        </div>
      </div>

      <h1 className="text-lg md:text-xl font-bold text-black mb-1.5  px-2 relative -mt-4">
        <Star className="w-2.5 h-2.5 text-[#b0171e] absolute -top-0.5 left-3 animate-pulse" />
        Unlock{' '}
        <span className="inline-flex items-center gap-1 !text-[#b0171e]">
          Wendy's Rewards
          <Gift className="w-4 h-4 inline-block !text-[#b0171e]" />
        </span>
        <Snowflake className="w-2.5 h-2.5 text-[#b0171e] absolute -bottom-0.5 right-3 animate-pulse" />
      </h1>

      <p className="text-xs md:text-sm text-black mb-2 font-medium  px-2 relative">
        <Sparkles className="w-2.5 h-2.5 text-[#b0171e] inline-block mr-1 animate-pulse" />
        Here's how to claim your{' '}
        <span
          className="font-bold !w-[148px] !h-[17px]"
          style={{ color: 'hsl(357.25deg 76.88% 39.02%)' }}
        >
          $500 Gift Card
        </span>
        <Sparkles className="w-2.5 h-2.5 text-[#b0171e] inline-block ml-1 animate-pulse" />
      </p>
    </div>
  );
};

export default HeroSection;
