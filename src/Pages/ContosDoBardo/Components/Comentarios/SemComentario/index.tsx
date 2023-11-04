import React from 'react'
import styles from  './SemComentario.module.scss';
import {MdOutlineSpeakerNotesOff} from 'react-icons/md'

function SemComentario() {
  return (
    <section className={styles.semComentario}>
        <h2><MdOutlineSpeakerNotesOff /> Seja o primeiro a comentar!</h2>
    </section>
  )
}

export default SemComentario