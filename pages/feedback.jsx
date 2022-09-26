import React from 'react';

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

import Head from 'next/head';

import styles from '../styles/blocks.module.css';
import feedbackStyle from '../styles/feedback.module.css';

import Navbar from '../components/Navbar.jsx';
import Sharebar from '../components/Sharebar.jsx';
import Footer from '../components/Footer.jsx';

export default function Index() {

    return (
        <>
            <Head>
                <title>So What! - Info</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />

            <main>

                <Sharebar text="Terug naar home" />

                <div className={styles.grid}>

                    <div className={`${styles.block} ${styles.large}`}>
                        <h1>Feedback</h1>
                        <p className={feedbackStyle.red}>Let op, deze pagina wordt alleen tijdens deze demo gebruikt, eventuele designproblemen hoeven niet aangekaart te worden</p>

                        <p>Heb je een vraag, opmerking of suggestie? Laat het me weten! Vul het formulier hieronder in!</p>
                        <a href="https://forms.gle/76WvzZ35WKrwXVs6A" target="_blank" rel="noopener noreferrer">Formulier</a>

                        <p>Heb je nou een vraag over een ontwerp, een idee voor iets, of wil je gewoon iets kwijt over de website of het leven. Kan je me uiteraard mailen of appen</p>

                        <p>Mocht je nou een foutmelding ergens krijgen, kopieer dan alsjeblieft de volledige melding en stuur deze door via de mail. Ook zou het fijn zijn als je een korte beschrijving geeft van wat je hebt gedaan</p>
                        
                        <h2>Bekende problemen:</h2>
                        <ul>
                            <li>Evenementen worden vanaf openingsfeest alsnog gezien, ook al zijn deze al geweest. Dit om de evenementenlijst wat langer te maken, om eventuele problemen tegen te komen</li>
                            <li>Homepagina evenementen hebben lorem ipsum neptekst, dit is vanwege dat ik samen met marketing nog geen concreet plan heb hoe deze gevuld gaat worden vanuit de beschrijvingen, en deze nu dus chaotisch vol zou raken</li>
                            <li>Footer (dat ding beneden) komt verder omhoog wanneer de pagina niet hoog genoeg is, wat je mogelijk ziet op deze pagina</li>
                            <li>Evenementenpagina&quot;s hebben een wat vreemde indeling, dit is bewust gedaan om te laten zien wat er mogelijk is. Uiteraard wordt bijvoorbeeld de 8 bit christmas video vervangen met een eventuele video van de band, een foto van een vorige editie of iets totaal anders, liggend aan het evenement</li>
                            <li>Header is standaard Zoete Zin, dit wegens dat op dit moment de afbeeldingen standaard nog vaak tekst e.d. bevatten, en hierdoor de knoppen niet goed uitkomen. Zoete zin heeft een foto waar deze knoppen beter uitkomen. Hier wordt uiteraard nog mee geexperimenteerd</li>
                            <li>Foto's worden nog ingeladen van AWS (stager servers). Deze worden uiteindelijk automatisch gedownload, gecomprimeerd en gehost Hierdoor kan het dat deze op dit moment iets trager inladen</li>
                        </ul>

                    </div>

                </div>

            </main>

            <Footer />

        </>
    )
}

