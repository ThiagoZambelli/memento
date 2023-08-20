import React from 'react'
import { BiCopyright } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styles from './SideCopyrigth.module.scss';

function SideCopyrigth() {
    return (
        <section className={styles.copy}>
            <p><BiCopyright /> Copyright - <Link to={"https://www.linkedin.com/in/thiagozambelli/"}>Thiago Zambelli</Link></p>
        </section>
    )
}

export default SideCopyrigth