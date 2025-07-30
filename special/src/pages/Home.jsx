import Header from "../components/Header";
import Footer from "../components/Footer"
import "../styles/Page.css"
import BlocoTexto from "../components/BlocoTexto"
import Deitadu from "../assets/Image1.jpg"
import InputAma from "../components/Meama";
import stand from "../assets/standbyme.mp3";
function Home() {

  return (
    <>
        <h1>Home Page😊</h1>
        <p>Novidade no site!</p>
      <Header />
      <audio src={stand}/>
      
        <p>Eu te amo❤</p>
        <p>Eu te amo❤</p>
        <InputAma/>
        <br />
        <br />
       <BlocoTexto />
        <Footer />
    </>
  )
}
export default Home;