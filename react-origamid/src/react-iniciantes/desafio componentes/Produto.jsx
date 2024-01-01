import React from 'react';

function Produto({ nome, propriedades }) {
  return (
    <div style={{ border: '1px solid', margin: '1rem 0', padding: '1rem' }}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((product) => (
          <li key={product.propriedades}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default Produto;
