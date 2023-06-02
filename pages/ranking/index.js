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
  ['BR-MG', 'Minas Gerais'],
];

export const options = {
  region: 'BR',
  resolution: 'provinces',
  colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
  backgroundColor: "transparent",
  datalessRegionColor: "transparent",


};