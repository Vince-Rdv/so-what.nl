import React from 'react'

import Image from 'next/image'

import styles from './Header.module.css'

import Button from './Button.jsx'

export default function Header(props) {

    var event = props.event;

    var eventDate = new Date(event.date.startDoors);
    var day = eventDate.getDate();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = months[eventDate.getMonth()];

    var infoLink = "/event/" + event.id;
    var ticketLink = "/ticket/" + event.id;

    return (
        <header className={styles.header}>
            <div className={styles.wallpaper}>
                <Image layout="fill" objectFit='cover' src={event.publicity.image} alt="header" />
            </div>
            <div className={styles.textBlock}>
                <h2>{day} {month}</h2>
                <h1>{event.publicity.title}</h1>
                <div className={styles.buttons}>
                    <Button type="blue" text="Meer info" link={infoLink}/>
                    <Button type="white" text="Tickets" link={ticketLink}/>
                </div>
            </div>
        </header>
    )
}
