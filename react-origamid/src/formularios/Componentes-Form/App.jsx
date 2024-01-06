import React from 'react';
import Input from './Input';
import Select from './Select';
import Radio from './Radio';
import Checkbox from './Checkbox';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [carro, setCarro] = React.useState('');
  const [linguagens, setLinguagens] = React.useState([]);

  return (
    <form>
      <h2>Checkbox</h2>
      <Checkbox
        options={['JavaScript', 'PHP', 'Ruby', 'C']}
        value={linguagens}
        setValue={setLinguagens}
      />

      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />

      <h2>Carros</h2>
      <Radio
        options={['Mustang', 'Lamborghini', 'Dodge Challenger']}
        value={carro}
        setValue={setCarro}
      />

      <Select
        options={['Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
