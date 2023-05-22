import Pagina from '@/components/Pagina';
import React from 'react';
import styles from '@/styles/Home.module.css';
import { Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@/components/Card';
import Head from 'next/head';
import apiDeputados from '@/services/apiDeputados';

const Index = ({ deputados }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Pagina>
        <br />
        <Row>
          <Col md={6} className="text-white">
            <h2>
              De Olho nos Gastos:
              <br />
              Fiscalizando as
              <br />
              Despesas dos
              <br />
              Deputados Brasileiros
            </h2>
          </Col>
        </Row>

        <br />
        <Row>
          <Col md={3}>
            <Button className="bg-secondary text-white" variant="outline-dark">
              Explore
            </Button>
          </Col>
        </Row>

        <br />
        <Row className={styles.deputados}>
          {deputados.map((item) => (
            <Col className="mb-4">
              <Card nome={item.nome} estado={item.siglaUf} partido={item.siglaPartido} imagem={item.urlFoto} id={item.id} />
            </Col>
          ))}
        </Row>
      </Pagina>
    </>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const response = await apiDeputados.get('/deputados');
  const deputados = response.data.dados;

  return {
    props: { deputados },
  };
}
