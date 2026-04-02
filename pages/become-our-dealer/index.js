import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function BecomeDealer() {
  return (
    <>
      <Head><title>Become Our Dealer - Macreat</title></Head>
      <Header />
      <main>
        <section className="page-hero"><div className="container"><h1>Become Our Dealer</h1></div></section>
        <section className="about-section"><div className="container"><ul><li>✅ 62+ Years</li><li>✅ 1000+ Clients</li><li>✅ 50+ Countries</li></ul><Link href="/contact/" className="btn btn-primary">Apply Now</Link></div></section>
      </main>
      <Footer />
    </>
  );
}