import React from 'react';
import { Snowflake, Star, Sparkles } from 'lucide-react';
import Image from 'next/image';

const AnimatedBackground = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <Snowflake className="absolute top-20 left-10 w-12 h-12 text-accent animate-rotate-slow" />
        <Star className="absolute top-40 left-20 w-8 h-8 text-accent animate-float-spin" />
        <Sparkles className="absolute top-32 right-16 w-10 h-10 text-accent animate-twinkle" />
        <Snowflake className="absolute bottom-40 left-16 w-10 h-10 text-accent animate-rotate-reverse" />
        <Star className="absolute bottom-60 right-20 w-12 h-12 text-accent animate-float-gentle" />
        <Snowflake className="absolute top-1/2 left-8 w-8 h-8 text-accent animate-rotate-slow" />
        <Sparkles className="absolute top-1/3 right-12 w-8 h-8 text-accent animate-float-spin" />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d864f204-e1ba-40f7-aac1-205adffe8fde-bucksxmas-com/assets/images/decor-1-Caaj0E8W-1.png"
          alt=""
          width={80}
          height={80}
          className="absolute top-24 left-12 w-20 h-20 object-contain animate-float-gentle"
        />
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d864f204-e1ba-40f7-aac1-205adffe8fde-bucksxmas-com/assets/images/decor-2-CetU2CYt-2.png"
          alt=""
          width={80}
          height={80}
          className="absolute top-32 right-16 w-20 h-20 object-contain animate-float-gentle"
        />
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d864f204-e1ba-40f7-aac1-205adffe8fde-bucksxmas-com/assets/images/decor-3-BvvZHxFy-3.png"
          alt=""
          width={80}
          height={80}
          className="absolute top-1/3 left-20 w-20 h-20 object-contain animate-float-gentle"
        />
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d864f204-e1ba-40f7-aac1-205adffe8fde-bucksxmas-com/assets/images/decor-4-DPsKH9Qd-4.png"
          alt=""
          width={80}
          height={80}
          className="absolute top-1/2 right-24 w-20 h-20 object-contain animate-float-gentle"
        />
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d864f204-e1ba-40f7-aac1-205adffe8fde-bucksxmas-com/assets/images/decor-5-Bu5L8UkG-5.png"
          alt=""
          width={80}
          height={80}
          className="absolute bottom-40 left-16 w-20 h-20 object-contain animate-float-gentle"
        />
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d864f204-e1ba-40f7-aac1-205adffe8fde-bucksxmas-com/assets/images/decor-6-DHDn4Wgt-6.png"
          alt=""
          width={80}
          height={80}
          className="absolute bottom-32 right-20 w-20 h-20 object-contain animate-float-gentle"
        />
      </div>
    </>
  );
};

export default AnimatedBackground;