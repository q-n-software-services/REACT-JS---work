import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // imageUrl: "https://picsum.photos/200",
  //   tags: ["tag1", "tag2", "tag3"],
  //   id: this.props.counter.id,
  // };

  renderTags() {
    if (this.state.tags.length === 0) return <h2>There are No Tags!</h2>;

    return (
      <ul>
        {" "}
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // Camel case Notation used only for styles names
  styles = {
    fontSize: 20,
    forntWeight: "bold",
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = (ProdId) => {
  //   console.log(ProdId);
  //   this.setState({ value: this.state.value + 1 });
  // };

  // handleDecrement = (ProdId) => {
  //   this.setState({ value: this.state.value - 1 });
  // };

  render() {
    // console.log("props", this.props); 
    return (
      // <React.Fragment></React.Fragment>
      <div>
        {/* {this.props.children} */}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          style={{ fontSize: 22 }}
          className="btn btn-danger btn-sm m-1"
        >
          {"   "}
          <h1>&nbsp;&nbsp;-&nbsp;&nbsp;</h1>
          {"   "}
        </button>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 22 }}
          className="btn btn-success btn-sm m-1"
        >
          {"   "}
          <h1>&nbsp;&nbsp;+&nbsp;&nbsp;</h1>
          {"   "}
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          style={{ fontSize: 22 }}
          className="btn btn-light btn-sm m-1"
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-1 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: value } = this.props.counter;
    return value === 0 ? <h1>Zero</h1> : <h1>{value}</h1>;
  }
}

export default Counter;
