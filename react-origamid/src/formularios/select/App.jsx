import React from 'react';

const App = () => {
  const [select, setSlect] = React.useState('');

  return (
    <form>
      <select
        value={select}
        onChange={({ target }) => setSlect(target.value)}
        id="produtos"
      >
        <option disabled value="">
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="notebook">Tablet</option>
      </select>
      {select}
    </form>
  );
};

export default App;
