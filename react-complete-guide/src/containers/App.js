//import React, { useState } from 'react';
import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] consructor');
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps (props,state){
      console.log('[App.js] getDerivedStateFromProps', props);
      return state;
  }

  // componentWillMount (){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProp,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  componentDidUpdate(){
    console.log('[App.js] conponentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    
    console.log('[App.js] render');
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    
    let persons = null;


    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    return (
      <div className="App">
        <button 
          onClick={() => {
            this.setState({showCockpit:false})}}>Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          /> 
        ) :null }
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

// const App = props => {
//   const [ personsState,setPersonsState ] = useState({
//     persons:[
//       {name: 'nancy', age: 24 },
//       {name: 'dhara', age: 20 },
//       {name: 'nita', age: 45 }
//     ]
//   });

//   const [otherState, setOtherState] = useState('some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () =>{
//         //console.log('Was clicked');
//         //this.state.persons[0].name = 'Nancy';
    
//         setPersonsState({
//           persons:[
//             {name: 'nancy Rajput', age: 24 },
//             {name: 'dhara', age: 20 },
//             {name: 'nita', age: 44 }
//           ]
//         })
//       }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hi, I am React App</h1>
//         <p>This is really Working!!</p>
//         <button onClick={switchNameHandler}> Swtich Name </button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age} > My hobbies: writting</Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//       </header>
//     </div>
//   );
//   //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work Now?'));
// }