import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h3>Biomass Pellet Line Solution</h3>
          <ul>
            <li><Link href="https://macreat.com/solution/biomass-pellet-line/">Biomass Pellet Line</Link></li>
            <li><Link href="https://macreat.com/solution/furniture-scraps-pellet-production-solution/">Furniture Scraps Pellet Production Solution</Link></li>
            <li><Link href="https://macreat.com/solution/palm-efb-pellet-production-line/">Palm EFB Pellet production line</Link></li>
            <li><Link href="https://macreat.com/solution/peanut-shell-pelletizing-solution/">Peanut shell pelletizing solution</Link></li>
            <li><Link href="https://macreat.com/solution/plywood-waste-pellet-making-solution/">Plywood Waste Pellet Making Solution</Link></li>
            <li><Link href="https://macreat.com/solution/biomass-fuel-pellet-production-with-rice-husk/">Biomass Fuel Pellet Production with Rice Husk</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Pellet Production Line</h3>
          <ul>
            <li><Link href="https://macreat.com/product/1-1-5-t-h-sanding-powder-pellets-production-line/">1-1.5 t/h sanding powder pellets production line in Indonesia</Link></li>
            <li><Link href="https://macreat.com/product/1-1-5t-h-pellet-production-line/">1-1.5T/H Pellet Production Line</Link></li>
            <li><Link href="https://macreat.com/product/2-3-t-h-peanut-shell-wood-pellet-line/">2-3 t/h peanut shell wood pellet machine line in Hebei</Link></li>
            <li><Link href="https://macreat.com/product/4t-h-wood-pellet-production-line-case/">4t/h Wood Pellet Production Line Case</Link></li>
            <li><Link href="https://macreat.com/product/5-6-t-h-wood-log-pellets-production-line/">5-6 t/h Wood log pellets production line in Indonesia</Link></li>
            <li><Link href="https://macreat.com/product/8-12t-h-pellet-production-line/">8-12T/H Pellet Production Line</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Copyright © 2026 - Macreat Biomass Pellet Machine Manufacturer</p>
        <p>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </p>
      </div>
      
      <div className="floating-buttons">
        <a href="https://api.whatsapp.com/send?phone=8618615207548" className="floating-btn whatsapp-btn">
          <span>WhatsApp</span>
        </a>
        <a href="#message" className="floating-btn quote-btn">
          <span>Get A Quote Now</span>
        </a>
      </div>
    </footer>
  );
}