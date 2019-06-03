import React from 'react';


export default class StarWarsPeople extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            people: []

        }
        fetch('https://swapi.co/api/people')
            .then(response=>response.json())
            .then(data=>{
            const people = data.results
                this.setState({people})
        })
    }

    render(){
        return <div>
            <h1>StarWarsPeople</h1>
            {this.state.people.map(person => <div key={person.name}>{'Name: '}{person.name},{' mass:'}{person.mass}</div>)}
        </div>
    }
}