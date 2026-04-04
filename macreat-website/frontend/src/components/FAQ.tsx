const faqs = [
  'Are you a trading company or a manufacturer?',
  'How long is your delivery time?',
  'Can you provide all the technical parameters of the machine?',
  'Can you supply a complete animal feed production line?',
  'What is the warranty period for your machines?',
  'What is the price of this product?',
  'How much does shipping cost to my country?',
];

export default function FAQ() {
  return (
    <section className="faq">
      <div className="section-title">
        <h2>FAQ</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}