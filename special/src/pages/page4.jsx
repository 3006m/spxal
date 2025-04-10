import React from "react";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import TimerIn from "../components/TimerIn";
import TimerRe from "../components/TimerRe";
import TimerBirth from "../components/TimerBirth";
import "../styles/Page4.css";

function Page4() {
  return (
    <>
      <Header2 />
      <div className="page-container">
        <h1>Página do Tempo⏳</h1>
        <TimerIn />
        <br />
        <TimerRe />
        <br />
        <TimerBirth />
      </div>
      <p>09/04/2025</p>
      <Footer />
    </>
  );
}

export default Page4;