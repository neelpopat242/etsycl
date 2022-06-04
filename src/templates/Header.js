import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand " style={{color: "#FF8C00"}}>Etsy</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
             
            </ul>

           
            
            <form className="d-flex mx-3">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search for anything"
                aria-label="Search"
              />
              <button className="btn btn-outline-success " type="submit">
                Search
              </button>
            </form>

            <a className="nav-link mx-2"> Sign Up </a>
            <span className="ec ec-heart-decoration mx-2"></span>
            <span class="ec ec-shopping-cart mx-2"></span>


          </div>
        </div>
      </nav>
    </div>
  );
}
