import Menu from '@/components/Menu/Index'
import Pagina from '@/components/Pagina'
import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const index = () => {
  return (
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
    </Pagina>
  )
}

export default index