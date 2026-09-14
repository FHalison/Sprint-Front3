import { useNavigate, useParams } from "react-router-dom";

import gustavo from "../assets/Gustavo.png";
import halison from "../assets/Halison.png";
import pedro from "../assets/Pedro.png";

const integrantes = [
  {
    id: "halison",
    nome: "Francisco Halison",
    foto: halison,
    descricao: "Desenvolvedor do projeto SoulUp.",
  },
  {
    id: "gustavo",
    nome: "Gustavo",
    foto: gustavo,
    descricao: "Desenvolvedor do projeto SoulUp.",
  },
  {
    id: "pedro",
    nome: "Pedro",
    foto: pedro,
    descricao: "Desenvolvedor do projeto SoulUp.",
  },
];

function IntegranteDetalhe() {
  const { rm } = useParams();
  const navigate = useNavigate();

  const integrante = integrantes.find(
    (integrante) => integrante.id === rm
  );

  if (!integrante) {
    return (
      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <h1 className="mb-6 text-3xl font-bold">
          Integrante não encontrado
        </h1>

        <button onClick={() => navigate("/integrantes")}>
          Voltar
        </button>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <button
        onClick={() => navigate("/integrantes")}
        className="mb-8"
      >
        ← Voltar
      </button>

      <div className="grid items-center gap-10 rounded-3xl bg-white p-8 shadow-lg md:grid-cols-2">
        <img
          src={integrante.foto}
          alt={`Foto de ${integrante.nome}`}
          className="h-80 w-full rounded-2xl object-cover"
        />

        <div>
          <p className="mb-2 font-semibold uppercase tracking-wider text-emerald-700">
            Integrante SoulUp
          </p>

          <h1 className="mb-5 text-4xl font-bold text-gray-900">
            {integrante.nome}
          </h1>

          <p className="leading-7 text-gray-600">
            {integrante.descricao}
          </p>
        </div>
      </div>
    </section>
  );
}

export default IntegranteDetalhe;