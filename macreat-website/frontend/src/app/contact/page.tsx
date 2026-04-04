import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Macreat Biomass Pellet Machine',
  description: 'Contact Macreat for pellet machine solutions. WhatsApp: +86-18615207548, Email: pellet@macreat.com',
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section className="hero" style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)' }}>
        <div className="hero-content">
          <h1 style={{ color: '#fff' }}>Contact Us</h1>
          <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto' }}>
            Get in touch with us for professional biomass pellet machine solutions
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {/* Contact Info */}
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '30px' }}>Get In Touch</h2>
            
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '24px' }}>📱</span> WhatsApp
              </h3>
              <a 
                href="https://api.whatsapp.com/send?phone=8618615207548" 
                style={{ color: '#4CAF50', fontSize: '18px', fontWeight: 'bold' }}
              >
                +86-18615207548
              </a>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '24px' }}>✉️</span> Email
              </h3>
              <a 
                href="mailto:pellet@macreat.com" 
                style={{ color: '#1a1a1a', fontSize: '16px' }}
              >
                pellet@macreat.com
              </a>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '24px' }}>📞</span> Phone
              </h3>
              <a 
                href="tel:+86-18615207548" 
                style={{ color: '#1a1a1a', fontSize: '16px' }}
              >
                +86-18615207548
              </a>
            </div>

            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Follow Us</h3>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a 
                  href="https://www.facebook.com/macreatpellet" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: '10px 20px', background: '#1877F2', color: '#fff', borderRadius: '5px' }}
                >
                  Facebook
                </a>
                <a 
                  href="https://twitter.com/macreatmachine" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: '10px 20px', background: '#1DA1F2', color: '#fff', borderRadius: '5px' }}
                >
                  Twitter
                </a>
                <a 
                  href="https://www.youtube.com/@macreatpelletmill2327" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: '10px 20px', background: '#FF0000', color: '#fff', borderRadius: '5px' }}
                >
                  YouTube
                </a>
                <a 
                  href="https://www.instagram.com/woodpelletmill/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: '10px 20px', background: '#E4405F', color: '#fff', borderRadius: '5px' }}
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: '#f9f9f9', padding: '40px', borderRadius: '10px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '30px' }}>Send a Message</h2>
            <form>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Name *</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email *</label>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>WhatsApp/Phone *</label>
                  <input 
                    type="text" 
                    placeholder="WhatsApp or Phone"
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Country *</label>
                  <input 
                    type="text" 
                    placeholder="Your Country"
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Your Message *</label>
                <textarea 
                  placeholder="* Please let us know more details if possible. What are raw materials? Which machine do you want? And We can receive an accurate quotation."
                  rows={5}
                  style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px', resize: 'vertical' }}
                />
              </div>

              <button 
                type="submit"
                style={{ 
                  width: '100%', 
                  padding: '15px', 
                  background: '#4CAF50', 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '5px', 
                  fontSize: '18px', 
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background 0.3s'
                }}
              >
                Get A Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 20px', background: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Factory Location</h2>
          <p style={{ color: '#555', marginBottom: '20px' }}>
            We welcome you to visit our factory. Please contact us in advance to schedule an appointment.
          </p>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', display: 'inline-block' }}>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>
              <strong>Address:</strong> [Factory Address in China]
            </p>
            <p style={{ fontSize: '16px' }}>
              <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (GMT+8)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}