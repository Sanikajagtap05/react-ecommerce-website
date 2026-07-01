import React from "react";
import shoe1 from "../assets/shoe1.jpg";
import shoe2 from "../assets/shoe2.jpg";
import shoe3 from "../assets/shoe3.jpg";

export default function RunningShoes() {
  const shoes = [
    {
      id: 1,
      name: "Nike Air Zoom",
      image: shoe1,
      price: "₹5,999",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      image: shoe2,
      price: "₹6,499",
    },
    {
      id: 3,
      name: "Puma Velocity",
      image: shoe3,
      price: "₹4,999",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Running Shoes</h1>

      <div className="row g-4">
        {shoes.map((shoe) => (
          <div className="col-md-4" key={shoe.id}>
            <div className="card shadow-sm h-100">
              <img
                src={shoe.image}
                className="card-img-top"
                alt={shoe.name}
                style={{ height: "250px", objectFit: "cover" }}
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