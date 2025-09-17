import React from "react";

class Person extends React.Component {
  constructor() {
    super();
    this.state = { name: "John Doe", age: 25};
    this.click = this.click.bind(this);
  }

    click = () => {
        alert(this.state.name, ", "  , this.state.age)
    }

  render() {
    return (
      <div>
        <h2>Person Info</h2>
        <button onclick={this.click}>Click Me</button>
        <p>Name: {this.state.name}</p> 
        <p>Age: {this.state.age}</p>
      </div>
    );
  }
}

export default Person;