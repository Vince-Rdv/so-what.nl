import React from 'react';

import Head from 'next/head';

import styles from '../styles/event.module.css';

import Navbar from '../components/Navbar.jsx';
import Sharebar from '../components/Sharebar.jsx';
import Footer from '../components/Footer.jsx';

export default function Index() {

  return (
    <>
      <Head>
        <title>So What! - Home</title>
      </Head>

      <Navbar />

      <main>

        <Sharebar text="Genre?" />

        <div className={styles.event_info}>

          <div className={styles.header}>
            <div className={styles.image_container}>
              <img src="https://picsum.photos/1920/1080" alt="Event image" />
            </div>
            <div className={styles.text_container}>
              <h1>Event naam</h1>
              <p>Event datum</p>
              <p>Andere info die hier bij moet</p>
            </div>
          </div>

          <div className={styles.description}>
            <h2>Event beschrijving</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, porro aperiam iusto saepe alias itaque eveniet, velit exercitationem incidunt, error doloribus provident dignissimos similique reprehenderit doloremque? Voluptates, assumenda debitis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dignissimos quod quia perferendis molestias cum dolores quis aperiam, obcaecati iure voluptatum, qui quas rerum suscipit error adipisci possimus velit esse.</p>
          </div>

        </div>



      </main>

      <Footer />

    </>
  )
}
