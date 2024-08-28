import React, { Component } from 'react';

// Définir une interface pour l'état du composant
interface CounterState {
  count: number;
}

// Composant de classe typé en TypeScript
class Counter extends Component<{}, CounterState> { 
  state: CounterState = {
    count: 0
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
