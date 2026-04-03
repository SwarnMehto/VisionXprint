export default function ReviewSection({ testimonials = [] }) {
  const safeTestimonials = Array.isArray(testimonials) ? testimonials : [];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle" style={{ marginBottom: "26px" }}>
          Real feedback from customers who ordered custom print products from us.
        </p>

        <div className="grid grid-3">
          {safeTestimonials.map((item) => (
            <div key={item.id} className="card review-card">
              <p
                style={{
                  margin: "0 0 16px",
                  color: "#5c7894",
                  lineHeight: "1.8",
                  fontSize: "16px",
                }}
              >
                “{item.text}”
              </p>

              <h4
                style={{
                  margin: 0,
                  color: "#16324f",
                  fontSize: "18px",
                  lineHeight: "1.4",
                }}
              >
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}