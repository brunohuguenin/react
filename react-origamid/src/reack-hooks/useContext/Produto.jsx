import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.setContar((contar) => contar + 1);
  }
  return (
    <div>
      Produto:{global.contar}
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Produto;
