import React, { useState, useEffect } from "react";
import "../styles/TimerIn.css";

function TimerRe() {
  const [startDate, setStartDate] = useState(() => {
    // Recupera o valor do localStorage ou define como null
    const savedDate = localStorage.getItem("startDate");
    return savedDate ? parseInt(savedDate, 10) : null;
  });
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!startDate) return; // Não inicia o timer se startDate for nulo

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = now - startDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [startDate]);

  const resetTimer = () => {
    const now = new Date().getTime();
    setStartDate(now); // Define o momento atual como o novo startDate
    localStorage.setItem("startDate", now); // Salva o startDate no localStorage
    setTimeElapsed({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Reseta o tempo decorrido para 0
  };

  return (
    <div className="timer">
      <h2>🥺Tempo sem nos ver🥺</h2>
      <p>{timeElapsed.days} <strong>Dias</strong></p>
      <p>{timeElapsed.hours} <strong>Horas</strong></p>
      <p>{timeElapsed.minutes} <strong>Minutos</strong></p>
      <p>{timeElapsed.seconds} <strong>Segundos</strong></p>
      <button onClick={resetTimer}>Resetar Timer</button>
    </div>
  );
}

export default TimerRe;