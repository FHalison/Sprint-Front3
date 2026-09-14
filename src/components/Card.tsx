type CardProps = {
  titulo: string;
  valor: string;
};

function Card({ titulo, valor }: CardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
        {titulo}
      </p>

      <p className="text-3xl font-bold text-emerald-700">
        {valor}
      </p>
    </div>
  );
}

export default Card;