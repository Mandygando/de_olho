import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "@/components/Pagina";
import React, { useEffect, useState } from "react";
import { Button, Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import Card from "@/components/Card";
import Head from "next/head";
import apiDeputados from "@/services/apiDeputados";
import styles from "@/styles/Home.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

const Index = ( {listaCompletaDeputados} ) => {

  const [partidos, setPartidos] = useState([]);
  const [deputados, setDeputados] = useState();
  
  // infinity scrolll

  const [Deputados, setdeputados] = useState([]);

  let [page, setPage] = useState(1)

  useEffect(() => {
    carregarDeputados()
  }, [])

  function carregarDeputados(){
    setPage(page + 1)
    apiDeputados.get('/deputados?itens=20&pagina=' + page).then(resultado =>{
      setdeputados(Deputados.concat(resultado.data.dados))
    })
  }

  // infinity scrolll

  useEffect(() => {
    apiDeputados.get("/partidos?itens=30").then((resultado) => {
      setPartidos(resultado.data.dados);
    });
  }, []);


  function filtraDeputados(e) {
    const deputadosFiltrados = listaCompletaDeputados.filter((deputado) => {
      return deputado.siglaPartido === e;
    });

    setdeputados(deputadosFiltrados);
  }

  function filtraDeputadosUF(e) {
    const deputadosFiltrados = listaCompletaDeputados.filter((deputado) => {
      return deputado.siglaUf === e;
    });

    setdeputados(deputadosFiltrados);
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
          <Col md={2}>
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
          <Col md={1}>
            <DropdownButton
              variant=""
              className={styles.botao}
              title="UF"
              onSelect={filtraDeputadosUF}
            >
             
                <Dropdown.Item eventKey="AC" key="AC">AC</Dropdown.Item>
                <Dropdown.Item eventKey="AL" key="AL">AL</Dropdown.Item>
                <Dropdown.Item eventKey="AP" key="AP">AP</Dropdown.Item>
                <Dropdown.Item eventKey="AM" key="AM">AM</Dropdown.Item>
                <Dropdown.Item eventKey="BA" key="BA">BA</Dropdown.Item>
                <Dropdown.Item eventKey="CE" key="CE">CE</Dropdown.Item>
                <Dropdown.Item eventKey="DF" key="DF">DF</Dropdown.Item>
                <Dropdown.Item eventKey="ES" key="ES">ES</Dropdown.Item>
                <Dropdown.Item eventKey="GO" key="GO">GO</Dropdown.Item>
                <Dropdown.Item eventKey="MA" key="MA">MA</Dropdown.Item>
                <Dropdown.Item eventKey="MT" key="MT">MT</Dropdown.Item>
                <Dropdown.Item eventKey="MS" key="MS">MS</Dropdown.Item>
                <Dropdown.Item eventKey="MG" key="MG">MG</Dropdown.Item>
                <Dropdown.Item eventKey="PA" key="PA">PA</Dropdown.Item>
                <Dropdown.Item eventKey="PB" key="PB">PB</Dropdown.Item>
                <Dropdown.Item eventKey="PR" key="PR">PR</Dropdown.Item>
                <Dropdown.Item eventKey="PE" key="PE">PE</Dropdown.Item>
                <Dropdown.Item eventKey="PI" key="PI">PI</Dropdown.Item>
                <Dropdown.Item eventKey="RJ" key="RJ">RJ</Dropdown.Item>
                <Dropdown.Item eventKey="RN" key="RN">RN</Dropdown.Item>
                <Dropdown.Item eventKey="RS" key="RS">RS</Dropdown.Item>
                <Dropdown.Item eventKey="RO" key="RO">RO</Dropdown.Item>
                <Dropdown.Item eventKey="RR" key="RR">RR</Dropdown.Item>
                <Dropdown.Item eventKey="SC" key="SC">SC</Dropdown.Item>
                <Dropdown.Item eventKey="SP" key="SP">SP</Dropdown.Item>
                <Dropdown.Item eventKey="SE" key="SE">SE</Dropdown.Item>
                <Dropdown.Item eventKey="TO" key="TO">TO</Dropdown.Item>
          
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

export async function getServerSideProps(context) {
  const response = await apiDeputados.get('/deputados');
  const listaCompletaDeputados = response.data.dados;

  return {
    props: { listaCompletaDeputados },
  };
}