import React from 'react'

import Link from 'next/link';
import Image from 'next/image'

import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
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
            <div className={styles.mobileButton}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
            </div>
            <div className={styles.mobileMenu}>
                <div className={styles.header}>

                    <img className={styles.mobileLogo} src="/images/SoWhatLogoWit.svg" alt="logo" />

                    <svg className={styles.closeButton} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                        <path d="M242.7 256L352 146.7c9.4-9.4 9.4-24.6 0-33.9L331.1 96c-9.4-9.4-24.6-9.4-33.9 0L176 205.3 66.7 96c-9.4-9.4-24.6-9.4-33.9 0L9.4 116.9c-9.4 9.4-9.4 24.6 0 33.9L119 256 9.4 365.3c-9.4 9.4-9.4 24.6 0 33.9L30.3 416c9.4 9.4 24.6 9.4 33.9 0L176 306.7l109.3 109.3c9.4 9.4 24.6 9.4 33.9 0l20.9-20.9c9.4-9.4 9.4-24.6 0-33.9L242.7 256z" />
                    </svg>

                </div>
                <Link href="/">Agenda</Link>
                <Link href="/join-us">Join Us!</Link>
                <Link href="/info">Info</Link>
                <Link href="/contact">Contact</Link>

            </div>
        </nav>
    )
}
