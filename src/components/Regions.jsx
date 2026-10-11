import { regions } from '../data'

export default function Regions() {
  return (
    <section id="regioes" className="bg-surface-dark py-20 text-snow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Produção local com entrega rápida e cuidadosa.</h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {regions.map((r, i) => (
            <li key={r.name} className={`rounded-2xl p-5 shadow-lg ring-1 ring-white/15 ${i === 0 ? 'bg-primary' : 'bg-white/5'}`}>
              <span aria-hidden="true" className="text-2xl">📍</span>
              <h3 className="mt-2 font-display text-lg font-extrabold">{r.name}</h3>
              <p className="mt-1 text-sm text-snow/85">{r.note}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-2xl bg-white/5 p-6 ring-1 ring-white/15">
          <h3 className="text-xl font-extrabold text-accent">Frete expresso que protege peças frágeis</h3>
          <p className="mt-2 max-w-3xl text-snow/90">
            Na Região Oeste usamos <strong>Uber Flash</strong> ou <strong>Lalamove</strong> para entrega no mesmo dia ou no dia seguinte, com a peça acompanhada do início ao fim. Para outras regiões, enviamos por <strong>Sedex</strong> em embalagem rígida com proteção interna contra impacto.
          </p>
        </div>
      </div>
    </section>
  )
}
