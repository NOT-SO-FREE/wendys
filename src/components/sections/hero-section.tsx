import Image from 'next/image';
import { Gift, Sparkles, Snowflake, Star } from 'lucide-react';
import McDonaldsGiftCard from './McDonaldsGiftCard';

const HeroSection = () => {
  return (
    <div className="max-w-lg mx-auto text-center">
      <div className="mb-1.5 flex flex-col items-center">
        <div className="w-8 h-8 mb-0.5">
          <Image
            src="/mcdo-logo-m.png"
            alt="McDonald's Logo"
            width={32}
            height={32}
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>
      </div>

      <div className="relative mb-1.5 animate-float-gentle">
        <div className="relative inline-block">
          <McDonaldsGiftCard />

          <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent blur-3xl -z-10"></div>
        </div>
      </div>

      <h1 className="text-lg md:text-xl font-bold text-foreground mb-1.5 text-shadow-glow px-2 relative">
        <Star className="w-2.5 h-2.5 text-accent absolute -top-0.5 left-3 animate-pulse" />
        Unlock
        <span className="inline-flex items-center gap-1 !text-[#f01010]">
          McDonald's Gift Card
          <Gift className="w-4 h-4 inline-block !text-[#db1311]" />
        </span>
        <br />
        for Free
        <Snowflake className="w-2.5 h-2.5 text-white/60 absolute -bottom-0.5 right-3 animate-pulse" />
      </h1>

      <p className="text-xs md:text-sm text-foreground/95 mb-2 font-medium text-shadow-strong px-2 relative">
        <Sparkles className="w-2.5 h-2.5 text-accent inline-block mr-1 animate-pulse" />
        Here's how to claim your free{' '}
        <span
          className="font-bold !w-[148px] !h-[17px]"
          style={{ color: 'hsl(40 60% 65%)' }}
        >
          $100 holiday gift card
        </span>
        <Sparkles className="w-2.5 h-2.5 text-accent inline-block ml-1 animate-pulse" />
      </p>
    </div>
  );
};

export default HeroSection;
