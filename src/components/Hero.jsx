const photo = `${import.meta.env.BASE_URL}portfolio/safari-familia.webp`

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-surface-dark pt-16 text-snow">
      <div aria-hidden="true" className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-warm/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold ring-1 ring-white/25">
            Feito sob medida • Envio por Sedex • Peças exclusivas
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl xl:text-6xl">
            Você e seu pet transformados em <span className="text-accent">colecionáveis exclusivos.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-snow/90">
            Envie suas fotos no nosso app, veja a prévia do seu personagem e receba em casa com acabamento artesanal e caixa de colecionador.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#precos" className="btn btn-accent text-lg">Comprar o meu colecionável</a>
            <a href="#portfolio" className="btn btn-ghost text-lg">Ver Galeria de Modelos</a>
          </div>
        </div>

        {/* Caixa de colecionador com visor de acetato e foto real */}
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-3xl bg-gradient-to-b from-primary to-primary-600 p-4 shadow-2xl ring-1 ring-white/20">
            <div className="flex items-center justify-between px-2 pb-3 text-xs font-bold uppercase tracking-widest text-accent">
              <span>Edição nº 001</span><span>MiniVocê 3D</span>
            </div>
            <div className="glass relative overflow-hidden rounded-2xl p-2">
              <img
                src={photo} width="900" height="1206" fetchpriority="high" decoding="async"
                alt="Família de três colecionáveis personalizados com roupas de safári"
                className="aspect-[3/4] w-full rounded-xl object-cover"
              />
              <div aria-hidden="true" className="pointer-events-none absolute -left-10 top-0 h-full w-24 rotate-12 bg-white/20 blur-md" />
            </div>
            <p className="px-2 pt-3 text-center font-display text-sm font-extrabold">FAMÍLIA SAFÁRI</p>
          </div>
        </div>
      </div>
    </section>
  )
}
