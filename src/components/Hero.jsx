import { useState } from 'react'
import Figure from './Figure'
import { APP_URL } from '../data'

const hairs = [['#3B2A20', 'Castanho'], ['#E8B84A', 'Loiro'], ['#C2410C', 'Ruivo'], ['#1E293B', 'Preto']]
const outfits = [['#6C38FF', 'Roxo'], ['#FF6584', 'Coral'], ['#10B981', 'Verde'], ['#F59E0B', 'Laranja']]

function Swatches({ label, items, value, onChange }) {
  return (
    <fieldset>
      <legend className="mb-1 text-xs font-semibold text-snow/90">{label}</legend>
      <div className="flex gap-2">
        {items.map(([c, name]) => (
          <button
            key={c} type="button" onClick={() => onChange(c)}
            aria-label={`${label}: ${name}`} aria-pressed={value === c}
            className={`h-9 w-9 rounded-full ring-2 transition ${value === c ? 'ring-accent scale-110' : 'ring-white/40'}`}
            style={{ background: c }}
          />
        ))}
      </div>
    </fieldset>
  )
}

export default function Hero() {
  const [hair, setHair] = useState(hairs[0][0])
  const [outfit, setOutfit] = useState(outfits[0][0])
  const [pet, setPet] = useState(true)

  return (
    <section id="topo" className="relative overflow-hidden bg-surface-dark pt-16 text-snow">
      <div aria-hidden="true" className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-warm/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold ring-1 ring-white/25">
            Feito sob medida • Entrega rápida na Região Oeste de SP • Peças exclusivas
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl xl:text-6xl">
            Você e seu pet transformados em <span className="text-accent">colecionáveis exclusivos.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-snow/90">
            Personalize cada detalhe no nosso app, visualize na hora e receba em casa com acabamento artesanal e caixa de colecionador.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={APP_URL} className="btn btn-accent text-lg">Abrir o Criador no App</a>
            <a href="#modelos" className="btn btn-ghost text-lg">Ver Galeria de Modelos</a>
          </div>
        </div>

        {/* Mockup: caixa com visor de acetato */}
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-3xl bg-gradient-to-b from-primary to-primary-600 p-4 shadow-2xl ring-1 ring-white/20">
            <div className="flex items-center justify-between px-2 pb-3 text-xs font-bold uppercase tracking-widest text-accent">
              <span>Edição nº 001</span><span>MiniVocê 3D</span>
            </div>
            <div className="glass relative grid aspect-[4/5] place-items-center overflow-hidden rounded-2xl">
              <div aria-hidden="true" className="absolute -left-10 top-0 h-full w-24 rotate-12 bg-white/25 blur-md" />
              <Figure hair={hair} outfit={outfit} pet={pet} className="animate-float h-[88%] w-auto" />
            </div>
            <p className="px-2 pt-3 text-center font-display text-sm font-extrabold">SEU NOME AQUI</p>
          </div>
          <div className="mt-5 flex flex-wrap items-end justify-center gap-5 rounded-2xl bg-white/5 p-4 ring-1 ring-white/15">
            <Swatches label="Cabelo" items={hairs} value={hair} onChange={setHair} />
            <Swatches label="Roupa" items={outfits} value={outfit} onChange={setOutfit} />
            <button
              type="button" aria-pressed={pet} onClick={() => setPet(p => !p)}
              className={`btn !min-h-[40px] !px-4 !py-2 text-sm ${pet ? 'btn-accent !shadow-none' : 'btn-ghost'}`}
            >
              🐾 Pet {pet ? 'ligado' : 'desligado'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
