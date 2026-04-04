export default function WhyChooseUsSection() {
  const points = [
    {
      title: "Premium visual quality",
      text: "Every product is designed to give your brand a cleaner, sharper and more professional look.",
      icon: "✨",
    },
    {
      title: "Custom order flexibility",
      text: "From small runs to bulk requirements, we support business, event and institutional print needs.",
      icon: "🎯",
    },
    {
      title: "Simple artwork workflow",
      text: "Upload logos, artwork or print-ready files easily and move faster from idea to finished product.",
      icon: "📁",
    },
    {
      title: "Built for real business use",
      text: "Ideal for founders, offices, schools, agencies, campaigns and gifting requirements.",
      icon: "🏢",
    },
  ];

  return (
    <section className="vx-home-section vx-home-section-soft">
      <div className="container">
        <div className="vx-section-head center">
          <div>
            <p className="vx-section-tag">Why choose Vision X Print</p>
            <h2>Not just printing — a better brand presentation</h2>
            <p>
              We focus on clean design, professional output and a modern ordering
              experience that helps your products look premium from the first click.
            </p>
          </div>
        </div>

        <div className="vx-why-grid">
          {points.map((item) => (
            <div key={item.title} className="vx-why-card">
              <div className="vx-why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}