import React from 'react';

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

import Head from 'next/head';

import styles from '../styles/blocks.module.css';

import Navbar from '../components/Navbar.jsx';
import Sharebar from '../components/Sharebar.jsx';
import Footer from '../components/Footer.jsx';

export default function Index() {
    return (
        <>
            <Head>
                <title>So What! - Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />

            <main>

                <Sharebar text="Terug naar home" />

                <div className={styles.grid}>

                    <div className={`${styles.block} ${styles.small}`}>
                        <h1>Contact</h1>
                        {/* Contact form */}
                        <form action="" method="POST" className={styles.form}>
                            <label htmlFor="name">Naam <span>*</span></label>
                            <input type="text" name="name" id="name" placeholder="Naam" required />

                            <label htmlFor="email">Email <span>*</span></label>
                            <input type="email" name="email" id="email" placeholder="Email" required />

                            <label htmlFor="phone">Telefoon</label>
                            <input type="tel" name="phone" id="phone" placeholder="Telefoon" />

                            <label htmlFor="message">Bericht <span>*</span></label>
                            <textarea name="message" id="message" placeholder="Bericht" required></textarea>

                            <input type="submit" value="Verstuur" />

                            <label> <span>*</span> = verplicht</label>
                        </form>

                    </div>

                    <div className={`${styles.block} ${styles.small}`}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1300.9979080305288!2d4.707783186107459!3d52.00766432000796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x661f74f492a1fb46!2sSo%20What*21!5e0!3m2!1sen!2snl!4v1663501512234!5m2!1sen!2snl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className={`${styles.block} ${styles.large}`}>

                        <h1>Contact specifieke commisies</h1>

                        <h2>PRODUCTIE</h2>
                        <p>So What! is voor zijn producties volledig afhankelijk van vrijwillige krachten. Deze zijn het snelst te bereiken via e-mail</p>

                        <ul>
                            <li>Techniek - techniek@so-what.nl</li>
                            <li>Programmering en productie - programmering@so-what.nl</li>
                            <li>Financieel - penningen@so-what.nl</li>
                        </ul>

                        <p>So What! is tijdens openingstijden telefonisch bereikbaar. Maandag tot vrijdag zijn we bereikbaar van 20.00 tot 22.00</p>

                        <p>Telefoon: (0182) 519232<br/>Fax:      (0182) 513394</p>

                        <h2>Bankgegevens</h2>
                        <p>Rabobank: NL 21 rabo 0322 4051 73<br/>KVK: 41172127</p>

                    </div>

                </div>

            </main>

            <Footer />

        </>
    )
}

