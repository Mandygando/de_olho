import Image from 'next/image'
import React from 'react'
import deputado from './deputado.png'
import styles from './Card.module.css'

const Card = () => {
  return (
    <div className={styles.card}>
        <div>
        <Image
            src={deputado}
            className={styles.imagemDeputado}
            />
        </div>
        <div>
            <h3 className={styles.titulo}>Afonso Motta</h3>
        </div>
        
    </div>
  )
}

export default Card