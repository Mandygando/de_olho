import Pagina from '@/components/Pagina'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@/components/Card';
import Head from 'next/head';

const index = () => {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
    </Head>
    <Pagina>
      <br/>
      <Row>
          <Col md={6} className='text-white '>
              <h2>De Olho nos Gastos:<br></br>Fiscalizando as<br></br>Despesas dos<br></br>Deputados Brasileiros</h2>
          </Col>
          <Col></Col>
      </Row>
      <br></br>
      <Button className='bg-secondary text-white
      ' variant='outline-dark'>Explore</Button>

      <section>
            <Card />
      </section>
    </Pagina>
    </>
  )
}

export default index