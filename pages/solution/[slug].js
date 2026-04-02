import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { translations } from '../../lib/content';

export default function SolutionDetail({ slug }) {
  const t = translations.en;
  const { systemSolutions } = t;
  
  // Find the solution that matches the slug
  const solution = systemSolutions.items.find(item => 
    item.href === `/solution/${slug}/`
  ) || systemSolutions.items[0];

  return (
    <>
      <Head>
        <title>{solution.title} - Macreat</title>
        <meta name="description" content={solution.description || solution.machines} />
      </Head>

      <Header />

      <main>
        <section className="page-hero">
          <div className="container">
            <h1>{solution.title}</h1>
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-content">
                <h2>Production Process</h2>
                <p className="solution-machines">{solution.machines}</p>
                <p className="solution-technique">{solution.technique}</p>
                {solution.flow && (
                  <>
                    <h3>Production Flow</h3>
                    <p>{solution.flow}</p>
                  </>
                )}
                <Link href="/contact/" className="btn btn-primary">
                  Get Quote
                </Link>
              </div>
              <div className="about-video">
                <div 
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: solution.image ? `url(${solution.image})` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#f0f0f0'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Interested in this solution?</h2>
            <p>Contact us for a customized quote and technical specifications.</p>
            <Link href={t.contact.whatsappLink} className="btn btn-primary">
              Chat on WhatsApp
            </Link>
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
  return {
    props: { slug: params.slug }
  };
}