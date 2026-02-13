import { Linkedin, Facebook, Instagram } from 'lucide-react';

const SocialFooter = () => {
  return (
    <>
      <div className="flex justify-center gap-1.5 mb-2">
        <a
          href="https://www.linkedin.com/company/wendys-international"
          aria-label="LinkedIn"
          className="w-7 h-7 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl !bg-[#b0171e]"
        >
          <Linkedin className="w-3 h-3 text-foreground" />
        </a>
        <a
          href="https://www.facebook.com/wendys"
          aria-label="Facebook"
          className="w-7 h-7 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl !bg-[#b0171e]"
        >
          <Facebook className="w-3 h-3 text-foreground" />
        </a>
        <a
          href="https://www.instagram.com/wendys/?hl=en"
          aria-label="Instagram"
          className="w-7 h-7 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl !bg-[#b0171e]"
        >
          <Instagram className="text-foreground !w-3 !h-3" />
        </a>
      </div>
      <footer className="text-black text-[9px]">
        <p className="!text-center !m-0 !p-0">© 2025</p>
        <p className="!text-center">All rights reserved</p>
        <p className="!text-center !mt-12 !px-4 text-gray-500 text-[7px] leading-tight">
          This independent reward program is not sponsored, endorsed, or administered by Wendy&apos;s or Wendy&apos;s International, LLC. All brand names and logos are trademarks of their respective owners.
        </p>
      </footer>
    </>
  );
};

export default SocialFooter;
