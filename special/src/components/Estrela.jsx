import { useState } from "react";
function Estrela() {
    const [avaliacao, setAvaliacao] = useState(0);
  
    const handleClick = (estrela) => {
      setAvaliacao(estrela);
    };
   
    const renderEstrelas = () => {
      const estrelas = [];
      for (let i = 1; i <= 5; i++) {
        estrelas.push(
          <span
            key={i}
            onClick={() => handleClick(i)}
            style={{ cursor: 'pointer', color: i <= avaliacao ? 'yellow' : 'black', fontSize: '2vw' }}
          >
          ★
          </span>
        );
      }
      return estrelas;
    };
  
    return (
  
  
      <div >
          <h1>Faça a fua avaliação de eu</h1>
        {renderEstrelas()}
        <p>Você deu {avaliacao} estrelas.</p>
      </div>
    );
  }
  
  export default Estrela