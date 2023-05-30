import Pagina from '@/components/Pagina'
import apiDeputados from '@/services/apiDeputados'
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import styles from './Deputado.module.css'
import Chart from 'react-google-charts'
import { useRouter } from 'next/router'

const Deputado = ({ deputado }) => {

  const router = useRouter();
  const id2 = router.query.id
  const [data, setData] = useState([])  
  const [elementoDespesa, setelementoDespesa] = useState()  


  useEffect(() => {
      apiDeputados.get('/deputados/' + id2 + '/despesas?ano=2023&mes=4').then(resultado => {
          setData(resultado.data.dados)
      })
  }, [])

  useEffect(() => {
    const despesas = [["Tipo de Despesa", "Valor", { role: 'annotation' }]]
    {data.map((item) => (
      despesas.push([item.tipoDespesa, item.valorDocumento, new Date(item.dataDocumento).toLocaleDateString()])
    ))}
    setelementoDespesa(despesas)
}, [data])

const options = {
  title: "Despesas",
  colors: ["#057447"],
  backgroundColor: '#202632',
  chartArea: {
    backgroundColor: '#202632'
  },
  vAxis: {
    textPosition: 'none'
  },
  bar: { groupWidth: "90%" },
  height: 1000,


};

  return (
    <Pagina>
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
            <p><strong>Data de Nascimento: </strong> {deputado.dataNascimento}</p>
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

       <Chart
      chartType="BarChart"
      data={elementoDespesa}
      options={options}
      width={"100%"}
      height={"400px"}
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
  