import { useRef, useState } from 'react'
import { portfolio, APP_URL } from '../data'

const src = f => `${import.meta.env.BASE_URL}portfolio/${f}.webp`

export default function Portfolio() {
  const dialog = useRef(null)
  const [current, setCurrent] = useState(null)

  const open = i => { setCurrent(i); dialog.current?.showModal() }
  const step = d => setCurrent(c => (c + d + portfolio.length) % portfolio.length)
  const item = current === null ? null : portfolio[current]

  return (
    <section id="portfolio" className="bg-surface-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Peças reais, feitas à mão</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">Veja alguns colecionáveis que já saíram do nosso ateliê. Toque para ampliar.</p>

        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {portfolio.map((p, i) => (
            <li key={p.file}>
              <button
                type="button" onClick={() => open(i)}
                aria-label={`Ampliar foto: ${p.label}`}
                className="group relative block w-full overflow-hidden rounded-2xl bg-white text-left shadow-lg transition hover:-translate-y-1"
              >
                <img
                  src={src(p.file)} alt={p.alt} width="900" height="1206"
                  loading={i < 2 ? 'eager' : 'lazy'} decoding="async"
                  className="aspect-[3/4] w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface-dark/90 to-transparent p-4 pt-12 text-snow">
                  <span className="block text-xs font-semibold text-accent">{p.cat}</span>
                  <span className="block font-display text-base font-extrabold">{p.label}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a href={APP_URL} className="btn btn-primary text-lg">Quero o meu também</a>
        </div>
      </div>

      <dialog
        ref={dialog} onClose={() => setCurrent(null)}
        onClick={e => { if (e.target === dialog.current) dialog.current.close() }}
        aria-label="Foto ampliada"
        className="m-auto max-h-[95vh] w-[min(92vw,560px)] overflow-visible rounded-2xl bg-transparent p-0 backdrop:bg-surface-dark/85"
      >
        {item && (
          <div className="relative">
            <img src={src(item.file)} alt={item.alt} className="max-h-[85vh] w-full rounded-2xl object-contain" />
            <p className="mt-2 text-center font-display font-bold text-snow">{item.label}</p>
            <button type="button" onClick={() => dialog.current.close()} aria-label="Fechar"
              className="absolute right-2 top-2 grid h-11 w-11 place-items-center rounded-full bg-accent text-xl font-bold text-ink">✕</button>
            <button type="button" onClick={() => step(-1)} aria-label="Foto anterior"
              className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl text-ink">‹</button>
            <button type="button" onClick={() => step(1)} aria-label="Próxima foto"
              className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl text-ink">›</button>
          </div>
        )}
      </dialog>
    </section>
  )
}
