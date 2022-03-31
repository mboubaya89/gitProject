import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css";

function Header() {
  return (
    <header class="p-3 mb-3 border-bottom fixed-top bg-light">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
          >
            <svg
              class="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            ></svg>
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" class="nav-link px-2 link-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/productlist" class="nav-link px-2 link-dark">
                Products
              </Link>
            </li>
            <li>
              <Link to="/checkout" class="nav-link px-2 link-dark">
                Checkout
              </Link>
            </li>
            
            <li>
              <Link to="/inventory" class="nav-link px-2 link-dark">
                Inventory
              </Link>
            </li>
            <li>
              <Link to="/customers" class="nav-link px-2 link-dark">
                Customers
              </Link>
            </li>
            <li>
              <Link to="/addproduct" class="nav-link px-2 link-dark">
                Addproduct
              </Link>
            </li>
            
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              class="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div class="dropdown text-end">
            <a
              href="https://www.google.fr/"
              class="d-block link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                class="rounded-circle"
              />
            </a>
            <ul
              class="dropdown-menu text-small"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a class="dropdown-item" href="https://www.google.fr/">
                  New project...
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="https://www.google.fr/">
                  Settings
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="https://www.google.fr/">
                  Profile
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="https://www.google.fr/">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
