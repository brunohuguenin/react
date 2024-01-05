import React from 'react';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            value={nome}
            id="nome"
            name="nome"
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default App;
