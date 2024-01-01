import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

function App() {
  let Pagina = Home;
  const { pathname } = window.location;
  if (pathname === '/') {
    Pagina = Home;
  } else if (pathname === '/produtos') {
    Pagina = Produtos;
  }
  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
}

export default App;
