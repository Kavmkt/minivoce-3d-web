import ShippingCalc from './ShippingCalc'
import { plans, CHECKOUT, SHIPPING_TEXT, waLink } from '../data'

const brl = n => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })

function Cta({ plan }) {
  const link = CHECKOUT[plan.id]
  const isQuote = plan.price === null
  const href = link || waLink(plan.msg)
  const label = isQuote ? 'Pedir orçamento' : link ? 'Pagar com Mercado Pago' : 'Comprar pelo WhatsApp'
  return (
    <a
      href={href} target="_blank" rel="noopener noreferrer"
      className={`btn w-full ${plan.highlight ? 'btn-accent' : 'btn-primary'}`}
    >
      {label}
    </a>
  )
}

export default function Pricing() {
  return (
    <section id="precos" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Escolha o seu colecionável</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Preço fechado, pagamento integral e produção em 3 dias após a confirmação.
        </p>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map(p => (
            <li
              key={p.id}
              className={`relative flex flex-col rounded-2xl p-7 shadow-lg ${p.highlight ? 'bg-surface-dark text-snow ring-4 ring-accent' : 'bg-surface-light'}`}
            >
              {p.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-extrabold text-ink">MAIS ESCOLHIDO</span>
              )}
              <h3 className="text-2xl font-extrabold">{p.name}</h3>
              <p className={p.highlight ? 'text-snow/85' : 'text-slate-600'}>{p.tagline}</p>
              <p className="mt-5 font-display text-5xl font-extrabold">
                {p.price === null ? <span className="text-3xl">A combinar</span> : brl(p.price)}
              </p>
              {p.price !== null && <p className={`text-sm ${p.highlight ? 'text-snow/80' : 'text-slate-600'}`}>pagamento único + frete Sedex</p>}
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {p.features.map(f => (
                  <li key={f} className="flex gap-2"><span aria-hidden="true" className={p.highlight ? 'text-accent' : 'text-primary'}>✔</span><span>{f}</span></li>
                ))}
              </ul>
              <div className="mt-7"><Cta plan={p} /></div>
            </li>
          ))}
        </ul>

        <ShippingCalc />

        <div className="mt-10 grid gap-4 rounded-2xl bg-surface-light p-6 text-sm text-slate-700 md:grid-cols-3">
          <p><strong>🔒 Pagamento seguro.</strong> Pix ou cartão pelo Mercado Pago, em ambiente do próprio Mercado Pago. Não armazenamos dados do seu cartão.</p>
          <p><strong>📦 Envio por Sedex.</strong> Com rastreio e embalagem protegida. {SHIPPING_TEXT}</p>
          <p><strong>💬 Prefere conversar?</strong> Faça o pedido pelo <a className="font-bold text-primary-600 underline" href={waLink('Olá! Quero fazer um pedido da MiniVocê 3D pelo WhatsApp.')} target="_blank" rel="noopener noreferrer">WhatsApp</a>. Você será atendido por lá e finaliza a compra pelo link seguro.</p>
        </div>
      </div>
    </section>
  )
}
