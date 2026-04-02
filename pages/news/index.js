import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { translations } from '../lib/content';
export default function News() {
  const t = translations.en;
  const { news } = t;
  return (
    <>
      <Head><title>News - Macreat</title></Head>
      <Header />
      <main>
        <section className="page-hero"><div className="container"><h1>{news.title}</h1></div></section>
        <section className="news-section">
          <div className="container">
            <div className="news-grid">
              {news.items.map((item, idx) => (<Link key={idx} href={item.href} className="news-card"><h3>{item.title}</h3><p>{item.excerpt}</p></Link>))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}