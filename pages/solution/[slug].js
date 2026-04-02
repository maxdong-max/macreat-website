import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { translations } from '../../lib/content';

export default function SolutionDetail({ slug }) {
  const t = translations.en;
  const { systemSolutions } = t;
  const solution = systemSolutions.items.find(item => item.href === `/solution/${slug}/`) || systemSolutions.items[0];

  return (
    <>
      <Head><title>{solution.title} - Macreat</title></Head>
      <Header />
      <main>
        <section className="page-hero"><div className="container"><h1>{solution.title}</h1></div></section>
        <section className="about-section">
          <div className="container">
            <p>{solution.machines}</p>
            <p>{solution.technique}</p>
            <Link href="/contact/" className="btn btn-primary">Get Quote</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'biomass-pellet-line' } },
      { params: { slug: 'wood-pellet-mill-production-line' } },
      { params: { slug: 'straw-pelletizing-production-line' } },
      { params: { slug: 'biomass-fuel-pellet-production-with-rice-husk' } },
      { params: { slug: 'palm-efb-pellet-production-line' } },
      { params: { slug: 'plywood-waste-pellet-making-solution' } },
      { params: { slug: 'sawdust-pellets-production-line' } },
    ],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}