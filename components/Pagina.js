import React from 'react'
import { Container } from 'react-bootstrap'
import Menu from './Menu/Index'
import 'bootstrap/dist/css/bootstrap.min.css';
const Pagina = (props) => {
  return (
   
        
        <div style={{backgroundColor: '#202632', width: '100%', paddingTop: '10px',color:'white'}}>
          <Menu></Menu>
          <Container>
             {props.children}
          </Container>
           
        </div>
  )
}

export default Pagina
