export default function FeatureHighlights() {
  const items = [
    {
      title: "Fresh Global Styling",
      text: "A bright modern storefront using yellow, white and sky blue for a cleaner international look.",
    },
    {
      title: "Easy Custom Orders",
      text: "Upload artwork, submit requirements and request custom print products with smoother flow.",
    },
    {
      title: "Corporate & Event Printing",
      text: "Great for onboarding kits, conferences, schools, events and branded giveaway materials.",
    },
    {
      title: "Premium Product Positioning",
      text: "Structured to make print products feel more polished, premium and customer-ready.",
    },
  ];

  return (
    <section className="section" style={{ background: "#ffffff" }}>
      <div className="container">
        <div className="vx-section-head">
          <div>
            <h2 className="section-title">Built for modern brands</h2>
            <p className="section-subtitle">
              Bright, clean and more attractive design language for international-facing custom print commerce.
            </p>
          </div>
        </div>

        <div className="grid grid-4">
          {items.map((item) => (
            <div key={item.title} className="feature-box">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}