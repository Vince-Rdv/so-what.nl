import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/404.module.css';

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

      <main className={styles.fourzerofour}>

        <h1>404 page not found</h1>
        <p>Deze pagina bestaat niet</p>
        <Link href="/">Terug naar home</Link>



      </main>

    </>
  )
}
