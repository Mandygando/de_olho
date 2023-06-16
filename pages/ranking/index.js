import Pagina from '@/components/Pagina';
import banco from '@/services/banco';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Item_Ranking from '@/components/Ranking';

const MyPage = () => {
  const [dadosDeputados, setDadosDeputados] = useState([]);


  useEffect(() => {
    banco.get("/").then((resultado) => {
      setDadosDeputados(resultado.data);
    });
  }, []);

  return (
    <Pagina>
    <div>

    <h2 className='text-center p-5'>Os Deputados que Mais Gastaram</h2>

        {dadosDeputados.map((deputado, index) => (
          <Item_Ranking nome={deputado.nome} numero={deputado.numero} valor={deputado.valor_gasto}/>
        ))}
    </div>
    </Pagina>
  );
};

export default MyPage;
