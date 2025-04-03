import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Foto6 from "../assets/Image6.jpeg";
import Foto7 from "../assets/Image7.jpg";

import "../styles/Page2.css";

function Page2() {
  useEffect(() => {
    document.title = `Eu te amo❤`;
  }, []);

  return (
    <>
      <Header2 />

      <div className="page-container">
        <img src={Foto6} className="side-photo" />
        <div className="text-container">
          <h1>Oi, minha pretinha</h1>
          <p>
            Tu chegou no fim do projeto, ou melhor, na metade dele. Ainda vou
            escrever um pouquinho por aqui. <br />
            <strong>Meu nenenzinho</strong> queria comecar dizendo que você é a
            mulher da minha vida, e você sabe muito bem o que isso significa.
            Queria te agradecer por me abraçar com tanta força em alguns
            momentos, por fazer com que os meus olhos imediatamente vejam a
            imagem da minha esposa e mãe dos mes filhos assim que eles o
            econtram. <br />
            Meu amor, você é o meu tesouro, o meu bem mais precioso. Quando eu
            olho pra ti, me emociono muito, quando vejo os seus olhinhos, seu
            narizinho, seu jeitinho, sua boca perfeita, eu so penso... caramba,
            como eu tenho sorte.
            <br />
            Deus realmente foi maravilhoso comigo te colocando no meu caminho,
            muito obrigado por me encontrar, por me buscar, por me ncantar e me
            atrair pra aquilo que seria (e é) a experiência mais extraordinária
            e magnífica que eu pude imaginar experimentar. Você é graciosa,
            virtuosa, admirável, LINDA! e eu sou o seu maior fã.
            <br />
            Quero passar o resto dos meus dias ao teu lado, quero ter nosso
            titin, nossa naná, nossa casinha, nosso carro, nossas coisas,
            tradições, jeitos e algo que já temos, que na verdade, é algo que
            somos... Uma meta.
            Eu te amo daqui até o fim, e não existe mais um universo ou um pensamento onde Murilo apareça longe de Ingrid.
            Você é a mulher da minha vida. EU TE AMO, AMOR!❤
            <br />
            <br />
            <br />
          20/03/2025
          </p>
        </div>
        <img src={Foto7} className="side-photo" />
      </div>

      <Footer />
    </>
  );
}

export default Page2;
