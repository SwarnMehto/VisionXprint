export default function ReviewSection({ testimonials = [] }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="grid grid-3">
          {testimonials.map((item) => (
            <div key={item.id} className="card">
              <p style={{ lineHeight: 1.8, color: "#334155", marginBottom: "14px" }}>
                "{item.text}"
              </p>
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}