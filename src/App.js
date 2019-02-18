import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import './Person/Person.css';
// import Radium, { StyleRoot } from 'radium';
// import UserInput from './UserInput/UserInput.js';
// import './UserOutput/UserOutput.css';
// import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "A", age: "20" },
      { id: "2", name: "B", age: "21" },
      { id: "3", name: "C", age: "22" }
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   //alert('clicked!');
  //   //this.state.persons[1].name = "BBBB";
  //   this.setState({
  //     persons: [
  //       { name: "newAswitch", age: "20" },
  //       { name: newName, age: "21" },
  //       { name: "newCswitch", age: "22" }
  //     ]
  //   });
  // }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  // state = {
  //   userName : [
  //     {usr: "abc"}
  //   ]
  //   }

  // usernameChangedHandler = (event) => {
  //   this.setState({
  //     userName : [
  //       {usr: event.target.value}
  //     ]
  //   });
  // }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    }

    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px'
    // }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name}
              age={Person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }
    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      // <StyleRoot>
        <div className="App">
          <h1>React App</h1>
          <p className={classes.join(' ')}>It works</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle</button>
          {persons}



          {/* <UserOutput name={this.state.userName[0].usr}/>
        <UserOutput name={this.state.userName[0].usr}/>
        <UserInput style={style} usrfnc = {this.usernameChangedHandler} name={this.state.userName[0].usr}/> */}


        </div>
      // </StyleRoot>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'My React App!'));
  }
}

// export default Radium(App);
export default App;