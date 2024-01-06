import React from 'react';
import Input from '../Input';
import UseForm from '../hooks/UseForm';

const App = () => {
  const cep = UseForm('cep');
  const email = UseForm('email');

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input label="Email" id="email" type="email" {...email} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
