import { useState } from 'react'
import { faqs } from '../data'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="bg-surface-light py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Perguntas frequentes</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="rounded-2xl bg-white shadow-lg">
                <h3>
                  <button
                    type="button" id={`faq-btn-${i}`} aria-expanded={isOpen} aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-display font-bold"
                  >
                    {f.q}
                    <span aria-hidden="true" className="text-2xl text-primary">{isOpen ? '−' : '+'}</span>
                  </button>
                </h3>
                <div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen} className="px-5 pb-5 text-slate-700">
                  {f.a}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
