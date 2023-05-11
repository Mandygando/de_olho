import Link from 'next/link'
import React from 'react'
import styles from './Menu.module.css'
import logo from './logo.png'
import Image from 'next/image'

const Menu = () => {
  return (
    <nav className={styles.menu}>
    <div className={styles.containerLogo}>
        <Link href={'/'}>
            <Image
            src={logo}
            />
        </Link>
        <p className={styles.titulo}>De Olho</p>
    </div>
    <div className={styles.links}>

        <Link href={'/home'} className={styles.link}>
            Home
        </Link>

        <Link href={'/ranking'} className={styles.link}>
            Ranking
        </Link>

        <Link href={'/quemsomos'} className={styles.link}>
            Quem Somos
        </Link>
    </div>
</nav>
  )
}

export default Menu