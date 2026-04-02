import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { translations } from '../lib/content';
export default function About() {
  const t = translations.en;
  const { about } = t;
  return (
    <>
      <Head><title>About Macreat</title></Head>
      <Header />
      <main>
        <section className="page-hero"><div className="container"><h1>{about.title}</h1></div></section>
        <section className="about-section"><div className="container"><p>{about.description}</p><Link href="/contact/" className="btn btn-primary">{about.cta}</Link></div></section>
      </main>
      <Footer />
    </>
  );
}