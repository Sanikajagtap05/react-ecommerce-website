import React from "react";
import shoe2 from "../assets/womenshoe1.jpg";
import shoe3 from "../assets/womenshoe2.jpg";
import shoe4 from "../assets/womenshoe3.jpg";

export default function Women() {
  const products = [
    {
      id: 1,
      name: "Womens heels",
      image: shoe2,
      price: "₹6,499",
    },
    {
      id: 2,
      name: "Womens Sandals",
      image: shoe3,
      price: "₹5,999",
    },
    {
      id: 3,
      name: "Bella",
      image: shoe4,
      price: "₹4,999",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Women's Collection</h1>

      <div className="row g-4">
        {products.map((shoe) => (
          <div className="col-md-4" key={shoe.id}>
            <div className="card shadow border-0 h-100">
              <img
                src={shoe.image}
                className="card-img-top"
                alt={shoe.name}
                style={{ height: "300px", objectFit: "cover" }}
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