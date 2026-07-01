import React from "react";
import shoe1 from "../assets/shoe1.jpg";
import shoe2 from "../assets/shoe2.jpg";
import shoe3 from "../assets/shoe3.jpg";
import shoe4 from "../assets/shoe4.jpg";

export default function NewArrivals() {
  const products = [
    {
      id: 1,
      name: "Nike ZoomX",
      image: shoe1,
      price: "₹8,999",
    },
    {
      id: 2,
      name: "Adidas NMD",
      image: shoe2,
      price: "₹7,999",
    },
    {
      id: 3,
      name: "Puma Nitro Elite",
      image: shoe3,
      price: "₹6,999",
    },
    {
      id: 4,
      name: "Campus Alpha",
      image: shoe4,
      price: "₹3,999",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">New Arrivals</h1>

      <div className="row g-4">
        {products.map((shoe) => (
          <div className="col-lg-3 col-md-6" key={shoe.id}>
            <div className="card shadow border-0 h-100">
              <span className="badge bg-success position-absolute m-2">
                NEW
              </span>

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
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}