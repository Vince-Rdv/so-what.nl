import React from 'react'

import styles from './Header.module.css'

import Button from './Button.jsx'

export default function Header() {
    return (
        <header className={styles.header}>
            <img src="https://i.picsum.photos/id/476/1920/1080.jpg?hmac=LJUWF6_MnBx2oZUtOfj0A5ukHb7S4-fEoEhQeicqNP8" alt="header" className={styles.wallpaper} />
            <div className={styles.textBlock}>
                <h2>01 Jan</h2>
                <h1>Super tof evenement!</h1>
                <div className={styles.buttons}>
                    <Button type="blue" text="Meer info" />
                    <Button type="white" text="Tickets" />
                </div>
            </div>
        </header>
    )
}
