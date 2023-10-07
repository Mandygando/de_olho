import Pagina from '@/components/Pagina'
import apiDeputados from '@/services/apiDeputados'
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import styles from './Deputado.module.css'
import Chart from 'react-google-charts'
import { useRouter } from 'next/router'
import CardValor from '@/components/CardValor'
const date = new Date();

const Deputado = ({ deputado }) => {

  const router = useRouter();
  const id2 = router.query.id
  const [data, setData] = useState([])  
  const [elementoDespesa, setelementoDespesa] = useState()  
  const [contagemElemento, setContagemElemento] = useState()
  const [valorTotal, setValorTotal] = useState()

  useEffect(() => {
      apiDeputados.get('/deputados/' + id2 + `/despesas?itens=100&ano=${date.getFullYear()}&mes=${date.getMonth()}`).then(resultado => {
          setData(resultado.data.dados)
      })
  }, [])

  useEffect(() => {
    const despesas = [["Tipo de Despesa", "Valor", { role: 'annotation' }]]
    {data.map((item) => (
      despesas.push([item.tipoDespesa, item.valorDocumento, new Date(item.dataDocumento).toLocaleDateString()])
    ))}
    setelementoDespesa(despesas)
    const totalValor = despesas.slice(1).reduce((total, despesa) => total + despesa[1], 0);
    setValorTotal(totalValor)
}, [data])

useEffect(() => {
  let contagem = [];
  for (let i = 0; i < data.length; i++) {
    let valorAtributo = data[i]['tipoDespesa'];

    if (contagem[valorAtributo]) {
      contagem[valorAtributo]++;
    } else {
      contagem[valorAtributo] = 1;
    }
  }

  const graficoDonut = [['Tipo Despesa', 'Porcentagem']]
  for(let i in contagem){
    graficoDonut.push([i, contagem[i]])
  }
  setContagemElemento(graficoDonut)
 
}, [data])

const options = {
  
  colors: ["#057447"],
  backgroundColor: '#202632',
  chartArea: {
    top: 25,
    bottom: 0,
    backgroundColor: '#202632'
  },
  vAxis: {
    textPosition: 'none'
  },
  legend: {
    display: false
},
  hAxis: {textStyle: { color: '#fff'}},
  annotations: {
    textStyle: {
      fontSize: 18,
      color: '#fff',
      auraColor: '#ffff',
    },
  },
  bar: { groupWidth: "95%" },
  height: data.length > 20 ? 2000: 800,
};

var siglaUf = deputado.ultimoStatus.siglaUf;
var stringCompleta = 'BR-' + siglaUf;

const estados = [
  ['State'],
  [stringCompleta]
];

const options_estados = {
  region: 'BR',
  resolution: 'provinces',
  colors: ['#FF0000'],
  backgroundColor: "transparent",
  datalessRegionColor: "transparent",

};

const options2 = {
  pieHole: 0.4,
  is3D: false,
  backgroundColor: "transparent",
  colors: ["#012a4a", '#ffa200' ,"#013a63", "#01497c", '#014f86', '#2a6f97', '#2c7da0', '#ffaa00', '#ffb700', '#ffc300', '#ffd000', '#ffdd00', '#ffea00'],
  legend: {textStyle: {color: 'white'}}
};

  return (
    <Pagina >
        <div className={styles.divFoto}>
            <img
                src={deputado.ultimoStatus.urlFoto}
                className={styles.fotoDeputado}
            />
        </div>

        <section className={styles.info}>
        <Row>
          <Col md={6}>
        <Card border="success" className={styles.infoPessoal}>
            <Card.Header className={styles.titulo}>Dados Pessoais</Card.Header>
            <Card.Body bg='white' >
            <p><strong>Nome Civil: </strong> {deputado.nomeCivil}</p>
            <p><strong>E-mail: </strong> {deputado.ultimoStatus.email}</p>
            <p><strong>Telefone: </strong> {deputado.ultimoStatus.gabinete.telefone}</p>
            <p><strong>Data de Nascimento: </strong> {new Date(deputado.dataNascimento).toLocaleDateString()}</p>
            <p><strong>UF de Nascimento: </strong> {deputado.ufNascimento}</p>
            <p><strong>Escolaridade: </strong> {deputado.escolaridade}</p>
            </Card.Body>
        </Card>
            </Col>

            <Col md={6}>
             <Card border="success" className={styles.infoPessoal}>
              <Card.Header className={styles.titulo}>Dados Eleitorais</Card.Header>
              <Card.Body bg='white' >
                <p><strong>Nome Eleitoral: </strong> {deputado.ultimoStatus.nomeEleitoral}</p>
                <p><strong>Partido: </strong> {deputado.ultimoStatus.siglaPartido}</p>
                <p><strong>ID: </strong> {deputado.ultimoStatus.idLegislatura}</p>
                <p><strong>UF: </strong> {deputado.ultimoStatus.siglaUf}</p>
                <p><strong>Situação: </strong> {deputado.ultimoStatus.situacao}</p>
                <p><strong>Condição Eleitoral: </strong> {deputado.ultimoStatus.condicaoEleitoral}</p>
              </Card.Body>
            </Card>
            </Col>
            </Row>
        </section>

        <div className={styles.mapa}>
                 <Chart
                chartType="GeoChart"
                height="300px"
                data={estados}
                options={options_estados}
              />
            </div>

        <h2 className={styles.subtitulo}>Gastos do deputado no último mês.</h2>
        <CardValor valor={Math.floor(valorTotal)} />
      <div className={styles.graficoBarras}>
      <Chart
      chartType="BarChart"
      data={elementoDespesa}
      options={options}
      width={"100%"}
      height={"2000px"}
      />
      </div> 
      <h2 className={styles.subtitulo}>Porcentagem de elementos de despesas.</h2>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={contagemElemento}
        options={options2}
      />
    
    </Pagina>
  )
}

export default Deputado

export async function getServerSideProps(context) {

    const id = context.params.id

    const response = await apiDeputados.get('/deputados/' + id);
    const deputado = response.data.dados;
  
    return {
      props: { deputado },
    };
  }
  