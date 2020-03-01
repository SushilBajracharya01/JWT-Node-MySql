import React, { useState } from 'react';

// function Hooks () {
//     const [ answer ] = useState("Yes");

//     return (
//         <div>
//             is State important? {answer}
//         </div>
//     )
// }

// class Hooks extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state ={ 
//             count: 0
//         }

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick () {
//         this.setState(prevState => ({
//             count: prevState.count + 1
//         }));
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.count}
//                 <input type="button" onClick={this.handleClick} value="Click" />
//             </div>
//         )
//     }
// }

function Hooks () {

    const [ count, setCount ] = useState(0);

    function increment() {
        setCount(prevCount => prevCount + 1);
    }

    function decrement() {
        setCount(prevCount => prevCount-1);
    }

    function doubleIt() {
        setCount(prevCount => Math.round(prevCount * 2));
    }

    function halveIt() {
        setCount(prevCount => Math.round(prevCount / 2));
    }
    return (
        <div>
            {count}
            <input type="button" onClick={increment} value="increment" />
            <input type="button" onClick={decrement} value="decrement" />
            <input type="button" onClick={doubleIt} value="doublt It" />
            <input type="button" onClick={halveIt} value="Half it" />
        </div>
    )
}

export default Hooks;