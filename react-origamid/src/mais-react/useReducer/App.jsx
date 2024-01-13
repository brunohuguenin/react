import React from 'react';

function reducer(state, action) {
  switch (action) {
    case 'AUMENTAR':
      return state + 1;
    case 'DIMINUIR':
      return state - 1;
    default:
      throw new Error();
  }

  // console.log(action);
  // if (action === 'aumentar') {
  //   return state + 1;
  // }
  // if (action === 'diminuir') {
  //   return state - 1;
  // }

  // return new Error('Ocorrreu um erro!');
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch('AUMENTAR')}>+</button>
      <button onClick={() => dispatch('DIMINUIR')}>-</button>
      <p>{state}</p>
    </div>
  );
};

export default App;
