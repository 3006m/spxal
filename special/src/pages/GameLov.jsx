import React, { useState, useEffect } from 'react';
import '../styles/Game.css';
import Header2 from '../components/Header2';
const GameLov = () => {
    const [clickCount, setClickCount] = useState(0);
    const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        if (clickCount < 10) {
            randomizeButtonPosition();
        } else {
            setGameOver(true);
        }
    }, [clickCount]);

    const randomizeButtonPosition = () => {
        const buttonWidth = 100; // Adjust based on button size
        const buttonHeight = 50; // Adjust based on button size
        const x = Math.floor(Math.random() * (window.innerWidth - buttonWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - buttonHeight));
        setButtonPosition({ top: y, left: x });
    };

    const handleClick = () => {
        if (clickCount < 10) {
            setClickCount(clickCount + 1);
        }
    };

    return (
        <div className='game-container'>
            <Header2 />
            <h1>Vamos descobrir quem ama mais!</h1>
            {!gameOver ? (
                <button
                    onClick={handleClick}
                    style={{
                        position: 'absolute',
                        top: buttonPosition.top,
                        left: buttonPosition.left,
                    }}
                >
                    Eu amo mais! {clickCount}
                </button>
            ) : (
                <h2>Parabéns!
                    <h4><strong>Eu ainda amo mais😊😊</strong></h4>
                </h2>
                
            )}
        </div>
    );
};

export default GameLov;
