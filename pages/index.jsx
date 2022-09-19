import React from 'react';

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

import Head from 'next/head';

import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Sharebar from '../components/Sharebar.jsx';
import Event_Card_Wide from '../components/Event_Card_Wide.jsx';
import Footer from '../components/Footer.jsx';

export default function Index() {

  const { data, error } = useSWR('/api/upcommingEvents', fetcher);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  
  if(data){

    var eventsData = JSON.parse(data);

    var events = [];
    
    // Check if any event starts within 8 hours or is currently running
    var highlightedEvent;
    for(var i = 0; i < eventsData.length; i++){
      var event = eventsData[i];
      var eventDate = new Date(event.date);
      var currentDate = new Date();
      var diff = eventDate - currentDate;
      var diffHours = diff / 1000 / 60 / 60;
      if(diffHours < 8){
        highlightedEvent = event;
        console.log("Found highlighted event");
        break;
      }
    }
    if(!highlightedEvent){
      // Get event with highest event.id variable
      var highestId = 0;
      for(var i = 0; i < eventsData.length; i++){
        var event = eventsData[i];
        console.log(event.id);
        if(event.id > highestId){
          highestId = event.id;
          highlightedEvent = event;
        }
      }
    }

    for (var x = 0; x < eventsData.length; x++) {
      events.push(<Event_Card_Wide event={eventsData[x]} />);
    }

  
    return (
      <>
        <Head>
          <title>So What! - Home</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
  
        <Navbar />
        <Header event={highlightedEvent} />
  
        <main>
          
          <Sharebar text="Aankomende evenementen" />
  
          {events}
  
        </main>
  
        <Footer />
  
      </>
    )

  }
}

