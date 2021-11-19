import React, { useEffect, useState } from 'react';

import styles from './Question.module.css';

// const QuestionNew = (props) => {
//     // const [date, setDate] = useState(new Date());
//     //
//     // const tick  = () => {
//     //     setDate(new Date());
//     // }
//     //
//     useEffect(() => {
//         console.log('value is changed');
//     });
//
//     console.log(props);
//
//     return (
//         <div>
//             <h1>Hello, world from new Questoin!</h1>
//             {props.myprop}
//         </div>
//     )
// }

class QuestionNew extends React.Component {

    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    increment() {
        let { count } = this.state;
        count = count + 1;
        this.setState({ count });
    }

    render() {
        return (
            <h1 className={styles.title}>
                <p>{this.props.myprop}</p>
                <p>{this.state.count}</p>
            </h1>
        );
    }
}

export { QuestionNew };
