import React from 'react';
import { Snowflake, Star, Sparkles } from 'lucide-react';
import Image from 'next/image';

const AnimatedBackground = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <Snowflake className="absolute top-20 left-10 w-12 h-12 text-[#b0171e] animate-rotate-slow" />
        <Star className="absolute top-40 left-20 w-8 h-8 text-[#b0171e] animate-float-spin" />
        <Sparkles className="absolute top-32 right-16 w-10 h-10 text-[#b0171e] animate-twinkle" />
        <Snowflake className="absolute bottom-40 left-16 w-10 h-10 text-[#b0171e] animate-rotate-reverse" />
        <Star className="absolute bottom-60 right-20 w-12 h-12 text-[#b0171e] animate-float-gentle" />
        <Snowflake className="absolute top-1/2 left-8 w-8 h-8 text-[#b0171e] animate-rotate-slow" />
        <Sparkles className="absolute top-1/3 right-12 w-8 h-8 text-[#b0171e] animate-float-spin" />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
        <Image
          src="/wendys-combo.png"
          alt=""
          width={80}
          height={80}
          className="absolute top-16 left-8 w-20 h-20 object-contain animate-float-gentle"
        />
        <Image
          src="/wendys-fambox.png"
          alt=""
          width={80}
          height={80}
          className="absolute top-44 right-10 w-20 h-20 object-contain animate-float-gentle"
        />
        <Image
          src="/wendys-whattabox.png"
          alt=""
          width={80}
          height={80}
          className="absolute top-1/3 left-24 w-20 h-20 object-contain animate-float-gentle"
        />
        <Image
          src="/wendys-combo.png"
          alt=""
          width={80}
          height={80}
          className="absolute top-1/2 right-16 w-20 h-20 object-contain animate-float-gentle"
        />
        <Image
          src="/wendys-fambox.png"
          alt=""
          width={80}
          height={80}
          className="absolute bottom-48 left-12 w-20 h-20 object-contain animate-float-gentle"
        />
        <Image
          src="/wendys-whattabox.png"
          alt=""
          width={80}
          height={80}
          className="absolute bottom-28 right-24 w-20 h-20 object-contain animate-float-gentle"
        />
      </div>
    </>
  );
};

export default AnimatedBackground;
