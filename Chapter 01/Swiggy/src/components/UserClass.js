import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      count: 10,
      occupation: "SDE",
    };
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: Missouri</h3>
        <h4>Contact: @dinesh</h4>
        <h4>Occupation: {this.state.occupation}</h4>
        <h4>Has ordered {this.state.count} times</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          New Order
        </button>
      </div>
    );
  }
}

export default UserClass;
