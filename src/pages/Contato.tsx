import { useForm } from "react-hook-form";

type FormularioContato = {
  nome: string;
  email: string;
  mensagem: string;
};

function Contato() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormularioContato>();

  function enviarFormulario(dados: FormularioContato) {
    console.log(dados);
    alert("Mensagem enviada com sucesso!");
    reset();
  }

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 min-[992px]:px-12">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold uppercase tracking-wider text-emerald-700">
            Fale conosco
          </p>

          <h1 className="mb-5 text-4xl font-bold text-gray-900">
            Entre em contato com a equipe SoulUp.
          </h1>

          <p className="leading-7 text-gray-600">
            Envie sua mensagem para dúvidas, sugestões ou informações sobre o
            projeto.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(enviarFormulario)}
          className="rounded-2xl bg-white p-7 shadow-lg"
        >
          <div className="mb-5">
            <label
              htmlFor="nome"
              className="mb-2 block font-semibold text-gray-700"
            >
              Nome
            </label>

            <input
              id="nome"
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-600"
              {...register("nome", {
                required: "O nome é obrigatório.",
                minLength: {
                  value: 3,
                  message: "Digite pelo menos 3 caracteres.",
                },
              })}
            />

            {errors.nome && (
              <p className="mt-2 text-sm text-red-600">
                {errors.nome.message}
              </p>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block font-semibold text-gray-700"
            >
              E-mail
            </label>

            <input
              id="email"
              type="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-600"
              {...register("email", {
                required: "O e-mail é obrigatório.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Digite um e-mail válido.",
                },
              })}
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="mensagem"
              className="mb-2 block font-semibold text-gray-700"
            >
              Mensagem
            </label>

            <textarea
              id="mensagem"
              rows={5}
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-600"
              {...register("mensagem", {
                required: "A mensagem é obrigatória.",
                minLength: {
                  value: 10,
                  message: "A mensagem deve ter pelo menos 10 caracteres.",
                },
              })}
            />

            {errors.mensagem && (
              <p className="mt-2 text-sm text-red-600">
                {errors.mensagem.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contato;