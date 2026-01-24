import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Sobre from "./Pages/Sobre.jsx";
import NotFound from "./Pages/NotFound.jsx";
import AreaCliente from "./Pages/AreaCliente.jsx";
import ContabilidadeSaude from "./Pages/ContabilidadeSaude.jsx";
import Contato from "./Pages/Contato.jsx";
import Empresa from "./Pages/Empresa.jsx";
import LinksUteis from "./Pages/LinksUteis.jsx";
import Noticias from "./Pages/Noticias.jsx";
import Servicos from "./Pages/Servicos.jsx";
import Header from "./Components/layout/Header.jsx";
import Footer from "./Components/layout/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/area-cliente" element={<AreaCliente />} />
        <Route path="/contabilidade-saude" element={<ContabilidadeSaude />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/links-uteis" element={<LinksUteis />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
