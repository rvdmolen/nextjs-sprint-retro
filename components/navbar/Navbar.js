import styles from './Navbar.module.css'

const Navbar = () => {
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

export { Navbar };
