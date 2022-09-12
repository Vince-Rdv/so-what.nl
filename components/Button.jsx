import React from 'react'

import styles from './Button.module.css'


export default function Button(props) {

    // Get id of button
    const type = props.type;
    const text = props.text;

    return (
        <a href="#" className={styles[type]}>{text}</a>
    )
}