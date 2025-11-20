import { Linkedin, Facebook, Instagram } from 'lucide-react';

const SocialFooter = () => {
  return (
    <>
      <div className="flex justify-center gap-1.5 mb-2">
        <a
          href="https://www.linkedin.com/company/starbucks"
          aria-label="LinkedIn"
          className="w-7 h-7 bg-secondary hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl">

          <Linkedin className="w-3 h-3 text-foreground" />
        </a>
        <a
          href="https://www.facebook.com/Starbucks/"
          aria-label="Facebook"
          className="w-7 h-7 bg-secondary hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl">

          <Facebook className="w-3 h-3 text-foreground" />
        </a>
        <a
          href="https://www.instagram.com/starbucks/"
          aria-label="Instagram"
          className="w-7 h-7 bg-secondary hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl">

          <Instagram className="w-3 h-3 text-foreground" />
        </a>
      </div>
      <footer className="text-foreground/70 text-[9px]">
        <p className="!text-center">© 2025</p>
        <p className="!text-center">All rights reserved</p>
      </footer>
    </>);

};

export default SocialFooter;