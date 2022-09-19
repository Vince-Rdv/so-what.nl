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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main>

        <Sharebar text="Oeps!" />

        <p>Oeps, hier gaat iets fout. Mocht dit probleem zich voortzetten neem contact op met info@so-what.nl</p>



      </main>

      <Footer />

    </>
  )
}
