import React from 'react'

import styles from './Button.module.css'


export default function Button(props) {

    // Get id of button
    const type = props.type;
    const text = props.text;
    const link = props.link;

    return (
        <a href={link} className={styles[type]}>{text}</a>
    )
}