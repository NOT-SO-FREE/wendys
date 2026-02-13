import Image from 'next/image';
import React from 'react';

const McDonaldsGiftCard = () => {
  return (
    <>
      <div className="flex items-center justify-center p-6">
        <div className="relative w-80 h-[201.5px]">
          <Image
            src="/wendys-giftcard.png"
            alt="Wendy's Gift Card"
            fill
            className="object-contain drop-shadow-2xl rounded-[5rem]"
          />
        </div>
      </div>
    </>
  );
};

export default McDonaldsGiftCard;
