import React, { useState, useEffect } from "react";
import "../styles/TimerIn.css";

function TimerBirth() {
  const [timeUntilJune30, setTimeUntilJune30] = useState({});
  const [timeUntilApril19, setTimeUntilApril19] = useState({});

  const calculateTimeUntil = (targetDate) => {
    const now = new Date();
    const currentYear = now.getFullYear();

    // Define a próxima ocorrência da data alvo
    let nextTargetDate = new Date(`${currentYear}-${targetDate}T00:00:00`);
    if (now > nextTargetDate) {
      nextTargetDate = new Date(`${currentYear + 1}-${targetDate}T00:00:00`);
    }

    const difference = nextTargetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const updateTimers = () => {
      setTimeUntilJune30(calculateTimeUntil("06-30"));
      setTimeUntilApril19(calculateTimeUntil("04-19"));
    };

    updateTimers();
    const timer = setInterval(updateTimers, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="timers">
        <h2><strong>Aniversários <br/>😊</strong></h2>
        <div className="timerdiv">
      <div className="timer">
        <h2>Tempo restante até o próximo aniversário meu😊</h2>
        <p>{timeUntilJune30.days} <strong>Dias</strong></p>
        <p>{timeUntilJune30.hours} <strong>Horas</strong></p>
        <p>{timeUntilJune30.minutes} <strong>Minutos</strong></p>
        <p>{timeUntilJune30.seconds} <strong>Segundos</strong></p>
      </div>
      <div className="timer">
        <h2>Tempo restante até o próximo aniversário seu😊</h2>
        <p>{timeUntilApril19.days} <strong>Dias</strong></p>
        <p>{timeUntilApril19.hours} <strong>Horas</strong></p>
        <p>{timeUntilApril19.minutes} <strong>Minutos</strong></p>
        <p>{timeUntilApril19.seconds} <strong>Segundos</strong></p>
        </div>
      </div>
    </div>
  );
}

export default TimerBirth;