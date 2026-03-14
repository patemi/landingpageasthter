import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import LogoCloud from '@/components/landing/LogoCloud';
import TextRevealSection from '@/components/landing/TextRevealSection';
import StatsSection from '@/components/landing/StatsSection';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import Pricing from '@/components/landing/Pricing';
import Testimonial from '@/components/landing/Testimonial';
import Trust from '@/components/landing/Trust';
import Footer from '@/components/landing/Footer';
import FloatingChatButton from '@/components/landing/FloatingChatButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-base">
      <Navbar />
      <Hero />
      <LogoCloud />
      <TextRevealSection />
      <StatsSection />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonial />
      <Trust />
      <Footer />
      <FloatingChatButton />
    </main>
  );
}
