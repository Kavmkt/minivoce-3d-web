import { useState } from 'react'
import { navLinks, APP_URL } from '../data'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface-dark/90 backdrop-blur text-snow">
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#topo" className="flex items-center gap-3" aria-label="MiniVocê 3D — início">
          <span className="whitespace-nowrap font-display text-xl font-extrabold">Mini<span className="text-accent">Você</span> 3D</span>
          <span className="hidden rounded-full bg-primary/30 px-2.5 py-1 text-[11px] font-semibold text-snow ring-1 ring-primary sm:inline">Colecionáveis Sob Medida</span>
        </a>
        <ul className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {navLinks.map(l => (
            <li key={l.href}><a href={l.href} className="py-2 hover:text-accent">{l.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={APP_URL} className="btn btn-accent !min-h-[40px] !px-3 !py-2 text-sm !shadow-none sm:!px-4" aria-label="Criar Meu Personagem">Criar <span className="hidden sm:inline">Meu </span>Personagem</a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl ring-1 ring-white/30 lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen(o => !o)}
          >
            <span aria-hidden="true" className="text-xl">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>
      {open && (
        <ul id="menu-mobile" className="border-t border-white/10 bg-surface-dark px-4 pb-4 lg:hidden">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 font-medium">{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
