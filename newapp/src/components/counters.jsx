import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;

    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            key={counter.id}
            counter={counter}
            // id={counter.id}
            // value={counter.value}
            // selected={counter.value <= 0 ? false : true}
          >
            {/* <h4>Title</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
