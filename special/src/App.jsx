import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Netflix from './pages/Netflix'
import GameLov from './pages/GameLov';
import './App.css'
import { Analytics } from "@vercel/analytics/react"
import PageNew from './pages/pagenew';
import BotaoTema from './components/botaotema';

function App() {
  const [isAlternateTheme, setIsAlternateTheme] = useState(false);

  const toggleTheme = () => {
    setIsAlternateTheme(prev => !prev);
 
    if (!isAlternateTheme) {
      document.body.classList.add('alternate-theme');
    } else {
      document.body.classList.remove('alternate-theme');
    }
  };

  return (
    <>
      <BrowserRouter>
        <BotaoTema isAlternateTheme={isAlternateTheme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/netflix" element={<Netflix />} />
          <Route path="/game" element={<GameLov />} />
          <Route path="/euteamo" element={<PageNew />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  )
}

export default App
