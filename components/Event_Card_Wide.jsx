import React from 'react';

import Head from 'next/head';

import Button from './Button.jsx';

import styles from './Event_Card_Wide.module.css';

export default function Index(props) {

    var event = props.event;

    var eventDate = new Date(event.date.startDoors);
    var month = eventDate.toLocaleString('default', { month: 'short' });
    month = month.replace(".", "");	
    var day = eventDate.getDate();

    var price = "€ " + (event.other.highestPrice / 100).toFixed(2);

    if(event.other.highestPrice == 0){
        price = "Gratis";
    }
    if(!event.other.internalEvent){
        price = "";
    }

    var infoLink = "/event/" + event.id;
    var ticketLink = "/ticket/" + event.id;

    return (
        <article className={styles.event_card_wide}>
            <div className={styles.image}>
                <img src={event.publicity.image} alt="header" className={styles.wallpaper} />
            </div>
            <div className={styles.header}>
                <h1>{event.publicity.title}</h1>
                <h1>{day} {month}</h1>
            </div>
            <div className={styles.description}>
                <h3>{event.publicity.subtitle}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam modi nam qui dolorum dolor, neque ipsam placeat! Animi, a! Iste, inventore corporis. Sunt numquam reprehenderit ducimus veniam quae, dolore ipsam.</p>
            </div>
            <div className={styles.footer}>
                <Button type="blue" text="Meer info" link={infoLink} />
                <Button type="black" text="Tickets" link={ticketLink} />
                <h1>{price}</h1>
            </div>
        </article>
    )
}