import logo from './logo.svg';
// import React from 'react';
import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 12 },
      { id: 2, value: 0 },
      { id: 3, value: 5 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    // console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // this.setState({ counters: counters });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.filter((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() { 
    return (
      <React.Fragment>
    <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
    <main className='container'>
      <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}/>
    </main>
    </React.Fragment>
    );
  }
}
 
export default App;


