import React from 'react';
import { ExeGlobal } from './ExeGlobal';

const ExeProduto = () => {
  const global = React.useContext(ExeGlobal);
  console.log(global);
  if (global.dados === null) return null;

  return (
    <div>
      Produto: {''}
      {global.dados.map((produto) => (
        <div>
          <li key={produto.id}>{produto.nome}</li>
          <p>Preço: R$ {produto.preco}</p>
        </div>
      ))}
    </div>
  );
};

export default ExeProduto;
