import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Macreat Biomass Pellet Machine',
  description: 'Founded in 1960, Macreat is a leading manufacturer and supplier of pellet machines and biomass energy equipment.',
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <section className="hero" style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)' }}>
        <div className="hero-content">
          <h1 style={{ color: '#fff' }}>ABOUT MACREAT</h1>
          <p style={{ color: '#ccc', maxWidth: '800px', margin: '0 auto' }}>
            Founded in 1960, Macreat is a leading manufacturer and supplier of pellet machines and biomass energy equipment. 
            As a technology-driven enterprise, we integrate design, R&D, manufacturing, and sales to deliver innovative 
            and reliable solutions for the renewable energy industry.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a' }}>Our Story</h2>
            <p style={{ lineHeight: '1.8', color: '#555' }}>
              Macreat operates as a specialized group enterprise, dedicated to advancing biomass energy technology 
              and providing high-quality equipment that supports sustainable development worldwide. With over 62 years 
              of professional production experience, we have established ourselves as a trusted name in the biomass 
              pellet machine industry.
            </p>
            <p style={{ lineHeight: '1.8', color: '#555', marginTop: '15px' }}>
              Our core products include: Pellet Mills, Hammer Mills, Auxiliary Equipment, Crushing Machine, 
              Pellet drying Machine, Pellet-production Line, Pelletizing Machine, and more.
            </p>
          </div>
          
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a' }}>Why Choose Us</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                '62 YEARS Professional Production Experience',
                'Professional Design And Technical Team',
                'Factory Direct Sales',
                'R&D and Production',
                'Professional Certification',
                'Global Market Presence'
              ].map((item, index) => (
                <li key={index} style={{ padding: '10px 0', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#4CAF50', marginRight: '10px' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '30px' }}>Our Certifications</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ width: '100px', height: '100px', background: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <span style={{ fontSize: '40px' }}>🏭</span>
              </div>
              <strong>ISO 9001</strong>
              <p style={{ color: '#777', fontSize: '14px' }}>Quality Management</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ width: '100px', height: '100px', background: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <span style={{ fontSize: '40px' }}>🌿</span>
              </div>
              <strong>CE Certified</strong>
              <p style={{ color: '#777', fontSize: '14px' }}>Environmental Safety</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ width: '100px', height: '100px', background: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <span style={{ fontSize: '40px' }}>🔧</span>
              </div>
              <strong>SGS Verified</strong>
              <p style={{ color: '#777', fontSize: '14px' }}>Product Testing</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '30px', textAlign: 'center' }}>Global Presence</h2>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px', color: '#555' }}>
          Macreat has successfully delivered pellet production lines to customers worldwide, including 
          Indonesia, Thailand, Vietnam, Bulgaria, and many other countries. Our solutions are trusted 
          by businesses across the globe.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          {['Indonesia', 'Thailand', 'Vietnam', 'Bulgaria', 'USA', 'Germany'].map((country, index) => (
            <div key={index} style={{ padding: '15px 30px', background: '#f5f5f5', borderRadius: '5px', fontWeight: '500' }}>
              {country}
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}