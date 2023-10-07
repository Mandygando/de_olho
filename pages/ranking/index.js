import Pagina from '@/components/Pagina';
import banco from '@/services/banco';
import React, { useEffect, useState } from 'react';
import Item_Ranking from '@/components/Ranking';

const MyPage = () => {
  const [dadosDeputados, setDadosDeputados] = useState([]);

  useEffect(() => {
    banco.get("/", {
      params: {
        _limit: 10,
        _sort: 'total_gastos',
        _order: 'desc'
      }
    })
      .then((resultado) => {
        setDadosDeputados(resultado.data);
      })
      .catch((error) => {
        console.error(error);
        console.log("rank temporariamente off");
      }); 
  }, []);

  return (
    <Pagina>
      <div>
        <h2 className='text-center p-5'>Os 10 Deputados que Mais Gastaram</h2>
        {dadosDeputados.slice(0, 10).map((deputado, index) => (
          <Item_Ranking nome={deputado.nome} numero={index +1} valor={deputado.valor_gasto} key={index} />
        ))}
      </div>
    </Pagina>
  );
};

export default MyPage;
