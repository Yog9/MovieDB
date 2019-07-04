import React from "react";

function Navbar(props) {
  return (
    <div>
      <ul className="nav justify-content-start">
        <li className="nav-item">
          <a className="nav-link text-white font-weight-bold" href="#">
            TMDb Movie Search App
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
