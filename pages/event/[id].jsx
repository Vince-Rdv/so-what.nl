import React from 'react';
import { useRouter } from 'next/router';

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

import Head from 'next/head';
import Image from 'next/image';

import styles from '../../styles/event.module.css';

import Navbar from '../../components/Navbar.jsx';
import Sharebar from '../../components/Sharebar.jsx';
import Button from '../../components/Button.jsx';
import Footer from '../../components/Footer.jsx';

export default function Index(props) {

    const router = useRouter();
    const { id } = router.query;

    const { data, error } = useSWR('/api/upcommingEvents', fetcher);

    if (error) return <div>failed to load</div>
    if (!data) return null;
    if (data) {

        // Loop through all events and find the one with the same id as the one in the url
        var eventsData = JSON.parse(data);
        var event;
        for (var i = 0; i < eventsData.length; i++) {

            if (eventsData[i].id == id) {
                event = eventsData[i];
                break;
            }

        }

        if (event) {

            // return JSON.stringify(event);

            var startDoors = new Date(event.date.startDoors);
            var deurOpen = startDoors.getHours() + ":" + startDoors.getMinutes();

            var leeftijd = event.ageRestriction;
            if (!leeftijd) {
                leeftijd = "18+";
            }

            var descriptionTemp = event.publicity.description;
            descriptionTemp = descriptionTemp.split("\n");

            var description = [];
            for (var i = 0; i < descriptionTemp.length; i++) {
                description.push(<p>{descriptionTemp[i]}</p>);
            }

            var ticketText = "";

            for (var x = 0; x < event.tickets.length; x++) {
                if (event.tickets[x].price > 0) {
                    if (ticketText.length > 0) {
                        ticketText += " - ";
                    }
                    ticketText += event.tickets[x].name + " €" + (event.tickets[x].price / 100).toFixed(2) + " ";
                }
            }
            if (ticketText == "") {
                ticketText = "Gratis";
            }

            var ticketLink = "/ticket/" + event.id;

            return (
                <>
                    <Head>
                        <title>So What! - Home</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                    </Head>

                    <Navbar />

                    <main>

                        <Sharebar text="Terug naar overzicht" />

                        <div className={styles.event}>

                            <div className={styles.image_container}>
                                <Image layout="fill" objectFit='cover' src={event.publicity.image} alt="Event image" />
                            </div>

                            <div className={styles.text_container}>
                                <div className={styles.content}>
                                    <h1>{event.publicity.title}</h1>
                                    <h1 className={styles.black}>Donderdag 26 augustus</h1>
                                    <h1>Leeftijd: {leeftijd}</h1>
                                    <h1>Deur open: {deurOpen}</h1>
                                </div>
                            </div>

                            <div className={styles.cta}>
                                <p>{ticketText}</p>
                                <Button text="Tickets" link={ticketLink} type="white" />
                            </div>

                            <div className={styles.description}>
                                <div className={styles.content}>
                                    <h2>Beschrijving</h2>
                                    <p>{description}</p>
                                </div>
                            </div>

                            <div className={styles.video}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/2intQ4OTv10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                            <div className={styles.info}>
                                <div className={styles.content}>
                                    <h2>Extra informatie</h2>
                                    <p>Wat hier precies gaat komen weten we nog niet zo zeer. In ieder geval de bekropte versie van de huisregels (denk niet roken enzo). Daarnaast mogelijk wat extra informatie bij speciale evenementen zoals CBI en eetcafe&apos;s</p>
                                </div>
                            </div>

                        </div>



                    </main>

                    <Footer />

                </>
            )
        }
    }
}
