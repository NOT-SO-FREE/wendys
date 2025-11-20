import AnimatedBackground from '@/components/sections/animated-background';
import CountdownBanner from '@/components/sections/countdown-banner';
import HeroSection from '@/components/sections/hero-section';
import StepsCard from '@/components/sections/steps-card';
import CtaButton from '@/components/sections/cta-button';
import SocialFooter from '@/components/sections/social-footer';

export default function Home() {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden !bg-[#053c25]">
      <AnimatedBackground />
      
      <CountdownBanner />
      
      <main className="relative z-10 max-w-lg mx-auto px-3 py-1.5 md:py-2">
        <HeroSection />
        
        <StepsCard />
        
        <div className="text-center">
          <CtaButton />
        </div>
        
        <SocialFooter />
      </main>
    </div>);

}