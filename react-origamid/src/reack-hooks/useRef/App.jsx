import React from 'react';

const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputEleent = React.useRef();

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput('');
    inputEleent.current.focus();
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
        <input
          type="text"
          ref={inputEleent}
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />
        <br />
        <button onClick={handleClick}>Enviar</button>
      </ul>
    </div>
  );
};

export default App;
