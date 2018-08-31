import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Amanda', age: 29 },
      { name: 'Cliff', age: 34 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = newName => {
    console.log('was clicked!');
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Amanda', age: 27 },
        { name: 'Clifford', age: 34 }
      ]
    });
  };

  nameChandgedHandler = event => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 27 },
        { name: 'Clifford', age: 34 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximillion!!')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChandgedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, "Hi, I'm a react app!!!")
    // );
  }
}

export default App;
