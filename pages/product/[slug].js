import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingSocial from '../../components/FloatingSocial';
import { productsData } from '../../lib/productData';
import { seoConfig } from '../../lib/seo';

export default function ProductDetail({ product, slug }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="loading">Loading...</div>;
  }

  if (!product) {
    return (
      <>
        <Head>
          <title>Product Not Found - Macreat</title>
        </Head>
        <Header />
        <main id="main">
          <section className="page-hero">
            <div className="container">
              <h1>Product Not Found</h1>
              <p>The product you are looking for does not exist.</p>
              <Link href="/machine/products/" className="btn btn-primary">
                Back to Products
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const t = {
    contactForm: {
      title: 'Send a message',
      fields: [
        { name: 'name', placeholder: 'Name *', required: true },
        { name: 'email', placeholder: 'Email *', required: true },
        { name: 'phone', placeholder: 'WhatsApp/Phone *', required: true },
        { name: 'country', placeholder: 'Country *', required: true }
      ],
      messagePlaceholder: 'Please let us know more details if possible. What are raw materials? Which machine do you want? And We can receive an accurate quotation.',
      button: 'Get A Quote'
    },
    contact: {
      whatsappLink: 'https://api.whatsapp.com/send?phone=8618615207548',
      email: 'pellet@macreat.com'
    }
  };

  return (
    <>
      <Head>
        <title>{product.title} - Macreat</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:type" content="product" />
        <link rel="canonical" href={`https://macreat.com/product/${slug}/`} />
      </Head>

      <Header />

      <main id="main">
        {/* Breadcrumb */}
        <section className="breadcrumb-section">
          <div className="container">
            <nav className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="separator">/</span>
              <Link href="/machine/products/">Machines</Link>
              <span className="separator">/</span>
              <span className="current">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Hero */}
        <section className="product-hero">
          <div className="container">
            <div className="product-hero-content">
              <div className="product-image">
                {product.image && (
                  <img src={product.image} alt={product.name} />
                )}
              </div>
              <div className="product-info">
                <h1>{product.name}</h1>
                <p className="product-description">{product.description}</p>
                <div className="product-cta">
                  <a 
                    href={t.contact.whatsappLink} 
                    className="btn btn-whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>📱</span> WhatsApp
                  </a>
                  <a 
                    href={`mailto:${t.contact.email}`}
                    className="btn btn-primary"
                  >
                    <span>✉️</span> Get Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features */}
        {product.features && product.features.length > 0 && (
          <section className="product-features">
            <div className="container">
              <h2>Product Features</h2>
              <ul className="features-list">
                {product.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Product Specifications */}
        {product.specs && Object.keys(product.specs).length > 0 && (
          <section className="product-specs">
            <div className="container">
              <h2>Technical Specifications</h2>
              <div className="specs-table-wrapper">
                <table className="specs-table">
                  <tbody>
                    {Object.entries(product.specs).map(([key, values], idx) => (
                      <tr key={idx}>
                        <th>{key}</th>
                        <td>
                          {Array.isArray(values) ? (
                            <div className="spec-values">
                              {values.map((val, valIdx) => (
                                <span key={valIdx} className="spec-value">{val}</span>
                              ))}
                            </div>
                          ) : (
                            values
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="specs-note">
                * Due to the high customization available condition for the equipment, 
                the parameters listed on this page are for reference only and the actual 
                delivered specifications shall prevail.
              </p>
            </div>
          </section>
        )}

        {/* Contact Form */}
        <section className="contact-section" id="message">
          <div className="container">
            <h2>{t.contactForm.title}</h2>
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  {t.contactForm.fields.map((field, idx) => (
                    <div className="form-group" key={idx}>
                      <input
                        type={field.name === 'email' ? 'email' : 'text'}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="form-control"
                      />
                    </div>
                  ))}
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder={t.contactForm.messagePlaceholder}
                    className="form-control"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-submit">
                  {t.contactForm.button}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="related-products">
          <div className="container">
            <h2>Related Products</h2>
            <div className="related-products-grid">
              {Object.keys(productsData)
                .filter((key) => key !== slug)
                .slice(0, 4)
                .map((key) => (
                  <Link 
                    key={key} 
                    href={`/product/${key}/`} 
                    className="related-product-card"
                  >
                    <div 
                      className="related-product-image"
                      style={{
                        backgroundImage: `url(${productsData[key].image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    ></div>
                    <div className="related-product-info">
                      <h4>{productsData[key].name}</h4>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <FloatingSocial />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const slugs = Object.keys(productsData);
  
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = productsData[params.slug] || null;
  
  return {
    props: {
      product,
      slug: params.slug,
    },
  };
}