import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Solucao from "./pages/Solucao";
import Contato from "./pages/Contato";
import FAQ from "./pages/FAQ";
import Integrantes from "./pages/Integrantes";
import Dashboard from "./pages/Dashboard";
import Resgate from "./pages/Resgate";
import IntegranteDetalhe from "./pages/IntegranteDetalhe";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/solucao" element={<Solucao />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/faq" element={<FAQ />} />

        <Route path="/integrantes" element={<Integrantes />} />
        <Route
          path="/integrantes/:rm"
          element={<IntegranteDetalhe />}
        />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resgate" element={<Resgate />} />
      </Route>
    </Routes>
  );
}

export default App;