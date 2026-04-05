import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { translations } from '../../lib/content';

export default function SolutionDetail({ slug }) {
  const t = translations.en;
  const { systemSolutions, contact } = t;
  
  // Find the solution that matches the slug
  const solution = systemSolutions.items.find(item => 
    item.href === `/solution/${slug}/`
  ) || systemSolutions.items[0];

  return (
    <>
      <Head>
        <title>{solution.title} - Macreat</title>
        <meta name="description" content={solution.description || solution.machines || 'Macreat Solution'} />
      </Head>

      <Header />

      <main>
        <section className="page-hero">
          <div className="container">
            <h1>{solution.title}</h1>
            {solution.subtitle && <p className="page-hero-subtitle">{solution.subtitle}</p>}
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-content">
                {solution.description && (
                  <>
                    <h2>Overview</h2>
                    <p className="solution-description">{solution.description}</p>
                  </>
                )}

                {solution.features && solution.features.length > 0 && (
                  <>
                    <h3>Key Features</h3>
                    <ul className="solution-features">
                      {solution.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}

                {solution.machines && (
                  <>
                    <h3>Machines</h3>
                    <p className="solution-machines">{solution.machines}</p>
                  </>
                )}

                {solution.technique && (
                  <>
                    <h3>Technique</h3>
                    <p className="solution-technique">{solution.technique}</p>
                  </>
                )}

                {solution.flow && (
                  <>
                    <h3>Production Flow</h3>
                    <p className="solution-flow">{solution.flow}</p>
                  </>
                )}

                {solution.materials && (
                  <>
                    <h3>Available Materials</h3>
                    <p className="solution-materials">{solution.materials}</p>
                  </>
                )}

                <div className="cta-buttons">
                  <Link href="/contact/" className="btn btn-primary">
                    Get Quote
                  </Link>
                  {contact.whatsappLink && (
                    <a href={contact.whatsappLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                  )}
                </div>
              </div>
              <div className="about-video">
                {solution.image ? (
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                ) : (
                  <div 
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#f0f0f0'
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Interested in this solution?</h2>
            <p>Contact us for a customized quote and technical specifications.</p>
            <div className="cta-buttons">
              <Link href="/contact/" className="btn btn-primary">
                Get a Quote
              </Link>
              {contact.whatsappLink && (
                <a href={contact.whatsappLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  // Match these slugs with content.js systemSolutions items
  const slugs = [
    'biomass-pellet-line',
    'wood-pellet-mill-production-line',
    'straw-pelletizing-production-line',
    'biomass-fuel-pellet-production-with-rice-husk',
    'sawdust-pellets-production-line',
    'palm-efb-pellet-production-line',
    'plywood-waste-pellet-making-solution',
  ];
  const locales = ['en', 'zh', 'id'];
  
  const paths = [];
  for (const slug of slugs) {
    for (const locale of locales) {
      paths.push({
        params: { slug },
        locale,
      });
    }
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { slug: params.slug }
  };
}