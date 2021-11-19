import styles from './Question.module.css';
import React, { useEffect, useState } from 'react';


// class Question extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.props.myprop}</h2>
//             </div>
//         );
//     }
// }
let index = 0;


const Question = ({onRef, foo}) => {

    const [value, setValue] = useState("value")

    const generateQuestion = () => {
        console.log('hi');
        index++;
    };

    useEffect(() => {
        //onRef(generateQuestion);
        console.log('dscdddscs');
    });

    function clickMe() {
        index++;
        setValue(index);
        console.log('clicked');
        console.log(index);
    }

    return (
        <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
            <p>{value}</p>

            <button onClick={clickMe}>HELLO</button>
        </h1>
    )
}

export {Question};
