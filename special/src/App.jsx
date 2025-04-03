import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import './App.css'
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
    <Analytics/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App