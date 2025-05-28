import Header2 from "../components/Header2";
import "../styles/valentines.css";
import Foto90 from "../assets/fofinhoinho.jpg";
import Foto3434 from "../assets/mochilinha.png";
import Minha1 from "../assets/minhaale.png";
import Minha2 from "../assets/fofinho.jpg";
function PageNew() {
  const releaseDate = new Date("2025-06-12T00:00:00");
  const now = new Date();

  if (now < releaseDate) {
    return (
      <div>
        <Header2 />
        <h2>Essa página só sera liberada no dia dos namorados😊😊</h2>
      </div>
    );
  }

  return (
    <div>
      <Header2 />
      <h1>Dia dos namorados!😁</h1>
      <p>
        <strong>Oi minha gatinha linda!!!</strong>
        <br />
        Tudo bem com você?? Quanto tempo que eu não atualizo esse site né...{" "}
        <br />
        Enfim, minha pretinha, vou escrever uma cartinha à mão pra ti, afinal,
        além de ser o <strong>Dia dos namorados</strong> o{" "}
        <strong>melhor casal de namorados do mundo inteirinho</strong> faz 10
        meses de namoro no dia de hoje.
      </p>
      <br />
      <section className="iam">
        <img src={Foto90} alt="xuntu" className="imagemb" />
        <br />
        <img src={Foto3434} alt="muxila" className="imagemb" />
      </section>
      <p>
        Eu queria agradecer por todo esse tempo a princípio, mas como essa
        página é exclusivamente para o dia dos namorados, eu vou focar nisso😊
        <br />
        Meu amor, você é a minha pessoa. Minha companheira, minha melhor amiga,
        minha cúmplice pra vida toda. Isso é extremamente incível. <br />
        Tudo que há de mais precioso na minha vida, está em{" "}
        <strong>nós.</strong> A melhor escolha, a melhor coisa que já contruí, a
        melhor ideia que ja tive, as melhores risadas, os melhores momentos,
        melhores refeições, saídas, experiências, orações, repouosos... tudo
        isso foi infinitamente perfeito ao seu lado, e vai continuar sendo para
        sempre. <br />
        <b>Ingrid Ryane Marques Gibin</b> você é o meu par pra sempre, o amor da
        minha vida, a indiscutível esolha mais importante que eu pude um dia
        imaginar fazer.
        <br />
        Obrigado por ser a minha chefinha, obrigado por ser a minha metade,
        obrigado por ser o meu xuxuzinho, a minha Didi...
        <br />
        Obrigado por fazer os meus dias serem mais felizes e mais alegres,
        obrigado por mudar o significado de tudo na minha vida, obrigado por me
        fazer lembrar dos seus olhos todos os dias, obrigado por me fazer
        lembrar do seu sorriso, do seu cheiro, obrigado por ser a minha
        mochilinha, obrigado por me dar o colo mais gostoso do mundo,{" "}
        <strong>obrigado por compartilhar a vida comigo.</strong>
      </p>
      <section className="iam">
        <img src={Minha1} alt="" className="imagemb" />
        <img src={Minha2} alt="" className="imagemb" />
      </section>

      <p>
        Eu te amo muito mais do que você imagina, meu amor. Você é meu tudo.{" "}
        <br />
        A forma como você já faz parte da minha família, da minha casa, a forma
        como gosta da minha irmã, como interage com os meus pais, com a minha
        vó, isso tudo é perfeito demais. <br />
        Você é sensacional, meu amor. Feliz dia dos namorados, minha pretinha
        linda! <br />
        <strong>Eu te amo muito, muito, muito!</strong> ❤❤❤
      </p>
    </div>
  );
}

export default PageNew;
