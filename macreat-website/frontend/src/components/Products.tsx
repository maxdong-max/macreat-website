import Link from 'next/link';

const products = [
  { name: 'Biomass Pellet Machine LD700C', specs: 'LD700C 110-132kw 1.5-2T/H', url: '/product/biomass-pellet-machine/' },
  { name: 'Hydraulic Crusher LDZPH1300-600', specs: 'LDZPH 7.5KW 10-15T/H', url: '/product/hydraulic-crusher-ldzph1300-600/' },
  { name: 'Drum Wood Chipper', specs: 'LDBX 55-710KW 6-60T/H', url: '/product/biomass-pellet-machine/' },
  { name: 'High Efficiency Hammer Mill', specs: 'GXP 55-250KW 1-60T/H', url: '/product/hammer-mill/' },
  { name: 'Biomass Pellet Machine', specs: 'RH&RV 11-110KW 0.15-1.2T/H', url: '/product/pellet-mill-rh-and-rv-series/' },
  { name: 'Cooler Machine', specs: 'LQC 7.5-30KW 1.5-12T/H', url: '/product/cooler-machine/' },
  { name: 'Triple Pass Biomass Pellet Dryer', specs: 'LDSG 3-4KW 1-6T/H', url: '/product/triple-pass-dryer/' },
  { name: 'Packing Machine', specs: 'LDPM 20-2000kg 10-40bags/hour', url: '/product/packing-machine/' },
];

export default function Products() {
  return (
    <section className="products">
      <div className="section-title">
        <h2>Product</h2>
        <p>62 YEARS Professional Production Experience, Professional Design And Technical Team Scheme For You</p>
      </div>
      <div className="products-grid">
        {products.map((product, index) => (
          <Link href={product.url} key={index} className="product-card">
            <h3>{product.name}</h3>
            <p className="specs">{product.specs}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}