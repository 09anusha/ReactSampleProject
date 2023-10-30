import React, { Component } from "react";

export class Show extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Anusha",
    };
  }

  handleClick = () => {
    this.setState({
      name: "Anu",
    });
  };

  render() {
    return (
      <div>
        <h1>I am changing the name</h1>
        <h2>{this.state.name}</h2>
        <button onClick={this.handleClick}> Click To Change</button>
      </div>
    );
  }
}

export default Show;
