import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "@/components/Pagina";
import React, { useEffect, useState } from "react";
import { Button, Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import Card from "@/components/Card";
import Head from "next/head";
import apiDeputados from "@/services/apiDeputados";
import styles from "@/styles/Home.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import banco from "@/services/banco";
import { FaRankingStar } from "react-icons/fa";

const Index = ({ listaCompletaDeputados }) => {
  const [partidos, setPartidos] = useState([]);
  const [dadosDeputados, setDadosDeputados] = useState([]);
  const [Deputados, setDeputados] = useState([]);
  const [page, setPage] = useState(1);
  const [filtroAplicado, setFiltroAplicado] = useState(false); 

  useEffect(() => {
    banco
      .get("/", {
        params: {
          _sort: "total_gastos",
          _order: "desc",
        },
      })
      .then((resultado) => {
        setDadosDeputados(resultado.data);
      })
      .catch((error) => {
        console.error(error);
        console.log("rank temporariamente off");
      });
  }, []);

  useEffect(() => {
    apiDeputados.get("/partidos?itens=30").then((resultado) => {
      setPartidos(resultado.data.dados);
    });
  }, []);

  useEffect(() => {
    carregarDeputados();
  }, []);

  function carregarDeputados() {
    setPage(page + 1);
    apiDeputados
      .get('/deputados?itens=20&pagina=' + page)
      .then((resultado) => {
        setDeputados(Deputados.concat(resultado.data.dados));
      });
  }

  function filtraDeputados(e) {
    const deputadosFiltrados = listaCompletaDeputados.filter((deputado) => {
      return deputado.siglaPartido === e;
    });

    setDeputados(deputadosFiltrados);
    setFiltroAplicado(true);
  }

  function filtraDeputadosUF(e) {
    const deputadosFiltrados = listaCompletaDeputados.filter((deputado) => {
      return deputado.siglaUf === e;
    });

    setDeputados(deputadosFiltrados);
    setFiltroAplicado(true); 
  }

  function CardDeputados({ item }) {
    let posicao = 0;

    dadosDeputados.map((itemDeputado) => {
      if (item.id == itemDeputado.deputado_id) {
        posicao = itemDeputado.numero;
      }
    });

    return (
      <Col className="mb-4">
        <Card
          nome={item.nome}
          estado={item.siglaUf}
          partido={item.siglaPartido.slice(0, 5)}
          imagem={item.urlFoto}
          id={item.id}
          posicao={posicao ? posicao + "°": ''}
        />
      </Col>
    );
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
              {partidos.map((item) => (
                <Dropdown.Item eventKey={item.sigla} key={item.id}>
                  {item.nome}
                </Dropdown.Item>
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
          hasMore={!filtroAplicado} 
          next={carregarDeputados}
          style={{ display: "flex", overflow: "100%" }}
        >
          <Row className={styles.deputados}>
            {Deputados.map((item) => (
              <CardDeputados item={item} />
            ))}
          </Row>
        </InfiniteScroll>
      </Pagina>
    </>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const response = await apiDeputados.get("/deputados");
  const listaCompletaDeputados = response.data.dados;

  return {
    props: { listaCompletaDeputados },
  };
}
