import styles from './Navbar.module.css'

export default function Navbar({ children, home }) {
    return (
        <header className={styles.pageHeader}>
            <nav>
                <h1>
                    Sprint Retro Tombola
                </h1>
                <h2>
                    12 Nov 2021
                </h2>
            </nav>
        </header>
    )
}

