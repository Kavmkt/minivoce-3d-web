import { reviews } from '../data'

export default function Reviews() {
  return (
    <section id="avaliacoes" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Quem já tem, ama</h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map(r => (
            <li key={r.name} className="rounded-2xl bg-surface-light p-6 shadow-lg">
              <p aria-label="5 de 5 estrelas" className="text-accent drop-shadow">★★★★★</p>
              <blockquote className="mt-3 text-slate-700">“{r.text}”</blockquote>
              <p className="mt-4 font-display font-bold">{r.name} <span className="font-sans text-sm font-normal text-slate-600">· {r.place}</span></p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
