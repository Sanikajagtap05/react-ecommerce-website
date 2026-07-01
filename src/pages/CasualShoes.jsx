import React from "react";
import shoe1 from "../assets/cshoes1.jpg";
import shoe2 from "../assets/cshoes2.jpg";
import shoe3 from "../assets/cshoes3.jpg";

export default function CasualShoes() {
  const shoes = [
    {
      id: 1,
      name: "Nike Casual Comfort",
      image: shoe1,
      price: "₹3,999",
    },
    {
      id: 2,
      name: "Puma Everyday",
      image: shoe2,
      price: "₹3,499",
    },
    {
      id: 3,
      name: "Campus Casual",
      image: shoe3,
      price: "₹2,499",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Casual Shoes</h1>

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