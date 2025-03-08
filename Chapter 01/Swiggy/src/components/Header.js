export default Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1200w/canva-yellow-and-brown-kitchen-food-logo-DRT6KFcL0ts.png"
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
