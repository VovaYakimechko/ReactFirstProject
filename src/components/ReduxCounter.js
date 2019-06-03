import React from "react";
import store,{increase,discrease} from "./Redux";
import Timer from "./Timer"
export default class ReduxCounter extends React.Component{
    render(){
        return <div><Timer /></div>
    }

}