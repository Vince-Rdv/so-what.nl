import React from 'react'

import Link from 'next/link';
import Image from 'next/image'

import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div>
                <Link href="/">Agenda</Link>
                <Link href="/join-us">Join Us!</Link>
            </div>
            <div className={styles.logo}>
                <Image layout="fill" objectFit='contain' src="/images/SoWhatLogoBlauw.png" alt="logo" />
            </div>
            <div>
                <Link href="/info">Info</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    )
}
