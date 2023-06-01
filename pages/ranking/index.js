import Pagina from '@/components/Pagina'
import React from 'react'
import { Chart } from "react-google-charts";

const ranking = () => {
  
  return (
    <Pagina>
        <Chart
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </Pagina>
  )
}

export default ranking
export const data = [
  ['State', 'City'],
                ['BR-AC', 'Acre'],
                ['BR-AL', 'Alagoas'],
                ['BR-AM', 'Amazonas'],
                ['BR-AP', 'Amapá'],
                ['BR-BA', 'Bahia'],
                ['BR-CE', 'Ceará'],
                ['BR-DF', 'Distrito Federal'],
                ['BR-ES', 'Espírito Santo'],
                ['BR-GO', 'Goiás'],
                ['BR-MA', 'Maranhão'],
                ['BR-MG', 'Minas Gerais'],
                ['BR-MS', 'Mato Grosso do Sul'],
                ['BR-MT', 'Mato Grosso'],
                ['BR-PA', 'Pará'],
                ['BR-PB', 'Paraíba'],
                ['BR-PE', 'Pernambuco'],
                ['BR-PI', 'Piauí'],
                ['BR-PR', 'Paraná'],
                ['BR-RJ', 'Rio de Janeiro'],
                ['BR-RN', 'Rio Grande do Norte'],
                ['BR-RO', 'Rondônia'],
                ['BR-RR', 'Roraima'],
                ['BR-RS', 'Rio Grande do Sul'],
                ['BR-SC', 'Santa Catarina'],
                ['BR-SE', 'Sergipe'],
                ['BR-SP', 'São Paulo'],
                ['BR-TO', 'Tocantins']



];

export const options = {
  region: 'BR',
  resolution: 'provinces',
  colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
  backgroundColor: "#81d4fa",
  datalessRegionColor: "#7fffd4",

};