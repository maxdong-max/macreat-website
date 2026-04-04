import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Worldwide Distributors Recruitment!</h1>
        <p>
          Founded in 1960, Macreat is a leading manufacturer and supplier of pellet machines. 
          Manufacturer of solutions for pellet machines. As a technology-driven company, we integrate 
          design, research and development, manufacturing, and sales to deliver innovative pellet 
          machine solutions that meet global market demands.
        </p>
        <div className="hero-buttons">
          <a href="https://api.whatsapp.com/send?phone=8618615207548" className="btn btn-primary">
            Contact Us Now
          </a>
          <Link href="/become-our-dealer" className="btn btn-secondary">
            Become Our Dealer
          </Link>
        </div>
        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '40px' }}>
          <div>
            <strong>R&D and production</strong>
          </div>
          <div>
            <strong>Factory direct sales</strong>
          </div>
          <div>
            <strong>Professional Certification</strong>
          </div>
        </div>
      </div>
    </section>
  );
}