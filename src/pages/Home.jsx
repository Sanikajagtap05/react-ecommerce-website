import React from 'react'
import img from "../assets/hero.png"
import img2 from "../assets/download8.jpg";
import img3 from "../assets/download1.jpg";
import img4 from "../assets/download2.jpg";
import img5 from "../assets/download3.jpg";
import img6 from "../assets/download4.jpg";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">
              Discover Your Perfect Style
            </h1>

            <p className="lead text-muted my-4">
              Shop the latest fashion, electronics, accessories, and more at
              unbeatable prices. Enjoy fast delivery and secure shopping.
            </p>

            <button className="btn btn-dark btn-lg">
              Shop Now
            </button>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={img2}
              alt="Shopping"
              className="img-fluid"
              style={{ maxHeight: "550px" }}
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Shop by Category</h2>

        <div className="row g-4">

          <div className="col-md-3">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h3>👕</h3>
                <h5>Fashion</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h3>📱</h3>
                <h5>Electronics</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h3>⌚</h3>
                <h5>Accessories</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h3>👟</h3>
                <h5>Footwear</h5>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Featured Products</h2>

        <div className="row g-4">

          {[1].map((item) => (
            <div className="col-md-3" key={item}>
              <div className="card shadow-sm">
                <img
                  src={img3}
                  className="card-img-top"
                  alt="Product"
                />

                <div className="card-body text-center">
                  <h5>Product {item}</h5>
                  <p className="text-success fw-bold">₹899</p>

                  <button className="btn btn-outline-dark">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
          {[2].map((item) => (
            <div className="col-md-3" key={item}>
              <div className="card shadow-sm">
                <img
                  src={img6}
                  className="card-img-top"
                  alt="Product"
                />

                <div className="card-body text-center">
                  <h5>Product {item}</h5>
                  <p className="text-success fw-bold">₹999</p>

                  <button className="btn btn-outline-dark">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
          {[3].map((item) => (
            <div className="col-md-3" key={item}>
              <div className="card shadow-sm">
                <img
                  src={img3}
                  className="card-img-top"
                  alt="Product"
                />

                <div className="card-body text-center">
                  <h5>Product {item}</h5>
                  <p className="text-success fw-bold">₹799</p>

                  <button className="btn btn-outline-dark">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
          {[4].map((item) => (
            <div className="col-md-3" key={item}>
              <div className="card shadow-sm">
                <img
                  src={img6}
                  className="card-img-top"
                  alt="Product"
                />

                <div className="card-body text-center">
                  <h5>Product {item}</h5>
                  <p className="text-success fw-bold">₹699</p>

                  <button className="btn btn-outline-dark">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
          

        </div>
      </section>

      
    </>
  );
}
