import React from 'react';

import Head from 'next/head';

import Button from './Button.jsx';

import styles from './Event_Card_Wide.module.css';

export default function Index() {

    return (
        <article className={styles.event_card_wide}>
            <div className={styles.image}>
                <img src="https://i.picsum.photos/id/476/1920/1080.jpg?hmac=LJUWF6_MnBx2oZUtOfj0A5ukHb7S4-fEoEhQeicqNP8" alt="header" className={styles.wallpaper} />
            </div>
            <div className={styles.header}>
                <h1>Event naam</h1>
                <h1>01 jan</h1>
            </div>
            <div className={styles.description}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam molestias, totam reprehenderit cupiditate ut eaque, fugit error provident perspiciatis aliquid alias repudiandae sit eum porro at atque optio quam laudantium!</p>
            </div>
            <div className={styles.footer}>
                <Button type="blue" text="Meer info" />
                <Button type="black" text="Tickets" />
                <h1>€ 10,00</h1>
            </div>
        </article>
    )
}