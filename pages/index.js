import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "@/components/Pagina";
import React, { useEffect, useState } from "react";
import { Button, Col, Dropdown, DropdownButton, NavDropdown, Row } from "react-bootstrap";
import Card from "@/components/Card";
import Head from "next/head";
import apiDeputados from "@/services/apiDeputados";
import styles from "@/styles/Home.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

const Index = () => {

  const [partidos, setPartidos] = useState([]);
  const [deputados, setDeputados] = useState([]);
  
  // infinity scrolll

  const [Deputados, setdeputados] = useState([]);
  let[page, setPage] = useState(1)

  useEffect(() => {
    carregarDeputados()
  }, [])

  function carregarDeputados(){
    setPage(page + 1)
    apiDeputados.get('/deputados?itens=30&pagina=' + page).then(resultado =>{
      setdeputados(Deputados.concat(resultado.data.dados))
    })
  }
  // infinity scrolll

  useEffect(() => {
    apiDeputados.get('/deputados').then(resultado => {
      setDeputados(resultado.data.dados)
    })
  }, [])

  useEffect(() => {
    apiDeputados.get("/partidos?itens=30").then((resultado) => {
      setPartidos(resultado.data.dados);
    });
  }, []);


  function filtraDeputados(e) {
    const deputadosFiltrados = deputados.filter((deputado) => {
      return deputado.siglaPartido === e;
    });

    setDeputados(deputadosFiltrados);
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
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

        <Row>
          <Col md={3}>
            <DropdownButton
              variant=""
              className={styles.botao}
              title="Partidos"
              onSelect={filtraDeputados}
            >
              {partidos.map(item => (
                <Dropdown.Item eventKey={item.sigla} key={item.id}>{item.nome}</Dropdown.Item>
              ))}

            </DropdownButton>
          </Col>
        </Row>

        <br /> 
          <InfiniteScroll 
          dataLength={Deputados.length}
          hasMore={true}
          next={carregarDeputados}
          style={{ display: 'flex', overflow: '' }}
          >
            <Row  className={styles.deputados}>
          {Deputados.map((item) => (
            <Col className="mb-4">
              <Card
                nome={item.nome}
                estado={item.siglaUf}
                partido={item.siglaPartido}
                imagem={item.urlFoto}
                id={item.id}
              />
            </Col>
          ))}
        </Row>
          </InfiniteScroll>
        

      </Pagina>
    </>
  );
};

export default Index;

