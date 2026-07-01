import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">

        <a className="navbar-brand fw-bold" href="#">
          🛒 StoreM4
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink className="nav-link active" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

            <li>
              <NavLink  className="nav-link" to="/conditional">Login</NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>

              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/runningShoes">
                  Running Shoes
                </NavLink></li>
                <li><NavLink className="dropdown-item" to="/sneakers">
                  Sneakers
                </NavLink></li>
                <li><NavLink className="dropdown-item" to="/sportsShoes">
                  Sports Shoes
                </NavLink></li>
                <li><NavLink className="dropdown-item" to="/casualShoes">
                  Casual Shoes
                </NavLink></li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/deals">
                Deals
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="blocksDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>

              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/men">
                  Men
                </NavLink></li>
                <li><NavLink className="dropdown-item" to="/women">
                  Women
                </NavLink></li>
                <li><NavLink className="dropdown-item" to="/kids">
                  Kids
                </NavLink></li>
                <li><NavLink className="dropdown-item" to="/new-arrivals">
                  New Arrivals
                </NavLink></li>
              </ul>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}