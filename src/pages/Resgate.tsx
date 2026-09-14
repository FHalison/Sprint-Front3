const recompensas = [
  { pontos: 100, beneficio: "R$ 10 em benefícios" },
  { pontos: 200, beneficio: "R$ 25 em benefícios" },
  { pontos: 500, beneficio: "R$ 60 em benefícios" },
];

function Resgate() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 min-[992px]:px-12">
      <div className="mb-12 text-center">
        <p className="mb-3 font-semibold uppercase tracking-wider text-emerald-700">
          Recompensas
        </p>

        <h1 className="text-4xl font-bold text-gray-900">
          Resgate seus pontos
        </h1>

        <p className="mt-4 text-gray-600">
          Converta seus pontos acumulados em benefícios.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 min-[992px]:grid-cols-3">
        {recompensas.map((recompensa) => (
          <div
            key={recompensa.pontos}
            className="rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-sm"
          >
            <p className="text-4xl font-bold text-emerald-700">
              {recompensa.pontos}
            </p>

            <p className="mt-1 text-sm uppercase tracking-wide text-gray-500">
              pontos
            </p>

            <h2 className="mt-6 text-xl font-bold">
              {recompensa.beneficio}
            </h2>

            <button className="mt-6 rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white">
              Resgatar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resgate;