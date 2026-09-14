const recursos = [
  {
    titulo: "Ações Sustentáveis",
    texto: "O usuário registra atividades sustentáveis realizadas no dia a dia.",
  },
  {
    titulo: "Sistema de Pontos",
    texto: "As ações realizadas geram pontos dentro da plataforma.",
  },
  {
    titulo: "Conversão",
    texto: "Os pontos acumulados podem ser convertidos em benefícios.",
  },
  {
    titulo: "Vouchers",
    texto: "O usuário pode receber vouchers como recompensa.",
  },
  {
    titulo: "Ranking",
    texto: "O ranking incentiva a participação e o engajamento dos usuários.",
  },
  {
    titulo: "Impacto Ambiental",
    texto: "O Dashboard permite acompanhar indicadores como CO₂ evitado.",
  },
];

function Solucao() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 min-[992px]:px-12">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 font-semibold uppercase tracking-wider text-emerald-700">
          Nossa solução
        </p>

        <h1 className="mb-5 text-4xl font-bold text-gray-900">
          Sustentabilidade com incentivo e recompensa.
        </h1>

        <p className="text-lg leading-7 text-gray-600">
          O SoulUp transforma ações sustentáveis em uma experiência de
          acompanhamento, pontuação e benefícios.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 min-[992px]:grid-cols-3">
        {recursos.map((recurso) => (
          <div
            key={recurso.titulo}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-700">
              ✓
            </div>

            <h2 className="mb-3 text-xl font-bold text-gray-900">
              {recurso.titulo}
            </h2>

            <p className="leading-7 text-gray-600">
              {recurso.texto}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Solucao;