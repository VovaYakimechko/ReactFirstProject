import React from "react";
import move from "move-js";

export default class Move extends React.Component {


    componentDidMount() {
        setTimeout(() => {
            move(this.el)
                .to(500, 200)
                .duration("2s")
                .end();
        },0);
    }
    render() {
        return <div ref={el => (this.el = el)}>{this.props.children}</div>;
    }
}