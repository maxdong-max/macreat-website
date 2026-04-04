import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Machines - Macreat Biomass Pellet Machine',
  description: 'Macreat is a professional pellet mill manufacturer. Main products: biomass pellet mill, woodchip crusher, dryer series, cooler series and other auxiliary equipment.',
};

export default function MachinesPage() {
  const products = [
    { name: 'Biomass Pellet Machine LD700C', specs: 'LD700C 110-132kw 1.5-2T/H', url: '/product/biomass-pellet-machine/' },
    { name: 'Hydraulic Crusher / Wood Chipper LDZPH1300-600', specs: 'LDZPH 7.5KW 10-15T/H', url: '/product/hydraulic-crusher-ldzph1300-600/' },
    { name: 'Drum Wood Chipper', specs: 'LDBX 55-710KW 6-60T/H', url: '/product/drum-wood-chipper/' },
    { name: 'High Efficiency Hammer Mill', specs: 'GXP 55-250KW 1-60T/H', url: '/product/hammer-mill/' },
    { name: 'Cooler Machine', specs: 'LQC 7.5-30KW 1.5-12T/H', url: '/product/cooler-machine/' },
    { name: 'Triple Pass Biomass Pellet Dryer', specs: 'LDSG 3-4KW 1-6T/H', url: '/product/triple-pass-dryer/' },
    { name: 'Packing Machine', specs: 'LDPM 20-2000kg 10-40bags/hour', url: '/product/packing-machine/' },
    { name: 'Biomass Pellet Machine LD720', specs: 'LD720 110-250KW 1-4T/H', url: '/product/pellet-machine/' },
    { name: 'Biomass Pellet Machine LD850', specs: 'LD850 220-280KW 3-4T/H', url: '/product/biomass-pellet-machine-ld850/' },
    { name: 'Biomass Pellet Machine LD560D', specs: 'LD560D 110-250KW 3-4T/H', url: '/product/biomass-pellet-machine-ld560d/' },
    { name: '1-1.5T/H Pellet Production Line', specs: '200-300kwh 1-1.5T/H', url: '/product/1-1-5t-h-pellet-production-line/' },
    { name: '3-4T/H Pellet Production Line', specs: '350-400kwh 3-4T/H', url: '/product/3-4t-h-pellet-production-line/' },
  ];

  const categories = [
    { name: 'Pellet Production Line Series', url: '/machine/products/pellet-production-line-series/' },
    { name: 'Pellet Machine Series', url: '/machine/products/pelletizing-series/' },
    { name: 'Hammer Mill Series', url: '/machine/products/hammer-mill/' },
    { name: 'Crushing Series', url: '/machine/products/crushing-series/' },
    { name: 'Drying Series', url: '/machine/products/drying-series/' },
    { name: 'Auxiliary Equipment Series', url: '/machine/products/auxiliary-equipment-series/' },
    { name: 'Spare Parts Series', url: '/machine/products/spare-parts-series/' },
  ];

  const sidebarLinks = [
    { name: 'Biomass Pellet Line', url: 'https://macreat.com/solution/biomass-pellet-line/' },
    { name: 'Furniture Scraps Pellet Production Solution', url: 'https://macreat.com/solution/furniture-scraps-pellet-production-solution/' },
    { name: 'Palm EFB Pellet production line', url: 'https://macreat.com/solution/palm-efb-pellet-production-line/' },
    { name: 'Peanut shell pelletizing solution', url: 'https://macreat.com/solution/peanut-shell-pelletizing-solution/' },
    { name: 'Plywood Waste Pellet Making Solution', url: 'https://macreat.com/solution/plywood-waste-pellet-making-solution/' },
    { name: 'Biomass Fuel Pellet Production with Rice Husk', url: 'https://macreat.com/solution/biomass-fuel-pellet-production-with-rice-husk/' },
  ];

  return (
    <main>
      <Header />
      <section className="hero" style={{ padding: '60px 20px' }}>
        <div className="hero-content">
          <h1>Machines</h1>
          <p>Macreat is a professional pellet mill manufacturer, the main products are biomass pellet mill, woodchip crusher, dryer series, cooler series and other auxiliary equipment.</p>
        </div>
      </section>
      
      <section className="solutions" style={{ padding: '60px 20px' }}>
        <div className="solutions-grid">
          {products.map((product, index) => (
            <a href={product.url} key={index} className="product-card">
              <h3>{product.name}</h3>
              <p className="specs">{product.specs}</p>
            </a>
          ))}
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </main>
  );
}