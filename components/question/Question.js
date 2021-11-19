import React from 'react';

import styles from './Question.module.css';
import { questions } from '../../data/questions.js';

const interval = 90;

class Question extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            message: '',
            completed: false
        }
        this.completedMessages = new Set();
        this.started = false;
    }

    go() {
        if (this.state.completed) return;

        this.started = !this.started;
        if (this.started) {
            this.messageIndex = 0;
            this._generateMessages();
        } else {
            this._stopMessages();
        }
    }

    _generateMessages() {
        this.timer = setInterval(() => {
            this.setState({ message:  `${questions[this.messageIndex]}....`});

            if (this.messageIndex < questions.length - 1) {
                this.messageIndex += 1;
            } else {
                this.messageIndex = 0;
            }
        }, interval);
    }

    _stopMessages() {
        const item = Math.floor(Math.random() * questions.length);
        if (this.completedMessages.size === questions.length) {
            this.completedMessages = new Set(null);
            this.setState({ completed: true});
            return;
        }

        if (this.completedMessages.has(item)) {
            this._stopMessages();
        } else {
            clearInterval(this.timer);
            this.setState({ message:  `${questions[item]}....`});
            this.completedMessages.add(item);
        }
    }

    render() {
        return (
            <h1 className={styles.title}>
                {(this.state.message === '' && (!this.state.completed)) &&
                    <p className={styles.subtitle}>
                        Click to start....
                    </p>
                }
                {this.state.completed &&
                    <p className={styles.subtitle}>
                        Done!, refresh browser to start again
                    </p>
                }
                {(!this.state.completed) &&
                    <p className={styles.noselect}>
                        {this.state.message}
                    </p>
                }
            </h1>
        );
    }
}

export { Question };
