import React from 'react';

import Head from 'next/head';

import styles from '../../styles/event.module.css';

import Navbar from '../../components/Navbar.jsx';
import Sharebar from '../../components/Sharebar.jsx';
import Footer from '../../components/Footer.jsx';

export default function Index() {

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
                        <img src="https://picsum.photos/1920/1080" alt="Event image" />
                    </div>

                    <div className={styles.text_container}>
                        <div className={styles.content}>
                            <h1>Event naam</h1>
                            <p>Event datum</p>
                            <p>Andere info die hier bij moet</p>
                        </div>
                    </div>

                    <div className={styles.description}>
                        <div className={styles.content}>
                            <h2>Event beschrijving</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, porro aperiam iusto saepe alias itaque eveniet, velit exercitationem incidunt, error doloribus provident dignissimos similique reprehenderit doloremque? Voluptates, assumenda debitis.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dignissimos quod quia perferendis molestias cum dolores quis aperiam, obcaecati iure voluptatum, qui quas rerum suscipit error adipisci possimus velit esse.</p>
                        </div>
                    </div>

                    <div className={styles.video}>
                        <iframe src="https://www.youtube.com/embed/9bZkp7q19f0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
