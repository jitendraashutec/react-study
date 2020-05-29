import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component{

    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getyDerivedStateFromProps',props);
    //     return state;
    // }

    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReciveProps',props);
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProp,prevState){
        console.log('[Persons.js] getSnapshitBeforeUpdate');
        return {message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){
        console.log('[Person.js] randarring....');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={event => this.props.changed(event, person.id)}
                />
            );
        });
    }
}

export default Persons;
