// src/App.tsx

// Importações com default (sem chaves)
import Home from './Home';
import LeilaoAtivos from './LeilaoAtivos';
import About from './Sobre';
import Contato from './Contato';
import Login from './Login';
import Cadastro from './Cadastro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import Collectibles from './Colecionaveis';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leiloes-ativos" element={<LeilaoAtivos />} />
        <Route path= "/colecionaveis" element={<Collectibles />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}