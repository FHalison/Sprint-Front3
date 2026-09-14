import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-700 to-green-500 text-white">
        <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 min-[992px]:px-12">
          <div>
            <p className="mb-3 font-semibold uppercase tracking-wider text-emerald-100">
              Sustentabilidade que recompensa
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight max-[480px]:text-3xl md:text-5xl">
              Suas escolhas podem transformar o futuro.
            </h1>

            <p className="mb-8 max-w-xl text-lg text-emerald-50">
              O SoulUp incentiva ações sustentáveis através de pontos,
              recompensas e acompanhamento do impacto ambiental.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/dashboard"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-emerald-700"
              >
                Ver Dashboard
              </Link>

              <Link
                to="/solucao"
                className="rounded-lg border border-white px-6 py-3 font-semibold"
              >
                Conhecer solução
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white/15 p-8 shadow-xl backdrop-blur">
            <h2 className="mb-6 text-2xl font-bold">Como funciona?</h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-bold">1. Faça ações sustentáveis</h3>
                <p className="text-emerald-50">
                  Registre hábitos que ajudam o meio ambiente.
                </p>
              </div>

              <div>
                <h3 className="font-bold">2. Acumule pontos</h3>
                <p className="text-emerald-50">
                  Cada ação gera pontos dentro da plataforma.
                </p>
              </div>

              <div>
                <h3 className="font-bold">3. Ganhe recompensas</h3>
                <p className="text-emerald-50">
                  Converta seus pontos em benefícios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 min-[992px]:px-12">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Por que usar o SoulUp?
          </h2>

          <p className="mt-3 text-gray-600">
            Pequenas ações podem gerar grandes mudanças.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 min-[992px]:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-2 text-xl font-bold text-emerald-700">
              Pontos
            </h3>
            <p className="text-gray-600">
              Seja recompensado pelas suas escolhas sustentáveis.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-2 text-xl font-bold text-emerald-700">
              Recompensas
            </h3>
            <p className="text-gray-600">
              Troque seus pontos por benefícios e vantagens.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="mb-2 text-xl font-bold text-emerald-700">
              Impacto
            </h3>
            <p className="text-gray-600">
              Acompanhe seu impacto ambiental através do Dashboard.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;