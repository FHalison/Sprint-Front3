function Sobre() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 min-[992px]:px-12">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold uppercase tracking-wider text-emerald-700">
            Sobre o SoulUp
          </p>

          <h1 className="mb-6 text-4xl font-bold text-gray-900">
            Tecnologia para incentivar escolhas mais sustentáveis.
          </h1>

          <p className="mb-4 leading-7 text-gray-600">
            O SoulUp é uma plataforma criada para estimular hábitos sustentáveis
            através de pontos, recompensas e acompanhamento de impacto ambiental.
          </p>

          <p className="leading-7 text-gray-600">
            A proposta é tornar atitudes sustentáveis mais acessíveis e
            incentivar pequenas mudanças no cotidiano.
          </p>
        </div>

        <div className="rounded-3xl bg-emerald-700 p-8 text-white shadow-lg">
          <h2 className="mb-6 text-2xl font-bold">Nosso objetivo</h2>

          <div className="space-y-5">
            <div>
              <h3 className="font-bold">Conscientizar</h3>
              <p className="text-emerald-100">
                Mostrar o impacto positivo das escolhas sustentáveis.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Incentivar</h3>
              <p className="text-emerald-100">
                Recompensar usuários por boas ações.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Transformar</h3>
              <p className="text-emerald-100">
                Criar hábitos positivos de longo prazo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;