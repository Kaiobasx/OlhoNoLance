// src/App.tsx

// Importações com default (sem chaves)
import Home from './Home';
import LeilaoAtivos from './LeilaoAtivos';
import About from './Sobre';
import Contato from './Contato';
import Login from './Login';
import Cadastro from './Cadastro';

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
        <Route path="/login" element={<Login onNavigate={function (page: Page): void {
          throw new Error('Function not implemented.');
        } } />} />
        <Route path="/cadastro" element={<Cadastro onNavigate={function (page: Page): void {
          throw new Error('Function not implemented.');
        } } />} />
      </Routes>
    </Router>
  );
}