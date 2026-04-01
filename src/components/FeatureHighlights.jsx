export default function FeatureHighlights() {
  const items = [
    {
      title: "Refined Premium Presentation",
      text: "Designed for modern brands targeting international clients and polished business identity.",
    },
    {
      title: "Custom Artwork Upload",
      text: "Upload your ready design files and place custom orders with clean production flow.",
    },
    {
      title: "Corporate & Event Bulk Orders",
      text: "Ideal for agencies, conferences, startups, schools and fast-moving brand campaigns.",
    },
    {
      title: "Modern Print Experience",
      text: "A smooth storefront with sharp visuals, better product clarity and clear action paths.",
    },
  ];

  return (
    <section className="section" style={{ background: "#ffffff" }}>
      <div className="container">
        <h2 className="section-title">Built for modern brands</h2>
        <p className="section-subtitle">
          A cleaner, premium print storefront designed to look credible for USA,
          Canada and Europe-focused customers.
        </p>

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