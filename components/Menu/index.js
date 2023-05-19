import Link from 'next/link'
import React from 'react'
import styles from './Menu.module.css'
import logo from './logo.png'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap'


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

        <Link href={'/'} className={styles.link}>
            Home
        </Link>

        <Link href={'/ranking'} className={styles.link}>
            Ranking
        </Link>

        <Link href={'/quemsomos'} className={styles.link}>
            Quem Somos
        </Link>

    <Form variant="" className="d-flex">
            <Form.Control
              variant="outline-dark"
              type="search"
              placeholder="Search"
              className="me-2 outline-dark bg-dark"
              aria-label="Search"
            />
          </Form>
   
    </div>
 

</nav>
  )
}

export default Menu