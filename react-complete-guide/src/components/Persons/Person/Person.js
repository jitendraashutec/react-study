import React, {Component} from 'react';
import styled from 'styled-components';
//import './Person.css'

const StyledDiv = styled.div`
        
    width :60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width:500px){
        width: 450px;
    }
`;

class Person extends Component{
    render(){
        console.log('[Person.js] renderring..');
        const rnd = Math.random();
        return (
            //<div className="Person" style={style}>   
            <StyledDiv>
                <p onClick={this.props.click}> I'm a {this.props.name} and i am {this.props.age} years old! </p>
                <p> {this.props.children} </p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </StyledDiv>
        );
    }   
}

export default Person;