import React from "react";
import shoe2 from "../assets/shoe2.jpg";
import shoe3 from "../assets/shoe3.jpg";
import shoe4 from "../assets/shoe4.jpg";

export default function Sneakers() {
  const shoes = [
    {
      id: 1,
      name: "Nike Air Force 1",
      image: shoe2,
      price: "₹7,999",
    },
    {
      id: 2,
      name: "Adidas Superstar",
      image: shoe3,
      price: "₹6,499",
    },
    {
      id: 3,
      name: "Puma Smash",
      image: shoe4,
      price: "₹4,999",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Sneakers Collection</h1>

      <div className="row g-4">
        {shoes.map((shoe) => (
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