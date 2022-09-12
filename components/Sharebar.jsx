import React from 'react'

import styles from './Sharebar.module.css'

import Button from './Button.jsx'

export default function Navbar(props) {

    var text = props.text;

    return (
        <div className={styles.bar}>
            <h1>{text}</h1>
            <Button text="Share" type="blue" />
        </div>
    )
}
