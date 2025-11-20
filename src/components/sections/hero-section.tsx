import Image from 'next/image';
import { Gift, Sparkles, Snowflake, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="max-w-lg mx-auto text-center">
      <div className="mb-1.5 flex flex-col items-center">
        <div className="w-8 h-8 mb-0.5">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d864f204-e1ba-40f7-aac1-205adffe8fde-bucksxmas-com/assets/icons/starbucks-official-logo-CM364OBT-1.png"
            alt="Starbucks Logo"
            width={32}
            height={32}
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>
        <div className="w-32 md:w-40 mx-auto">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d864f204-e1ba-40f7-aac1-205adffe8fde-bucksxmas-com/assets/images/starbucks-wordmark-DSD0xIk9-7.png"
            alt="STARBUCKS"
            width={160}
            height={35}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="relative mb-1.5 animate-float">
        <div className="relative inline-block">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d864f204-e1ba-40f7-aac1-205adffe8fde-bucksxmas-com/assets/images/bearista-cup-2hsPN7LX-8.png"
            alt="Bearista Holiday Cup"
            width={96}
            height={145}
            className="w-20 md:w-24 h-auto mx-auto drop-shadow-2xl relative z-10"
          />
          <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent blur-3xl -z-10"></div>
        </div>
      </div>

      <h1 className="text-lg md:text-xl font-bold text-foreground mb-1.5 text-shadow-glow px-2 relative">
        <Star className="w-2.5 h-2.5 text-accent absolute -top-0.5 left-3 animate-pulse" />
        Claim Your{' '}
        <span className="text-secondary inline-flex items-center gap-1">
          Bearista Cup
          <Gift className="w-4 h-4 text-secondary inline-block" />
        </span>
        <br />
        for Free
        <Snowflake className="w-2.5 h-2.5 text-white/60 absolute -bottom-0.5 right-3 animate-pulse" />
      </h1>

      <p className="text-xs md:text-sm text-foreground/95 mb-2 font-medium text-shadow-strong px-2 relative">
        <Sparkles className="w-2.5 h-2.5 text-accent inline-block mr-1 animate-pulse" />
        Here's how to claim your free{' '}
        <span className="text-accent font-bold">$100 holiday gift card</span>
        <Sparkles className="w-2.5 h-2.5 text-accent inline-block ml-1 animate-pulse" />
      </p>
    </div>
  );
};

export default HeroSection;