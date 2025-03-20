import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import Grudados from "../assets/Image4.jpg";
import Estrela from "../components/Estrela";
import { useEffect, useState } from "react";

import "../styles/Page.css";

function Page1() {
  const [message, setMessage] = useState("");
  const handleClick = () => {
    setMessage("Te amo, minha gostosa🤭");
  };
  useEffect(() => {
    document.title = `Eu te amo❤`;
  }, []);

  return (
    <>
      <Header2 />

      <h1>Vantagens de me ter pra vida toda!</h1>
      <img src={Grudados} alt="eu i tu xuxu" />
      <p classname="SubTitle">
        Nesta página do coração azul, escolhida por você, irei explicitar os
        motivos pelos quais eu sou a sou a melhor escolha pra sua vida, ou
        então, o melhor plano que você pode assinar😊. Sabemos o quão bem a
        senhora pode fazer a empresa, e acreditamos que a nossa parceria será de
        muito sucesso, caso assine o novo plano, contarei com você pro resto de
        minha vida. O presente principal é eu, tô incluso em 100% dos serviços e
        pra tudo o que você precisar.
      </p>

      <h4>
        A asinatura completa possui alguns benefícios interessantes, podendo ser
        divididos em algumas partes.
      </h4>

      <ol>
        <br />
        <li>
          <strong> Seu homem: </strong>
          Dentre as principais atividades como seu homem nós temos muitas coisas
          importantes, como: Proteção, Cuidado, Responsabilidade, Mimos, Almoços
          e Jantares, Caronas, Refúgio em muitos momentos, Companhia, e uma
          família mravilhosa.
        </li>
        <br />
        <li>
          <strong>Seu namorado: </strong>
          Dentre as principais atividades como namorado nós temos muitas coisas
          importantes, como : Beijos, Beijinhos, Beijoes, Carinho, Pegadinhas no
          Queixo, Apertadas na Cintura, Abraços, Sogros e Cunhados, Apertadinhas
          na Coxa, Tempo de Qualidade, Dates, Família, e muitos outros.
        </li>
        <br />
        <li>
          <strong>Seu Nenenzinho: </strong>
          Dentre as principais atividades como seu nenenzinho nós temos muitas
          coisas importantes, como: Apelidos fofinhos, Cuidado, Cheirinhos,
          Chameguinhos, Te amurus e bicos de vez em quando.
        </li>

        <li>
          <strong>😇: </strong>
          <button onClick={handleClick}>① Foto</button>
          {message && <p>{message}</p>}
        </li>
      </ol>

      <Estrela />
      <Footer />
    </>
  );
}

export default Page1;
