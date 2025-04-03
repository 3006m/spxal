import React, { useState, useEffect } from "react";
import '../styles/Page3.css'

function Timer() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date("2026-04-19T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({});
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="timer-container">
      <h2>Contagem Regressiva para o próximo aniversário da minha gata.</h2>
      {timeLeft.days !== undefined ? (
        <div className="timer">
          <p>Faltam <strong>{timeLeft.days}</strong> Dias</p>
          <p><strong>{timeLeft.hours}</strong> Horas</p>
          <p><strong>{timeLeft.minutes}</strong> Minutos</p>
          <p><strong>{timeLeft.seconds}</strong> Segundos</p>
        </div>
      ) : (
        <p>Aniversário da minha princesa de novo!!!</p>
      )}
    </div>
  );
}

export default Timer;