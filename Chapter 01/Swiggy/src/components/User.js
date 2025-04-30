const User = ({ name }) => {
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Missouri</h3>
      <h4>Contact: @dinesh</h4>
    </div>
  );
};

export default User;
