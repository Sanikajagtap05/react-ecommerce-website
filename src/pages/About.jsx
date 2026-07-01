import React from "react";
import aboutImg from "../assets/download1.jpg"; // Add any image in assets folder

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">About ShopEase</h1>
          <p className="lead mt-3">
            Your one-stop destination for quality products at affordable prices.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-5">
        <div className="row align-items-center">

          <div className="col-lg-6 mb-4">
            <img
              src={aboutImg}
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">Who We Are</h2>

            <p className="text-muted">
              ShopEase is an online shopping platform dedicated to providing
              customers with high-quality products, secure payments, and fast
              delivery. We believe shopping should be simple, enjoyable, and
              affordable for everyone.
            </p>

            <p className="text-muted">
              From electronics and fashion to home essentials and accessories,
              we carefully select products that combine quality, value, and
              style.
            </p>

            <button className="btn btn-primary mt-3">
              Explore Products
            </button>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Choose Us?</h2>

          <div className="row text-center">

            <div className="col-md-3 mb-4">
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <h1>🚚</h1>
                  <h5>Free Shipping</h5>
                  <p>Free delivery on orders above ₹999.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <h1>💳</h1>
                  <h5>Secure Payment</h5>
                  <p>100% safe and secure payment methods.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <h1>⭐</h1>
                  <h5>Quality Products</h5>
                  <p>Only premium and trusted brands.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <h1>📞</h1>
                  <h5>24/7 Support</h5>
                  <p>Always here to help you anytime.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="container py-5">
        <div className="row text-center">

          <div className="col-md-3">
            <h2 className="text-primary fw-bold">10K+</h2>
            <p>Happy Customers</p>
          </div>

          <div className="col-md-3">
            <h2 className="text-primary fw-bold">500+</h2>
            <p>Products</p>
          </div>

          <div className="col-md-3">
            <h2 className="text-primary fw-bold">50+</h2>
            <p>Brands</p>
          </div>

          <div className="col-md-3">
            <h2 className="text-primary fw-bold">24/7</h2>
            <p>Customer Support</p>
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Meet Our Team</h2>

          <div className="row">

            {[
              {
                name: "John Smith",
                role: "Founder & CEO",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Emily Johnson",
                role: "Marketing Manager",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "David Lee",
                role: "Product Manager",
                img: "https://randomuser.me/api/portraits/men/15.jpg",
              },
            ].map((member, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow border-0 text-center">
                  <img
                    src={member.img}
                    className="card-img-top rounded-circle mx-auto mt-4"
                    alt={member.name}
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body">
                    <h5>{member.name}</h5>
                    <p className="text-muted">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}