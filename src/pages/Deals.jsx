import React from "react";
import shoe1 from "../assets/shoe1.jpg";
import shoe2 from "../assets/shoe2.jpg";
import shoe3 from "../assets/shoe3.jpg";
import shoe4 from "../assets/shoe4.jpg";

export default function Deals() {

  const deals = [
    {
      id: 1,
      name: "Nike Air Max",
      image: shoe1,
      oldPrice: "₹8,999",
      newPrice: "₹6,499",
      discount: "28% OFF",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      image: shoe2,
      oldPrice: "₹10,999",
      newPrice: "₹7,999",
      discount: "27% OFF",
    },
    {
      id: 3,
      name: "Puma Running Shoes",
      image: shoe3,
      oldPrice: "₹5,999",
      newPrice: "₹3,999",
      discount: "33% OFF",
    },
    {
      id: 4,
      name: "Campus Sneakers",
      image: shoe4,
      oldPrice: "₹2,999",
      newPrice: "₹1,999",
      discount: "35% OFF",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">🔥 Shoe Deals</h1>
          <p className="lead">
            Save up to 50% on premium sneakers and sports shoes.
          </p>
        </div>
      </section>

      {/* Deals */}
      <section className="container py-5">
        <div className="row g-4">

          {deals.map((shoe) => (
            <div className="col-lg-3 col-md-6" key={shoe.id}>
              <div className="card shadow border-0 h-100">

                <span className="badge bg-danger position-absolute m-2">
                  {shoe.discount}
                </span>

                <img
                  src={shoe.image}
                  className="card-img-top"
                  alt={shoe.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />

                <div className="card-body text-center">
                  <h5>{shoe.name}</h5>

                  <p>
                    <span className="text-decoration-line-through text-muted me-2">
                      {shoe.oldPrice}
                    </span>

                    <span className="text-danger fw-bold fs-5">
                      {shoe.newPrice}
                    </span>
                  </p>

                  <button className="btn btn-dark w-100">
                    Shop Now
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Offer Banner */}
      <section className="bg-danger text-white py-5">
        <div className="container text-center">
          <h2>Weekend Sale</h2>
          <h4>Buy 2 Shoes & Get 20% OFF</h4>
          <button className="btn btn-light mt-3">
            Explore Collection
          </button>
        </div>
      </section>
    </>
  );
}