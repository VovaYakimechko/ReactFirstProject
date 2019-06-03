import React from 'react';
import PropTypes from "prop-types";

import './Beeer.css';

function Title({title}) {
    return <h2>{title}</h2>;
}

//
// Title.propTypes = {
//     title: PropTypes.string.isRequiered
// };


export default class Beers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: []

        }
        fetch('https://api.punkapi.com/v2/beers')
            .then(response => response.json())
            .then(data => {
                const beer = data
                this.setState({beer})
            })
    }

    render() {
        return <div>
            <h1>Beers</h1>
            {this.state.beer.map(bar =>
                <div key={bar.id}>{'Name: '}{bar.name}
                    <img className="Photo" src={bar.image_url}/>
                    {bar.ingredients.hops.map(h => <div>{h.name}</div>)}
                </div>)}

        </div>
    }
}