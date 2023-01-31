import "../css/bootstrap.min.css";
import "../css/style.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="container-fluid nav-bar bg-transparent">
      <nav  class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <Link   className="navbar-brand" to="/">
          <div className="d-flex align-items-center">
            <i style={{'color' : '#00B98E'}} className="fas fa-home"></i>
            <span style={{'color' : '#00B98E'}} className="ms-2">IG R-ESTATE</span>
          </div>
        </Link>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div style={{'alignItems' : 'center'}} class="navbar-nav ms-auto">
            <li class="nav-item nav-link active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li href="about.html" class="nav-item nav-link">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li href="blog.html" class="nav-item nav-link">
              <Link className="nav-link" to="/blog">
                Citizenship Info
              </Link>
            </li>
            <li href="contact.html" class="nav-item nav-link">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <div class="nav-item dropdown">
              <li
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Property
              </li>
              <div class="dropdown-menu rounded-0 m-0">
                <a href="/flatList" class="dropdown-item">
                  Property List
                </a>
                <a href="/citizenFlatList" class="dropdown-item">
                  Citizenship Properties (TR)
                </a>
              </div>
            </div>
          </div>
          <Link to="/addPost" class="btn btn-primary px-3 d-none d-lg-flex">
            Add Property
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
