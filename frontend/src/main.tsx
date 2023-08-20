import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import SingleTrain from './pages/SingleTrain.tsx'

import './sass/style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/train/:trainNumber" element={<SingleTrain />} />
    </Routes>
  </BrowserRouter>
)
