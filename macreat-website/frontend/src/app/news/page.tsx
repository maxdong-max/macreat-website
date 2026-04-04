import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News - Macreat Biomass Pellet Machine',
  description: 'Latest news and updates from Macreat - Trade shows, product launches, and industry insights.',
};

export default function NewsPage() {
  const newsItems = [
    {
      title: 'MACREAT Makes Dual-Expo Debut in Thailand & Vietnam',
      date: 'March 25, 2026',
      excerpt: 'MACREAT Makes a Simultaneous Debut at Two Major Exhibitions in Bangkok, Thailand, and Ho Chi Minh City, Vietnam...',
      url: 'https://macreat.com/macreat-makes-dual-expo-debut-in-thailand-vietnam/',
    },
    {
      title: 'MACREAT Welcomes You at BBBSAF-AETD 2026 Vietnam – Booth W12',
      date: '2026',
      excerpt: 'Welcome to the Biogas, Biomass, Bioenergy & Biofuels SAF Asia Summit 2026! This marks Southeast Asia\'s premier professional gathering dedicated...',
      url: 'https://macreat.com/macreat-welcomes-you-at-bbbsaf-aetd-2026-vietnam-booth-w12/',
    },
    {
      title: 'MACREAT Cordially Invites You to the 2026 ASEAN Biomass Energy Expo',
      date: '2026',
      excerpt: 'As the global energy transition continues to deepen, biomass energy—a clean, efficient, and renewable form of energy—is embracing unprecedented opportunities...',
      url: 'https://macreat.com/macreat-cordially-invites-you-to-the-2026-asean-biomass-energy-expo/',
    },
    {
      title: 'MACREAT at 2025 Indonesia Wood & Forestry Expo',
      date: '2025',
      excerpt: 'Join us at the Indonesia Wood & Forestry Expo to discover our latest biomass pellet solutions...',
      url: 'https://macreat.com/2025-indonesia-wood-forestry-expo/',
    },
    {
      title: 'New Model LD850 Biomass Pellet Machine Launch',
      date: '2025',
      excerpt: 'We are excited to announce the launch of our new LD850 biomass pellet machine with higher capacity...',
      url: 'https://macreat.com/new-ld850-pellet-machine/',
    },
    {
      title: 'MACREAT Expands to European Market',
      date: '2024',
      excerpt: 'MACREAT is proud to announce our expansion into the European market with new distributors...',
      url: 'https://macreat.com/macreat-expands-europe/',
    },
  ];

  const events = [
    { name: 'BBBSAF-AETD 2026 Vietnam', date: '2026', location: 'Ho Chi Minh City, Vietnam', booth: 'Booth W12' },
    { name: 'ASEAN Biomass Energy Expo 2026', date: '2026', location: 'Bangkok, Thailand', booth: 'TBD' },
    { name: 'Thailand International Trade Fair', date: 'March 2026', location: 'Bangkok, Thailand', booth: 'TBD' },
  ];

  return (
    <main>
      <Header />
      <section className="hero" style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)' }}>
        <div className="hero-content">
          <h1 style={{ color: '#fff' }}>NEWS</h1>
          <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto' }}>
            Professional Design And Technical Team Scheme For You
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section style={{ padding: '60px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '30px', textAlign: 'center' }}>Upcoming Exhibitions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {events.map((event, index) => (
              <div key={index} style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#1a1a1a' }}>{event.name}</h3>
                <p style={{ color: '#4CAF50', fontWeight: 'bold', marginBottom: '10px' }}>{event.date}</p>
                <p style={{ color: '#555', marginBottom: '5px' }}>📍 {event.location}</p>
                <p style={{ color: '#555' }}>🏠 {event.booth}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '30px', textAlign: 'center' }}>Latest News</h2>
        <div style={{ display: 'grid', gap: '30px' }}>
          {newsItems.map((news, index) => (
            <article key={index} style={{ display: 'flex', gap: '30px', padding: '30px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>
                  <a href={news.url} style={{ color: '#1a1a1a', transition: 'color 0.3s' }}>
                    {news.title}
                  </a>
                </h3>
                <p style={{ color: '#4CAF50', fontWeight: 'bold', marginBottom: '10px' }}>{news.date}</p>
                <p style={{ color: '#555', lineHeight: '1.6' }}>{news.excerpt}</p>
                <a 
                  href={news.url}
                  style={{ 
                    display: 'inline-block', 
                    marginTop: '15px', 
                    color: '#4CAF50', 
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                  }}
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ padding: '60px 20px', background: '#1a1a1a', color: '#fff' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Subscribe to Our Newsletter</h2>
          <p style={{ marginBottom: '30px', color: '#ccc' }}>
            Stay updated with the latest news, exhibitions, and product updates from MACREAT
          </p>
          <form style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input 
              type="email" 
              placeholder="Your Email"
              style={{ padding: '15px', borderRadius: '5px', border: 'none', flex: '1 1 300px', maxWidth: '400px' }}
            />
            <button 
              type="submit"
              style={{ 
                padding: '15px 30px', 
                background: '#4CAF50', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '5px', 
                fontSize: '16px', 
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}