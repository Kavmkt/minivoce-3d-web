import { categories } from '../data'

export default function Categories() {
  return (
    <section id="modelos" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Modelos para cada história</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">Pessoas, pets, casais e edições de colecionador.</p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(c => (
            <li key={c.id} className={`group flex flex-col rounded-2xl p-6 shadow-lg transition hover:-translate-y-2 ${c.color} ${c.dark ? 'text-ink' : 'text-white'}`}>
              <span className="glass grid h-20 w-20 place-items-center rounded-2xl text-4xl" aria-hidden="true">{c.emoji}</span>
              <h3 className="mt-5 text-xl font-extrabold">{c.title}</h3>
              <p className="mt-2 flex-1">{c.text}</p>
              <a href="#precos" className={`mt-5 font-display font-bold underline underline-offset-4`}>
                Quero este modelo <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
