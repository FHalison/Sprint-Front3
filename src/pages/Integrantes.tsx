import { useNavigate } from "react-router-dom";

import gustavo from "../assets/Gustavo.png";
import halison from "../assets/Halison.png";
import pedro from "../assets/Pedro.png";

const integrantes = [
  {
    id: "halison",
    nome: "Francisco Halison",
    foto: halison,
  },
  {
    id: "gustavo",
    nome: "Gustavo",
    foto: gustavo,
  },
  {
    id: "pedro",
    nome: "Pedro",
    foto: pedro,
  },
];

function Integrantes() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 min-[992px]:px-12">
      <div className="mb-12 text-center">
        <p className="mb-3 font-semibold uppercase tracking-wider text-emerald-700">
          Nossa equipe
        </p>

        <h1 className="text-4xl font-bold text-gray-900">
          Conheça os integrantes
        </h1>

        <p className="mt-4 text-gray-600">
          Equipe responsável pelo desenvolvimento do SoulUp.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 min-[992px]:grid-cols-3">
        {integrantes.map((integrante) => (
          <div
            key={integrante.id}
            className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={integrante.foto}
              alt={`Foto de ${integrante.nome}`}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                {integrante.nome}
              </h2>

              <button
                onClick={() =>
                  navigate(`/integrantes/${integrante.id}`)
                }
                className="rounded-lg bg-emerald-700 px-5 py-2 font-semibold text-white transition hover:bg-emerald-800"
              >
                Ver perfil
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Integrantes;