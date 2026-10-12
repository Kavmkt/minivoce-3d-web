import { useState } from 'react'
import { steps } from '../data'

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const s = steps[active]
  return (
    <section id="como-funciona" className="bg-surface-light py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Como funciona em 3 passos</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">Das suas fotos até a sua porta, com você aprovando a arte antes de pagar.</p>

        <div role="tablist" aria-label="Passos" className="mt-10 grid gap-3 sm:grid-cols-3">
          {steps.map((st, i) => (
            <button
              key={st.n} role="tab" id={`tab-${st.n}`} aria-selected={i === active} aria-controls="painel-passo"
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 rounded-2xl p-4 text-left shadow-lg transition ${i === active ? 'bg-primary text-white' : 'bg-white hover:bg-white/70'}`}
            >
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-display font-extrabold ${i === active ? 'bg-accent text-ink' : 'bg-primary text-white'}`}>{st.n}</span>
              <span className="font-display font-bold">{st.title}</span>
            </button>
          ))}
        </div>

        <div id="painel-passo" role="tabpanel" aria-labelledby={`tab-${s.n}`} className="mt-6 rounded-2xl bg-surface-dark p-8 text-snow shadow-lg">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink">{s.tag}</span>
          <h3 className="mt-4 text-2xl font-extrabold">{s.title}</h3>
          <p className="mt-3 max-w-2xl text-lg text-snow/90">{s.text}</p>
        </div>
      </div>
    </section>
  )
}
