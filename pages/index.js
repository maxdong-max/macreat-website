import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { translations } from '../lib/content';
import { seoConfig } from '../lib/seo';
import { useState } from 'react';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const t = translations.en;
  const hero = t.hero;
  const materials = t.materials;
  const solutions = t.systemSolutions;
  const lines = t.productionLines;
  const lead = t.leadMagnet;
  const about = t.about;
  const products = t.products;
  const cases = t.cases;
  const news = t.news;
  const faq = t.faq;
  const contact = t.contact;
  const form = t.contactForm;

  return (
    <>
      <Head>
        <title>{seoConfig.defaultTitle}</title>
        <meta name="description" content={seoConfig.defaultDescription} />
        <meta name="keywords" content={seoConfig.defaultKeywords.join(', ')} />
        <meta property="og:title" content={seoConfig.defaultTitle} />
        <meta property="og:description" content={seoConfig.defaultDescription} />
        <meta property="og:type" content={seoConfig.openGraph.type} />
        <meta property="og:locale" content={seoConfig.openGraph.locale} />
        <meta name="twitter:card" content={seoConfig.twitter.cardType} />
        <link rel="alternate" hrefLang="en" href="/" />
        <link rel="alternate" hrefLang="zh" href="/zh" />
        <link rel="alternate" hrefLang="id" href="/id" />
        <link rel="canonical" href="https://macreat.com/" />
      </Head>

      <Header />

      <main id="main">
        {/* Hero Section */}
        <section 
          className="hero-section"
          style={hero.backgroundImage ? {
            backgroundImage: `linear-gradient(rgba(26,26,46,0.92), rgba(0,102,204,0.88)), url(${hero.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          } : {}}
        >
          <div className="container">
            <div className="hero-content">
              <span className="hero-badge">🚜 Global Leading Manufacturer Since 1960</span>
              <h1>{hero.title}</h1>
              <p>{hero.subtitle}</p>
              <div className="hero-stats">
                {hero.stats.map((stat, idx) => (
                  <div key={idx} className="stat-item">
                    <span className="stat-number">{idx === 0 ? '62+' : idx === 1 ? '1000+' : '50+'}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="hero-cta">
                <a href={hero.cta[0].href} className="btn btn-primary">{hero.cta[0].text}</a>
                <Link href={hero.cta[1].href} className="btn btn-secondary">{hero.cta[1].text}</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section className="materials-section">
          <div className="container">
            <h2>{materials.title}</h2>
            <p className="section-subtitle">{materials.subtitle}</p>
            <div className="materials-grid">
              {materials.items.map((item, idx) => (
                <Link key={idx} href={item.href} className="material-card">
                  <div 
                    className="material-image" 
                    style={{
                      backgroundImage: item.image && item.image.startsWith('http') ? `url(${item.image})` : undefined,
                      background: !item.image || !item.image.startsWith('http') ? `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` : undefined,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {!item.image || !item.image.startsWith('http') ? (
                      <span style={{ color: 'white', fontSize: '3rem', opacity: 0.8 }}>⚙️</span>
                    ) : null}
                  </div>
                  <h3>{item.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* System Solutions Section */}
        <section className="solutions-section">
          <div className="container">
            <h2>{solutions.title}</h2>
            <p className="section-description">{solutions.description}</p>
            <div className="solutions-grid">
              {solutions.items.map((item, idx) => (
                <div key={idx} className="solution-card">
                  <div 
                    className="solution-image"
                    style={{
                      backgroundImage: item.image && item.image.startsWith('http') ? `url(${item.image})` : undefined,
                      background: !item.image || !item.image.startsWith('http') ? `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` : undefined,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {!item.image || !item.image.startsWith('http') ? (
                      <span style={{ color: 'white', fontSize: '3rem', opacity: 0.8 }}>⚙️</span>
                    ) : null}
                  </div>
                  <div className="solution-content">
                    <h3>{item.title}</h3>
                    {item.machines && <p><strong>Machines:</strong> {item.machines}</p>}
                    {item.technique && <p><strong>Processing technique:</strong> {item.technique}</p>}
                    {item.description && <p>{item.description}</p>}
                    {item.flow && <p>{item.flow}</p>}
                    <Link href={item.href} className="solution-link">Pellet Production Line →</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Production Lines Section */}
        <section className="production-lines-section">
          <div className="container">
            <h2>{lines.title}</h2>
            <p className="section-subtitle">{lines.subtitle}</p>
            <div className="production-lines-grid">
              {lines.items.map((item, idx) => (
                <Link key={idx} href={item.href} className="production-line-card">
                  <div className="line-image" style={item.image ? { backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}></div>
                  <h3>{item.name}</h3>
                  <p>{item.spec}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Magnet Section */}
        <section className="lead-magnet-section">
          <div className="container">
            <div className="lead-magnet-content">
              <h2>{lead.title}</h2>
              <p>{lead.description}</p>
              <Link href={lead.ctaLink} className="btn btn-primary">{lead.cta}</Link>
            </div>
            <div className="sale-coupon">
              <p><strong>{lead.saleText}</strong></p>
              <Link href={lead.saleLink} className="btn btn-secondary">{lead.saleCta}</Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-content">
                <h1>{about.title}</h1>
                <p>{about.description}</p>
                <Link href={about.ctaLink} className="btn btn-primary">{about.cta}</Link>
              </div>
              <div className="about-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={about.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ"} 
                  title="Factory Video"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="products-section">
          <div className="container">
            <h2>{products.title}</h2>
            <p className="section-subtitle">{products.subtitle}</p>
            <div className="products-grid">
              {products.items.map((item, idx) => (
                <Link key={idx} href={item.href} className="product-card">
                  <div 
                    className="product-image"
                    style={{
                      backgroundImage: item.image && item.image.startsWith('http') ? `url(${item.image})` : undefined,
                      background: !item.image || !item.image.startsWith('http') ? `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` : undefined,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {!item.image || !item.image.startsWith('http') ? (
                      <span style={{ color: 'white', fontSize: '3rem', opacity: 0.8 }}>⚙️</span>
                    ) : null}
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.spec}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section className="cases-section">
          <div className="container">
            <h2>{cases.title}</h2>
            <p className="section-subtitle">{cases.subtitle}</p>
            <div className="cases-grid">
              {cases.items.map((item, idx) => (
                <Link key={idx} href={item.href} className="case-card">
                  <div 
                    className="case-image"
                    style={{
                      backgroundImage: item.image && item.image.startsWith('http') ? `url(${item.image})` : undefined,
                      background: !item.image || !item.image.startsWith('http') ? `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` : undefined,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {!item.image || !item.image.startsWith('http') ? (
                      <span style={{ color: 'white', fontSize: '3rem', opacity: 0.8 }}>🏭</span>
                    ) : null}
                  </div>
                  <h3>{item.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="news-section">
          <div className="container">
            <h2>{news.title}</h2>
            <p className="section-subtitle">{news.subtitle}</p>
            <div className="news-grid">
              {news.items.map((item, idx) => (
                <article key={idx} className="news-card">
                  <div 
                    className="news-image"
                    style={{
                      backgroundImage: item.image && item.image.startsWith('http') ? `url(${item.image})` : undefined,
                      background: !item.image || !item.image.startsWith('http') ? `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` : undefined,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  <h3><Link href={item.href}>{item.title}</Link></h3>
                  <p>{item.excerpt}</p>
                  <Link href={item.href} className="read-more">Read More...</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <h2>{faq.title}</h2>
            <div className="faq-list">
              {faq.items.map((item, idx) => (
                <div key={idx} className={`faq-item ${activeFaq === idx ? 'active' : ''}`}>
                  <button 
                    className="faq-question" 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon">{activeFaq === idx ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-titles">
              <h2>{contact.title}</h2>
              <h2>{form.title}</h2>
            </div>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-methods">
                  <div className="contact-block">
                    <div className="contact-label">WhatsApp</div>
                    <a href={contact.whatsappLink}>{contact.whatsapp}</a>
                  </div>
                  <div className="contact-block">
                    <div className="contact-label">Email</div>
                    <a href={contact.emailLink}>pellet@macreat.com</a>
                  </div>
                  <div className="contact-block">
                    <div className="contact-label">Phone</div>
                    <a href={contact.phoneLink}>{contact.phone}</a>
                  </div>
                </div>
              </div>
              <div className="contact-form" id="message">
                <form action="/api/contact" method="POST" className="quote-form">
                  <div className="form-grid">
                    <div className="form-group">
                      <label>{form.fields[0].placeholder}</label>
                      <input type="text" name="name" required />
                    </div>
                    <div className="form-group">
                      <label>{form.fields[1].placeholder}</label>
                      <input type="email" name="email" required />
                    </div>
                    <div className="form-group">
                      <label>{form.fields[2].placeholder}</label>
                      <input type="text" name="phone" required />
                    </div>
                    <div className="form-group">
                      <label>{form.fields[3].placeholder}</label>
                      <input type="text" name="country" required />
                    </div>
                  </div>
                  <div className="form-group form-group-full">
                    <label>{form.messagePlaceholder}</label>
                    <textarea name="message" rows="4" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">{form.button}</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}