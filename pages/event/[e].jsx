import React from 'react';
import {useRouter} from 'next/router';

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

import Head from 'next/head';

import styles from '../../styles/event.module.css';

import Navbar from '../../components/Navbar.jsx';
import Sharebar from '../../components/Sharebar.jsx';
import Footer from '../../components/Footer.jsx';

export default function Index(props) {

    const router = useRouter();
    const { e } = router.query;

    const { data, error } = useSWR('/api/upcommingEvents', fetcher);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    if (data) {

        // Loop through all events and find the one with the same id as the one in the url
        var eventsData = JSON.parse(data);
        var event;
        for (var i = 0; i < eventsData.length; i++) {
            if (eventsData[i].id == e) {
                event = eventsData[i];
                break;
            }
        }
        
        return (
            <>
                <Head>
                    <title>So What! - Home</title>
                </Head>

                <Navbar />

                <main>

                    <Sharebar text="Terug naar overzicht" />

                    <div className={styles.event}>

                        <div className={styles.image_container}>
                            <img src={event.publicity.image} alt="Event image" />
                        </div>

                        <div className={styles.text_container}>
                            <div className={styles.content}>
                                <h1>{event.publicity.title}</h1>
                            </div>
                        </div>

                        <div className={styles.description}>
                            <div className={styles.content}>
                                <h2>Event beschrijving</h2>
                                <p>{event.publicity.description}</p>
                            </div>
                        </div>

                        <div className={styles.video}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/2intQ4OTv10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className={styles.info}>
                            <div className={styles.content}>
                                <h2>Extra informatie</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, porro aperiam iusto saepe alias itaque eveniet, velit exercitationem incidunt, error doloribus provident dignissimos similique reprehenderit doloremque? Voluptates, assumenda debitis.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dignissimos quod qu</p>
                            </div>
                        </div>

                    </div>



                </main>

                <Footer />

            </>
        )
    }
}
