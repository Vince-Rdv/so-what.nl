import React from 'react';

import Head from 'next/head';

import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Event_Card_Wide from '../components/Event_Card_Wide.jsx';
import Footer from '../components/Footer.jsx';

export default function Index() {

  var events = [];
  for(var x = 0; x < 10; x++){
    events.push(<Event_Card_Wide />);
  }

  return (
    <>
      <Head>
        <title>So What! - Home</title>
      </Head>

      <Navbar />
      <Header />

      <main>

        {events}
        
      </main>

      <Footer />

    </>
  )
}
