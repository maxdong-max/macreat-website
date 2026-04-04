import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="contact-section" id="message">
      <div className="section-title">
        <h2>Get In Touch!</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>WhatsApp</h3>
          <p>
            <Link href="https://api.whatsapp.com/send?phone=8618615207548">
              +86-18615207548
            </Link>
          </p>
          
          <h3>Email</h3>
          <p>
            <Link href="mailto:pellet@macreat.com">
              pellet@macreat.com
            </Link>
          </p>
          
          <h3>Phone</h3>
          <p>
            <Link href="tel:+86-18615207548">
              +86-18615207548
            </Link>
          </p>
          
          <h3>Follow Us</h3>
          <div style={{ display: 'flex', gap: '15px' }}>
            <Link href="https://www.facebook.com/macreatpellet">Facebook</Link>
            <Link href="https://twitter.com/macreatmachine">Twitter</Link>
            <Link href="https://www.instagram.com/woodpelletmill/">Instagram</Link>
            <Link href="https://www.youtube.com/@macreatpelletmill2327">Youtube</Link>
            <Link href="https://api.whatsapp.com/send?phone=8618615207548">Whatsapp</Link>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>Send a message</h3>
          <form>
            <div className="form-group">
              <label>Name *</label>
              <input type="text" placeholder="Name *" required />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" placeholder="Email *" required />
            </div>
            <div className="form-group">
              <label>Whatsapp/Phone *</label>
              <input type="text" placeholder="Whatsapp/Phone *" required />
            </div>
            <div className="form-group">
              <label>Country *</label>
              <input type="text" placeholder="Country *" required />
            </div>
            <div className="form-group">
              <label>Your Message *</label>
              <textarea 
                placeholder="* Please let us know more details if possible. What are raw materials? Which machine do you want? And We can receive an accurate quotation." 
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Get A Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}