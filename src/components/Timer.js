import React from "react";



export default class Timer  extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    componentDidMount(){
        this.Timer=setInterval(()=>{
            this.setState({date: new Date()})

        },1000);
    }

    render() {
        return <div>
            {this.state.date.toString()}
        </div>
    }
}