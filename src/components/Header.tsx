import { useState } from "react";
import { Link } from "react-router-dom";
import logoS from "../assets/Soul up.png";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-emerald-700 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
            <img
                src={logoS}
                alt="SoulUp"
                className="h-10 w-10 rounded-xl object-cover"
            />

            <span className="text-2xl font-bold">
                SoulUp
            </span>
        </Link>

        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <nav
          className={`
            ${menuAberto ? "flex" : "hidden"}
            absolute left-0 top-[64px] w-full flex-col gap-4
            bg-emerald-700 px-5 py-5
            md:static md:flex md:w-auto md:flex-row md:items-center md:p-0
          `}
        >
          <Link to="/" onClick={() => setMenuAberto(false)}>
            Home
          </Link>

          <Link to="/sobre" onClick={() => setMenuAberto(false)}>
            Sobre
          </Link>

          <Link to="/solucao" onClick={() => setMenuAberto(false)}>
            Solução
          </Link>

          <Link to="/dashboard" onClick={() => setMenuAberto(false)}>
            Dashboard
          </Link>

          <Link to="/resgate" onClick={() => setMenuAberto(false)}>
            Resgate
          </Link>

          <Link to="/faq" onClick={() => setMenuAberto(false)}>
            FAQ
          </Link>

          <Link to="/contato" onClick={() => setMenuAberto(false)}>
            Contato
          </Link>

          <Link to="/integrantes" onClick={() => setMenuAberto(false)}>
            Integrantes
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;