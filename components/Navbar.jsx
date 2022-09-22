import React from 'react'

import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import Script from 'next/script'

import styles from './Navbar.module.css'
import feedbackStyles from '../styles/feedback.module.css'

export default function Navbar() {

    const mobileMenuBar = () => {

        var mobileButton = document.getElementById("mobileButton");
        var mobileMenu = document.getElementById("mobileMenu");
        var navBar = document.getElementById("navContainer");
        var status = mobileMenu.style.left;

        if (status == "0vw") {
            mobileMenu.style.left = "100vw";
            navBar.classList.remove("navContainerOpen");
        } else {
            mobileMenu.style.left = "0vw";
            navBar.classList.add("navContainerOpen");
        }

        console.log("TEST")
    };

    return (
        <>

            <Script src="/scripts/navbar.js" />

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
                <div onClick={mobileMenuBar} id="mobileButton" className={styles.mobileButton}>
                    <div></div>
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

            <div className={feedbackStyles.feedbackButton}>
                <Link href="/feedback">Feedback</Link>
            </div>
        </>
    )
}