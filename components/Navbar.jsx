import React from 'react'

import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div>
                <a href="agenda">Agenda</a>
                <a href="nieuws">Nieuws</a>
                <a href="join-us">Join Us!</a>
            </div>
            <img className={styles.logo} src="/images/SoWhatLogoBlauw.png" alt="logo" />
            <div>
                <a href="fotos">Foto's</a>
                <a href="info">Info</a>
                <a href="contact">Contact</a>
            </div>
        </nav>
    )
}
