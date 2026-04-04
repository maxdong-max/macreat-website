import Link from 'next/link';

const materials = [
  { name: 'Wood Waste', url: '/solution/biomass-pellet-line/' },
  { name: 'Wood Chips/Sawdust', url: '/solution/wood-pellet-mill-production-line/' },
  { name: 'Straw Waste', url: '/solution/straw-pelletizing-production-line/' },
  { name: 'Rice Husk', url: '/solution/biomass-fuel-pellet-production-with-rice-husk/' },
  { name: 'Animal Feed', url: '/product/fully-automatic-feed-pellet-production-line/' },
  { name: 'Palm Shell', url: '/solution/palm-efb-pellet-production-line/' },
];

export default function Materials() {
  return (
    <section className="materials">
      <div className="section-title">
        <h2>Our pellet machine work for a wide variety of materials</h2>
        <p>Please provide raw materials and output requirements, and we will provide a biomass pellet production solution</p>
      </div>
      <div className="materials-grid">
        {materials.map((item, index) => (
          <Link href={item.url} key={index} className="material-item">
            <h3>{item.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}