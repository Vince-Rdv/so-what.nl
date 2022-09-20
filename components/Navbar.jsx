import React from 'react'

import Link from 'next/link';
import Image from 'next/image'
import Script from 'next/script'

import styles from './Navbar.module.css'
import feedbackStyles from '../styles/feedback.module.css'

export default function Navbar() {
    return (
        <>
            <nav id="navContainer" className={styles.nav}>
                <div className={styles.links}>
                    <Link href="/">Home</Link>
                    <Link href="/join-us">Join Us!</Link>
                </div>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image layout="fill" objectFit='contain' src="/images/SoWhatLogoBlauw.png" alt="logo" />
                    </Link>
                </div>
                <div className={styles.links}>
                    <Link href="/info">Info</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div id="mobileButton" className={styles.mobileButton}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div id="mobileMenu" className={styles.mobileMenu}>

                    <Link href="/">Agenda</Link>
                    <Link href="/join-us">Join Us!</Link>
                    <Link href="/info">Info</Link>
                    <Link href="/contact">Contact</Link>

                </div>
            </nav>

            <Script src="/scripts/navbar.js" />

            <div className={feedbackStyles.feedbackButton}>
                <Link href="/feedback">Feedback</Link>
            </div>
        </>
    )
}
