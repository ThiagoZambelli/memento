import React from 'react'
import { BiCopyright } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styles from './SideCopyrigth.module.scss';

function SideCopyrigth() {
    return (
        <section className={styles.copy}>
            <p><BiCopyright /> Copyright - Thiago Zambelli</p>
        </section>
    )
}

export default SideCopyrigth