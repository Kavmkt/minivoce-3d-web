import { useState } from 'react'
import { estimateShipping } from '../shipping'
import { waLink } from '../data'

const brl = n => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })
const mask = v => v.replace(/\D/g, '').slice(0, 8).replace(/^(\d{5})(\d)/, '$1-$2')

export default function ShippingCalc() {
  const [cep, setCep] = useState('')
  const [result, setResult] = useState(undefined) // undefined = ainda não calculou, null = CEP inválido

  const submit = e => { e.preventDefault(); setResult(estimateShipping(cep)) }

  return (
    <div className="mt-10 rounded-2xl bg-surface-dark p-6 text-snow shadow-lg">
      <h3 className="text-xl font-extrabold text-accent">Simule o frete (Sedex)</h3>
      <p className="mt-1 text-sm text-snow/85">Digite o seu CEP para ver uma estimativa de valor e prazo.</p>

      <form onSubmit={submit} className="mt-4 flex flex-col gap-3 sm:flex-row" noValidate>
        <label htmlFor="cep" className="sr-only">CEP de entrega</label>
        <input
          id="cep" inputMode="numeric" autoComplete="postal-code" placeholder="00000-000"
          value={cep} onChange={e => { setCep(mask(e.target.value)); setResult(undefined) }}
          aria-describedby="cep-result"
          className="min-h-[48px] flex-1 rounded-xl border-2 border-white/30 bg-white px-4 text-lg font-semibold text-ink placeholder:text-slate-500"
        />
        <button type="submit" className="btn btn-accent">Calcular</button>
      </form>

      <div id="cep-result" role="status" aria-live="polite" className="mt-4 text-sm">
        {result === null && <p className="font-semibold text-accent">CEP não reconhecido. Confira os 8 números ou fale com a gente pelo WhatsApp.</p>}
        {result && (
          <div className="rounded-xl bg-white/10 p-4">
            <p className="text-snow/85">{result.label}</p>
            <p className="font-display text-3xl font-extrabold">{brl(result.min)} a {brl(result.max)}</p>
            <p className="text-snow/85">Prazo estimado: {result.days} após a postagem.</p>
            <p className="mt-2 text-xs text-snow/75">Valor aproximado, apenas para referência. O frete exato é calculado pelo seu CEP e confirmado por nós no WhatsApp antes de você finalizar.</p>
            <a className="mt-3 inline-block font-bold underline" target="_blank" rel="noopener noreferrer"
               href={waLink(`Olá! Meu CEP é ${cep}. Pode confirmar o valor exato do frete?`)}>Confirmar frete no WhatsApp →</a>
          </div>
        )}
      </div>
    </div>
  )
}
