import React, { useEffect } from 'react';
import './Cockpit.css';
import styled from 'styled-components';

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

const Cockpit = (props) => {
   useEffect(() =>{
       console.log('[Cockpit.js] useEffect');
       setTimeout(() =>{
            alert('Save Data to cloud!');
       }, 1000);
       return () =>{
           console.log('[Cockpit.js] cleanUp work in useEffect');
       };
    }, []);

    useEffect(() =>{
        console.log('[Cockpit.js] 2nd useEffect');
        return () =>{
            console.log('[Cockpit.js] cleanUp work in 2nd useEffect');
        };
    });


    const classes = [];
    if (props.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }
    
    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <StyledButton alt={props.showPersons} onClick={props.clicked}>
                Toggle Persons
            </StyledButton>
        </div>
    );
};

export default Cockpit;