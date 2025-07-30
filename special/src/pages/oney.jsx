import React, { useState, useEffect } from "react";
import Header2 from "../components/Header2";
import Footer from "../components/Footer"
import AnniversaryWelcome from "../components/TelaBoasVindas";
import Timeline from "../components/Timeline";
import LoveLetter from "../components/LoveLetter";



function Oney() {
 
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  
  useEffect(() => {
    document.title = `Nosso 1 Ano ❤️`;
  }, []);


  const handlePasswordSubmit = (e) => {
    e.preventDefault(); 


    const correctPassword = "nossodia1208251a"; 

    if (password === correctPassword) {
      setIsAuthorized(true); // Libera o acesso
    } else {
      alert("Senha incorreta! Tente a palavra mágica de novo 😉"); // Mensagem de erro
      setPassword(""); // Limpa o campo
    }
  };

  // 3. TELA DE SENHA (SÓ APARECE SE NÃO ESTIVER AUTORIZADO)
  if (!isAuthorized) {
    return (
      <div className="password-screen"> {/* Adicione um estilo para essa div se quiser */}
        <div className="password-form">
          <Header2 />
          <h1>😁😁❤</h1>
          <p>
            A senha será liberada no dia <strong>12/08/2025</strong> pelo <strong>Seu namorado</strong>.
          </p>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Qual é a palavra mágica?"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </button>
            <button type="submit">Desbloquear</button>
          </form>
        </div>
      </div>
    );
  }

  // 4. CONTEÚDO ORIGINAL DA PÁGINA (SÓ APARECE APÓS A SENHA CORRETA)
  return (
    <>
      {/* O <h1> foi removido daqui para não aparecer antes do conteúdo principal */}
      <Header />
      <AnniversaryWelcome />
      <div id="nossas-memorias">
        <Timeline />
      </div>
      <LoveLetter />
      <br />
      <Footer />
    </>
  );
}

export default Oney;