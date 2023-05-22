import Pagina from '@/components/Pagina'
import apiDeputados from '@/services/apiDeputados'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import styles from './Deputado.module.css'
import Chart from 'react-google-charts'
import { useRouter } from 'next/router'

const Deputado = ({ deputado }) => {

  const router = useRouter();
  const id2 = router.query.id
  const [data, setData] = useState([])  
  const [elementoDespesa, setelementoDespesa] = useState([["Tipo de Despesa", "Valor"],
])  

  useEffect(() => {
      apiDeputados.get('/deputados/' + id2 + '/despesas?ano=2023&mes=4').then(resultado => {
          setData(resultado.data.dados)
      })
  }, [])

  useEffect(() => {
    {data.map((item) => (
      elementoDespesa.push([item.tipoDespesa, item.valorDocumento])
    ))}
}, [data])

const options = {
  title: "Despesas",
  colors: ["#057447"],
  backgroundColor: '#202632',
  legendTextStyle: { color: '#FFF' },
  titleTextStyle: { color: '#FFF' },
  hAxis: {
    format: 'scientific'
}
};

  return (
    <Pagina>
        <div className={styles.divFoto}>
            <img
                src={deputado.ultimoStatus.urlFoto}
                className={styles.fotoDeputado}
            />
        </div>

        <section>
        <Card border="danger" style={{color: '#000000'}}>
            <Card.Header>Dados Pessoais</Card.Header>
            <Card.Body bg='white' >
            <p><strong>Nome Civil: </strong> {deputado.nomeCivil}</p>
            <p><strong>E-mail: </strong> {deputado.ultimoStatus.email}</p>
            <p><strong>Telefone: </strong> {deputado.ultimoStatus.gabinete.telefone}</p>
            </Card.Body>
            </Card>

        </section>


      <Chart
      chartType="ColumnChart"
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
  