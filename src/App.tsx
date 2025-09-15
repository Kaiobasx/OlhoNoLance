// src/App.tsx

// Importações com default (sem chaves)
import Home from './pages/Home';
import LeilaoAtivos from './pages/LeilaoAtivos';
import About from './pages/Sobre';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Page } from './hooks/useNavigation';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leiloes-ativos" element={<LeilaoAtivos />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro onNavigate={function (page: Page): void {
          throw new Error('Function not implemented.');
        } } />} />
      </Routes>
    </Router>
  );
}