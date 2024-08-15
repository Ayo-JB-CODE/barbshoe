import React from 'react';
import styles from './Button.module.css';

const Button = ({ content }) => {
    return (
        <div>
            <button className={styles.button}>{content}</button>
        </div>
    )
}

export default Button