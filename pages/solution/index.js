import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { translations } from '../../lib/content';

export default function Solution() {
  const t = translations.en;
  const { systemSolutions } = t;

  return (
    <>
      <Head>
        <title>System Solutions - Macreat</title>
      </Head>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>System Solutions</h1>
          </div>
        </section>
        <section className="solutions-section">
          <div className="container">
            <div className="solutions-grid">
              {systemSolutions.items.map((item, idx) => (
                <Link key={idx} href={item.href} className="solution-card">
                  <h3>{item.title}</h3>
                  <p>{item.machines}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}