import { LOGO_URL } from "../utils/constant";

export default Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
