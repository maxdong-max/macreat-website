import Link from 'next/link';

const news = [
  {
    title: 'MACREAT Makes Dual-Expo Debut in Thailand & Vietnam',
    date: 'March 25',
    excerpt: 'MACREAT Makes a Simultaneous Debut at Two Major Exhibitions in Bangkok, Thailand, and Ho Chi Minh City, Vietnam...',
    url: 'https://macreat.com/macreat-makes-dual-expo-debut-in-thailand-vietnam/',
  },
  {
    title: 'MACREAT Welcomes You at BBBSAF-AETD 2026 Vietnam – Booth W12',
    date: '',
    excerpt: 'Welcome to the Biogas, Biomass, Bioenergy & Biofuels SAF Asia Summit 2026! This marks Southeast Asia\'s premier professional gathering dedicated...',
    url: 'https://macreat.com/macreat-welcomes-you-at-bbbsaf-aetd-2026-vietnam-booth-w12/',
  },
  {
    title: 'MACREAT Cordially Invites You to the 2026 ASEAN Biomass Energy Expo',
    date: '',
    excerpt: 'As the global energy transition continues to deepen, biomass energy—a clean, efficient, and renewable form of energy—is embracing unprecedented opportunities...',
    url: 'https://macreat.com/macreat-cordially-invites-you-to-the-2026-asean-biomass-energy-expo/',
  },
];

export default function News() {
  return (
    <section className="news">
      <div className="section-title">
        <h2>News</h2>
        <p>Professional Design And Technical Team Scheme For You</p>
      </div>
      <div className="news-grid">
        {news.map((item, index) => (
          <Link href={item.url} key={index} className="news-card">
            <h3>{item.title}</h3>
            {item.date && <p className="date">{item.date}</p>}
            <p>{item.excerpt}</p>
            <span>Read More...</span>
          </Link>
        ))}
      </div>
    </section>
  );
}