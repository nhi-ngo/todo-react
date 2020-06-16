import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        term: '',
        key: '',
      },
    };
  }

  onInputChange = e => {
    this.setState({ currentItem: { term: e.target.value, key: Date.now() } });
  };

  onFormSubmit = e => {
    e.preventDefault();

    const newItem = this.state.currentItem;
    // console.log(newItem)

    if (newItem.term !== '') {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          term: '',
          key: '',
        },
      });
    }
  };

  render() {
    return (
      <div className="App">
        <form id="to-do-form" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.currentItem.term}
            onChange={this.onInputChange}
            placeholder="Enter Task"
          />
          <button type="submit">Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;

// onSubmit is a function which does three things:
// Cleans the input field after a submit action is triggered, by resetting term to the initial empty string value
// Pushes every term to our array of items after submit
// The preventDefault() method stops the default action of an element from happening.

// 1. add items to the list
// 2. edit items
// 3. delete items
// 4. animate items when created and deleted
