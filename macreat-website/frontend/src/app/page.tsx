import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Materials from '@/components/Materials';
import Solutions from '@/components/Solutions';
import Products from '@/components/Products';
import Cases from '@/components/Cases';
import News from '@/components/News';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Materials />
      <Solutions />
      <Products />
      <Cases />
      <News />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  );
}