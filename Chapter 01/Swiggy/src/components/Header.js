import { useState } from "react";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
