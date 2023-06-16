import React from 'react'
import styles from './ranking.module.css'
import { Col, Row } from 'react-bootstrap'

const Item_Ranking = ({ numero, nome, valor }) => {

    const numeroInteiro = parseFloat(valor);
    const numeroFormatado = numeroInteiro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        
        <Row className='mb-3 .d-flex .align-items-center' style={{margin: '20px'}} >
            <Col md={3}></Col>
            <Col style={{backgroundColor: 'black'}} md={2} className='text-center'>
        <div>
            <div className={styles.indice}>
                <h2 className={styles.numero}> {numero + '°'} </h2>
            </div>
        </div>
            </Col>
            <Col md={4} style={{backgroundColor: 'black'}}>
            <div>
                <h2>{nome}</h2>

            </div>

            <div>
                <h2>{numeroFormatado}</h2>
            </div>
            </Col>
            <Col md={3}></Col>
        
        </Row>
    )
}

export default Item_Ranking