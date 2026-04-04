import Link from 'next/link';

const cases = [
  { name: '2-3t/h wood pellet making line case', url: 'https://macreat.com/product/2-3t-h-wood-pellet-making-line-case/' },
  { name: '4t/h Wood Pellet Production Line Case', url: 'https://macreat.com/product/4t-h-wood-pellet-production-line-case/' },
  { name: '1-1.5t/h Wood Pellet Making Line Case', url: 'https://macreat.com/product/1-1-5t-h-wood-pellet-making-line-case/' },
  { name: '5-6 t/h Wood log pellets production line in Indonesia', url: 'https://macreat.com/product/5-6-t-h-wood-log-pellets-production-line/' },
  { name: '3-4 t/h Wood scraps pellets production line in Indonesia', url: 'https://macreat.com/product/3wood-scraps-pellets-production-line/' },
  { name: '1-1.5 t/h sanding powder pellets production line in Indonesia', url: 'https://macreat.com/product/1-1-5-t-h-sanding-powder-pellets-production-line/' },
  { name: '2-3 t/h peanut shell wood pellet machine line in Hebei', url: 'https://macreat.com/product/2-3-t-h-peanut-shell-wood-pellet-line/' },
  { name: 'Wood Chipper/Crusher LDBX218 working video in our customer\'s factory', url: 'https://macreat.com/product/wood-chipper-crusher-ldbx218/' },
];

export default function Cases() {
  return (
    <section className="cases">
      <div className="section-title">
        <h2>Case</h2>
        <p>To build the first brand of China's biomass wood pellet machinery</p>
      </div>
      <div className="cases-grid">
        {cases.map((caseItem, index) => (
          <Link href={caseItem.url} key={index} className="case-card">
            <div className="case-content">
              <h3>{caseItem.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}