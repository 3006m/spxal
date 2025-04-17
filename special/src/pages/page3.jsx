import React, { useState, useEffect } from "react";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import Foto13 from "../assets/Image13.jpg";
import Foto12 from "../assets/Image12.jpg";
import Foto15 from "../assets/Image15.jpg";
import Timer from "../components/Timer";
import Audio from "../assets/audio.m4a"
import "../styles/Page3.css";

function Page3() {
  const [isAuthorized, setIsAuthorized] = useState(false); // State to check if the user is authorized
  const [password, setPassword] = useState(""); // State to store the entered password
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  useEffect(() => {
    document.title = `Eu te amo❤`;
  }, []);

  const handlePasswordSubmit = () => {
    const correctPassword = "patinhodeborracha"; // Replace with your desired password
    if (password === correctPassword) {
      setIsAuthorized(true); // Grant access if the password is correct
    } else {
      alert("Senha incorreta! Tente novamente."); // Show an error message for incorrect password
    }
  };

  if (!isAuthorized) {
    return (
      <div>
        <h1>Digite a senha para acessar a página</h1>
        <p>
            A <strong>Senha</strong> será liberada pelo <strong>Seu namorado</strong> no dia 19/04/2025, às 00h00.
        </p>
        <input
          type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)} // Toggle visibility
        >
          👁
        </button>
        <button onClick={handlePasswordSubmit}>Entrar</button>
      </div>
    );
  }

  return (
    <>
      <Header2 />

      <div className="page-container">
        <img src={Foto15} className="side-photo" />
        <div className="text-container">
          <h1>❤19/04/2025❤</h1>
          <Timer />

    <audio src={Audio} controls className="Audio"/>
      <br />
      <br />
          <img src={Foto13} className="top-photo" />
          <p>
            <strong>O seu dia chegou, meu amor!</strong> 19/04/2025, e esse é o
            primeiro aniversário que nós passamos juntos. <br />
            Aaah meu <strong>amor</strong>... o que falar de ti? Como te
            descrever? Como começo? Não faço ideia. São tantas coisas... Por
            isso essa é só uma das cartinhas que você tá recebendo de mim😊.{" "}
            <br />
            Quero começar dizendo o quão <strong>incrível</strong> você é. Amor
            da minha vida, você é tão graciosa, tão virtuosa, tão linda,
            admirável, doce, feminina, inteligente, esperta, amável, gentil,
            perfeita, e caberiam muitos mais elogios, mas vou deixar pras outras
            cartas também.
            <br />
            16 anos da garota dos meus sonhos, da mulher da minha vida, da minha
            princesa, minha menina, que jajá vai ser a minha mulher. Como você
            cresceu, meu amor! Como você se tornou uma pessoa incrível, de cair
            o queixo, de se admirar, uma pessoa que chama atenção por onde
            passa. Não só pela aparência, mas pelo jeito, pela amistosidade,
            pelo <strong>caráter</strong>, bondade, feição... <br />
            O Espírito Santo brilha em você, Ingrid. Você tem se tornado uma
            mulher sublime, que me deixa impressionado 100% das vezes. Deus quis
            que essa mulher vivesse ao meu lado, e eu sou eternamente grato por
            isso. <br />
            Essa foi mais curtinha😊, to escrevendo um pouquinho em cada canto
            KAKKAKAKAKAKAKAKA, mas é isso. <br />
            Meu Amor, Ingrid Ryane Marques Gibin, Eu te amo, infinitamente e
            para sempre. Você é a mulher da minha vida, a mãe dos meus filhos, e a mulher de Deus que vai viver ao meu lado. Eu te amo, Eu te amo. <br />
            Feliz Aniversário, Pretinha. Feliz 16. Os próximos ∞ são comigo.
            <br />
            <br />
            <br />
            19/04/2025.
          </p>
        </div>
        <img src={Foto12} className="side-photo" />
      </div>
<br />


      <Footer />
    </>
  );
}

export default Page3;
