import React from "react";
import shoe1 from "../assets/shoe1.jpg";
import shoe3 from "../assets/shoe3.jpg";
import shoe4 from "../assets/shoe4.jpg";

export default function Kids() {
  const products = [
    {
      id: 1,
      name: "Nike Kids Runner",
      image: shoe1,
      price: "₹2,499",
    },
    {
      id: 2,
      name: "Adidas Kids Sports",
      image: shoe3,
      price: "₹2,999",
    },
    {
      id: 3,
      name: "Puma Kids Sneakers",
      image: shoe4,
      price: "₹2,799",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Kids Collection</h1>

      <div className="row g-4">
        {products.map((shoe) => (
          <div className="col-md-4" key={shoe.id}>
            <div className="card shadow border-0 h-100">
              <img
                src={shoe.image}
                className="card-img-top"
                alt={shoe.name}
                style={{ height: "260px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5>{shoe.name}</h5>
                <h4 className="text-primary">{shoe.price}</h4>

                <button className="btn btn-dark w-100">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}