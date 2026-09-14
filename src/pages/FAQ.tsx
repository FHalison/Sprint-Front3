import { useState } from "react";

const perguntas = [
  {
    pergunta: "O que é o SoulUp?",
    resposta:
      "O SoulUp é uma plataforma que incentiva hábitos sustentáveis por meio de pontos e recompensas.",
  },
  {
    pergunta: "Como posso ganhar pontos?",
    resposta:
      "Os pontos são obtidos através de ações sustentáveis registradas na plataforma.",
  },
  {
    pergunta: "O que posso fazer com meus pontos?",
    resposta:
      "Os pontos acumulados podem ser convertidos em benefícios e recompensas.",
  },
  {
    pergunta: "Como acompanho meu impacto ambiental?",
    resposta:
      "O Dashboard apresenta seus pontos e indicadores relacionados ao impacto ambiental.",
  },
];

function FAQ() {
  const [perguntaAberta, setPerguntaAberta] = useState<number | null>(null);

  function alternarPergunta(index: number) {
    setPerguntaAberta(perguntaAberta === index ? null : index);
  }

  return (
    <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 min-[992px]:px-12">
      <div className="mb-12 text-center">
        <p className="mb-3 font-semibold uppercase tracking-wider text-emerald-700">
          Tire suas dúvidas
        </p>

        <h1 className="text-4xl font-bold text-gray-900">
          Perguntas Frequentes
        </h1>

        <p className="mt-4 text-gray-600">
          Entenda melhor como funciona a plataforma SoulUp.
        </p>
      </div>

      <div className="space-y-4">
        {perguntas.map((item, index) => (
          <div
            key={item.pergunta}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <button
              onClick={() => alternarPergunta(index)}
              className="flex w-full items-center justify-between bg-white px-6 py-5 text-left font-semibold text-gray-900"
            >
              {item.pergunta}

              <span className="ml-4 text-xl font-bold text-emerald-700">
                {perguntaAberta === index ? "−" : "+"}
              </span>
            </button>

            {perguntaAberta === index && (
              <div className="border-t border-gray-100 bg-gray-50 px-6 py-5 leading-7 text-gray-600">
                {item.resposta}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;