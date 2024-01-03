import React, { createContext } from 'react';

export const ExeGlobal = createContext();

export const ExeGlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  function limparDados() {
    setDados(null);
  }

  return (
    <ExeGlobal.Provider value={{ dados, limparDados }}>
      {children}
    </ExeGlobal.Provider>
  );
};
