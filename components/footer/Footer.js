import styles from './Footer.module.css'
import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by Richard van der Molen
                </a>
            </footer>
        )
    }
}

export { Footer };
