import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top-content">
          <div className="header-social">
            <a href="https://api.whatsapp.com/send?phone=8618615207548" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="mailto:pellet@macreat.com">
              Email
            </a>
            <a href="https://www.facebook.com/macreatpellet/" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://x.com/MacreatBiomass" target="_blank" rel="noopener noreferrer">
              X (Twitter)
            </a>
            <a href="https://www.youtube.com/@macreatpelletmill2327/" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
            <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fwoodpelletmill%2F&is_from_rle" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
          <div className="header-lang">
            <span>English▼</span>
          </div>
        </div>
      </div>
      <div className="header-main">
        <Link href="/" className="logo">
          <span className="logo-text">Macreat Biomass Pellet Machine Solution</span>
        </Link>
        <nav className="nav-menu">
          <Link href="/">Home</Link>
          <Link href="/solution">Solution</Link>
          <Link href="/machine/products">Machines</Link>
          <Link href="/case">Case</Link>
          <Link href="/become-our-dealer">Become Our Dealer</Link>
          <Link href="/news">NEWS</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}