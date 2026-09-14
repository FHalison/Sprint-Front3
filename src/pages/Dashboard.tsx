import { useEffect, useState } from "react";
import Card from "../components/Card";

function Dashboard() {
  const [pontos, setPontos] = useState(320);
  const [co2, setCo2] = useState(18.5);

  useEffect(() => {
    document.title = "Dashboard | SoulUp";
  }, []);

  function adicionarPontos() {
    setPontos(pontos + 10);
    setCo2(co2 + 0.5);
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 min-[992px]:px-12">
      <div className="mb-10">
        <p className="mb-3 font-semibold uppercase tracking-wider text-emerald-700">
          Seu progresso
        </p>

        <h1 className="text-4xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="mt-3 text-gray-600">
          Acompanhe seus pontos e impacto ambiental.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 min-[992px]:grid-cols-3">
        <Card titulo="Pontos" valor={`${pontos}`} />
        <Card titulo="CO₂ evitado" valor={`${co2.toFixed(1)} kg`} />
        <Card titulo="Nível" valor="Eco Iniciante" />
      </div>

      <div className="mt-10 rounded-2xl bg-emerald-700 p-8 text-white">
        <h2 className="mb-3 text-2xl font-bold">
          Simular ação sustentável
        </h2>

        <p className="mb-6 text-emerald-100">
          Simule uma nova ação e atualize seus indicadores.
        </p>

        <button
          onClick={adicionarPontos}
          className="rounded-lg bg-white px-5 py-3 font-semibold text-emerald-700"
        >
          +10 pontos
        </button>
      </div>
    </section>
  );
}

export default Dashboard;