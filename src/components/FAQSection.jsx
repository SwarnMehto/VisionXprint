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
        <p className="section-subtitle" style={{ marginBottom: "26px" }}>
          Quick answers to the most common custom printing questions.
        </p>

        <div className="grid">
          {faqs.map((item, index) => (
            <div key={index} className="card faq-card">
              <h3
                style={{
                  margin: "0 0 10px",
                  color: "#16324f",
                  fontSize: "18px",
                  lineHeight: "1.5",
                }}
              >
                {item.q}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#5c7894",
                  lineHeight: "1.8",
                  fontSize: "16px",
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}