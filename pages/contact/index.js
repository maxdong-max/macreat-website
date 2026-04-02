import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { translations } from '../lib/content';

export default function Contact() {
  const t = translations.en;
  const { contact } = t;
  return (
    <>
      <Head><title>Contact Us - Macreat</title></Head>
      <Header />
      <main>
        <section className="page-hero"><div className="container"><h1>{contact.title}</h1></div></section>
        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-item"><h4>WhatsApp</h4><a href={contact.whatsappLink}>{contact.whatsapp}</a></div>
              <div className="contact-item"><h4>Email</h4><a href={contact.emailLink}>{contact.email}</a></div>
              <div className="contact-item"><h4>Phone</h4><a href={contact.phoneLink}>{contact.phone}</a></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}