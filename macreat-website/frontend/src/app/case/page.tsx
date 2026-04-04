import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case - Macreat Biomass Pellet Machine',
  description: 'Macreat case studies - Successful biomass pellet production line projects worldwide.',
};

export default function CasePage() {
  const cases = [
    { name: '2-3t/h wood pellet making line case', url: 'https://macreat.com/product/2-3t-h-wood-pellet-making-line-case/' },
    { name: '4t/h Wood Pellet Production Line Case', url: 'https://macreat.com/product/4t-h-wood-pellet-production-line-case/' },
    { name: '1-1.5t/h Wood Pellet Making Line Case', url: 'https://macreat.com/product/1-1-5t-h-wood-pellet-making-line-case/' },
    { name: '5-6 t/h Wood log pellets production line in Indonesia', url: 'https://macreat.com/product/5-6-t-h-wood-log-pellets-production-line/' },
    { name: '3-4 t/h Wood scraps pellets production line in Indonesia', url: 'https://macreat.com/product/3wood-scraps-pellets-production-line/' },
    { name: '1-1.5 t/h sanding powder pellets production line in Indonesia', url: 'https://macreat.com/product/1-1-5-t-h-sanding-powder-pellets-production-line/' },
    { name: '2-3 t/h peanut shell wood pellet machine line in Hebei', url: 'https://macreat.com/product/2-3-t-h-peanut-shell-wood-pellet-line/' },
    { name: "Wood Chipper/Crusher LDBX218 working video in our customer's factory", url: 'https://macreat.com/product/wood-chipper-crusher-ldbx218/' },
    { name: 'Bulgaria White Pine wood pellet production line', url: 'https://macreat.com/product/white-pine-woodpellet-production-line/' },
    { name: 'Pellet mill LD720 in Wenzhou', url: 'https://macreat.com/product/pellet-mill-ld720/' },
    { name: 'The last step of the pellet production line is also essential—packaging machine', url: 'https://macreat.com/product/packaging-machine/' },
    { name: 'A packaging machine is indispensable for making and selling pellets', url: 'https://macreat.com/product/a-packaging-machine/' },
    { name: 'There are also leftovers abroad, biomass pellet machines come to help', url: 'https://macreat.com/product/biomass-pellet-machines/' },
    { name: 'Triple-pass dryer, energy saving and more efficient', url: 'https://macreat.com/product/triple-pass-dryer-2/' },
    { name: 'Find a good market for pellets, and expand production', url: 'https://macreat.com/product/find-a-good-market-for-pellets-and-expand-production/' },
    { name: 'How to handle fruit trees and waste wood — how about pelletizing?', url: 'https://macreat.com/product/how-to-handle-fruit-trees-and-waste-wood/' },
    { name: 'The solution to handle wet straw and wet wood chips triple-pass dryer', url: 'https://macreat.com/product/the-solution-to-handle-wet-straw-and-wet-wood-chips-triple-pass-dryer/' },
    { name: 'For processing furniture waste, LDBX216 is recommended', url: 'https://macreat.com/product/for-processing-furniture-waste/' },
    { name: 'Positive references prove that our pellet mill is excellent', url: 'https://macreat.com/product/our-pellet-machine-is-excellent/' },
  ];

  return (
    <main>
      <Header />
      <section className="hero" style={{ padding: '60px 20px' }}>
        <div className="hero-content">
          <h1>CASE</h1>
          <p>To build the first brand of China's biomass wood pellet machinery</p>
        </div>
      </section>
      
      <section className="cases" style={{ padding: '60px 20px' }}>
        <div className="cases-grid">
          {cases.map((caseItem, index) => (
            <a href={caseItem.url} key={index} className="case-card">
              <div className="case-content">
                <h3>{caseItem.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </main>
  );
}