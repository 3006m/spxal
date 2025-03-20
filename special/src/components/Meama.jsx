import { useState } from "react";

function InputAma() {
  const [texto, setTexto] = useState();
  return (
    <div style={{ marginBottom: "20px" }}>
        
      <h5>Você me ama?</h5>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Me ama??? Sim ou Não."
      />
      {texto && (
        <p>
            {texto == "Sim" ? `🥳${texto} Você me ama!!🥳` : `Voxe não ama eu??`}
        </p>
      )}
    </div>
  );

}
export default InputAma;
