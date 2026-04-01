export default function FAQSection() {
  const faqs = [
    {
      q: "Can I upload my own design?",
      a: "Yes, you can upload your own design while placing the order.",
    },
    {
      q: "Do you take bulk orders?",
      a: "Yes, we handle bulk printing for companies, schools and events.",
    },
    {
      q: "Can I order double-side printing?",
      a: "Yes, selected products support both single-side and double-side printing.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="grid">
          {faqs.map((item, index) => (
            <div key={index} className="card">
              <h3 style={{ marginBottom: "8px" }}>{item.q}</h3>
              <p style={{ color: "#475569", lineHeight: 1.8 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}