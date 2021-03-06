import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/navbar/Navbar.js';
import { Footer } from '../components/footer/Footer.js';
import { Question } from '../components/question/Question.js';


export default function Home() {

    let question = {};
    const _clickWrapper = () => {
        question.go();
    }

    return (
        <div className={styles.wrapper}>

            <Head>
                <title>Sprint retro tombola</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar/>

            <div className={styles.questionContainer} onClick={_clickWrapper}>
               <Question ref={instance => { question = instance; }}/>
            </div>

            <Footer className={styles.footer}/>

        </div>
    )
}
