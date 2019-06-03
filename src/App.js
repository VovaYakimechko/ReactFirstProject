import React from 'react';


import './App.css';
// import StarWarsPeople from './components/StarWarsPeople'
// import Beer from './components/Beers'
//  import Gallery from "./components/Gallery";
// import Move from "./components/Move";
// import Timer from "./components/Timer";
// import Todos from "./components/Todos";
import ReduxCounter from "./components/ReduxCounter";

class App extends React.Component {

    render() {
        return <ReduxCounter />
    }



    // constructor(props) {
    //     super(props)
    //
    //     this.state = {
    //         arr: [{name: 'petor'}, {name: 'vasya'}, {name: 'vova'}, {name: 'misha'}, {name: 'petro'}],
    //     }
    // }
    //
    // render() {
    //     return <Move> jnb nm</Move>
    // }

    // {
//         return (
//             <ul>
//                 {this.state.arr.map((number) =>
//                     <li>{number.name}</li>
//                 )}
//                 {/*<Beer/>*/}
//                 {/*<StarWarsPeople/>*/}
//                 <Gallery
//                     videos={[
//                         'https://i.imgur.com/0ziBKZw.mp4',
//                         'https://i.imgur.com/YG5X1PE.mp4'
//                     ]}/>
//
//                 <Gallery
//                     videos={[
//                         'https://i.imgur.com/0ziBKZw.mp4',
//                         'https://i.imgur.com/YG5X1PE.mp4'
//                     ]}/>
//
//             </ul>
//         )
//     }
// }
//
}

export default App;