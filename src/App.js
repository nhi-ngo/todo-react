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

  onIconClick = key => {
    const filteredItems = this.state.items.filter(item => item.key !== key);

    this.setState({
      items: filteredItems,
    });
  };

  onInputUpdate = (term, key) => {
    const { items } = this.state;

    items.map(item => {
      if (item.key === key) {
        item.term = term;
      }
    });

    this.setState({
      items,
    });
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
        <List items={this.state.items} onIconClick={this.onIconClick} onInputUpdate={this.onInputUpdate} />
      </div>
    );
  }
}

export default App;

// 1. add items to the list ✅
// 2. edit items ✅
// 3. delete items ✅
