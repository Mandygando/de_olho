import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import Link from 'next/link'
import { AiFillGithub,AiOutlineInstagram,AiFillLinkedin } from 'react-icons/ai';


const Rodape = () => {
  return (
    <div style={{backgroundColor:'#202632', width:"100%"}} className=' text-white text-center  bottom-0'>
      <Row className='p-5'>
        <Col md={6} className='text-center'>
         <h2><img width={60} src='/images/logo.png'/>  De Olho</h2>
         <br></br>
         <h5>Acesse nossas redes<Link className='text-decoration-none text-white p-2' href='https://github.com/Mandygando/de_olho'> <AiFillGithub/></Link><AiOutlineInstagram/>  <AiFillLinkedin/></h5> 
        </Col>
        <Col md={6} className='text-center'>
          <h5>Made in CeiLondres</h5>
          <>Projeto Desenvolvido para fins educativos e estatísticos0</>

        </Col>
      </Row>
    </div>
  )
}

export default Rodape

