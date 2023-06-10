import Pagina from '@/components/Pagina';
import banco from '@/services/banco';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
      <ol>
        {dadosDeputados.map((deputado, index) => (
          <li key={index}>
            Nome: {deputado.nome}<br />
            Valor Gasto: {deputado.valor_gasto}<br />
          </li>
        ))}
      </ol>
    </div>
    </Pagina>
  );
};

export default MyPage;
