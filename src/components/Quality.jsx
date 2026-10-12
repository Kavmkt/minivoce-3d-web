import { deadlines } from '../data'

export default function Quality() {
  return (
    <section id="qualidade" className="bg-surface-light py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Transparência em primeiro lugar</h2>
          <p className="mt-4 text-lg text-slate-700">
            Nossos bonecos seguem o estilo <strong>Pop cabeçudinho caricatural</strong>: proporções exageradas de propósito, com foco nos traços que tornam você único. Não é uma réplica realista.
          </p>
          <ul className="mt-5 space-y-3 text-slate-700">
            <li className="flex gap-3"><span aria-hidden="true">🎨</span> Acabamento e pintura artesanais: pequenas variações fazem parte de cada peça.</li>
            <li className="flex gap-3"><span aria-hidden="true">✅</span> Você aprova a arte antes de pagar e de produzir.</li>
            <li className="flex gap-3"><span aria-hidden="true">📦</span> Embalagem reforçada para transporte seguro.</li>
          </ul>
        </div>
        <div className="overflow-x-auto rounded-2xl bg-white shadow-lg">
          <table className="w-full min-w-[420px] text-left text-sm">
            <caption className="p-4 text-left font-display text-lg font-extrabold">Prazos</caption>
            <thead className="bg-primary text-white">
              <tr><th scope="col" className="p-3">Etapa</th><th scope="col" className="p-3">Prazo</th></tr>
            </thead>
            <tbody>
              {deadlines.map(d => (
                <tr key={d.stage} className="border-t border-slate-100">
                  <th scope="row" className="p-3 font-semibold">{d.stage}<span className="block text-xs font-normal text-slate-600">{d.note}</span></th>
                  <td className="p-3 font-semibold text-primary-600">{d.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
