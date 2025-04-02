import { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constant";

export default Header = () => {
  const [loginBTN, setLoginBTN] = useState("Login");

  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src={LOGO_URL}
          alt="The logo of the food delivery app"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                loginBTN === "Login"
                  ? setLoginBTN("Logout")
                  : setLoginBTN("Login");
              }}
            >
              {loginBTN}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
