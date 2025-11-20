import { Star } from "lucide-react";

const CtaButton = () => {
  return (
    <>
      <a
        href="http://gtly.link/y3KhrTHLMe"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-9 bg-secondary hover:bg-secondary/90 text-foreground font-bold text-xs px-5 py-2 rounded-lg shadow-2xl border-2 border-accent/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-1.5 w-full md:w-auto relative"
        target="_blank"
        rel="noopener noreferrer">
        <Star
          className="w-2.5 h-2.5 mr-1 text-accent animate-pulse"
          fill="currentColor" />

        START REVIEW →
        <Star
          className="w-2.5 h-2.5 ml-1 text-accent animate-pulse"
          fill="currentColor" />
      </a>
      <p className="text-foreground/80 text-[9px] italic mb-2">
        (Instant approval · No purchase required)
      </p>
    </>
  );
};

export default CtaButton;