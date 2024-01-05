import React from 'react';

const App = () => {
  const [termos, setTermos] = React.useState(false);
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(
        cores.filter((cor) => {
          return cor !== target.value;
        }),
      );
    }
  }

  function checkColor(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {termos && <p>Aceitou os termos</p>}
      <label htmlFor="">
        <input
          type="checkbox"
          value="Termos"
          checked={termos}
          onChange={({ target }) => setTermos(target.checked)}
        />
        Aceito os termos
      </label>
      <label htmlFor="">
        <input
          type="checkbox"
          value="azul"
          checked={checkColor('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
      <label htmlFor="">
        <input
          type="checkbox"
          value="vermelho"
          checked={checkColor('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
    </form>
  );
};

export default App;
