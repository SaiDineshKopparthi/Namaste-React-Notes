import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super();
    console.log(this.props);
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Missouri</h3>
        <h4>Contact: @dinesh</h4>
      </div>
    );
  }
}

export default UserClass;
