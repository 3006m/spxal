import React from 'react';

const BotaoTema = ({ isAlternateTheme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} style={{ padding: '8px 16px', cursor: 'pointer' }}>
      {isAlternateTheme ? 'Modo Normal' : 'Modo de Amor😁'}
    </button>
  );
};

export default BotaoTema;
