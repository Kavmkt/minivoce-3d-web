import { WHATSAPP_URL, REPO_URL } from '../data'

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-snow">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-extrabold">Mini<span className="text-accent">Você</span> 3D</p>
          <p className="mt-2 text-sm text-snow/85">Colecionáveis personalizados para pessoas e pets.</p>
        </div>
        <nav aria-label="Rodapé">
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-accent" href="#como-funciona">Como funciona</a></li>
            <li><a className="hover:text-accent" href="#faq">FAQ</a></li>
            <li><a className="hover:text-accent" href="#termos">Termos de uso</a></li>
            <li><a className="hover:text-accent" href={REPO_URL} rel="noopener noreferrer">Código / créditos</a></li>
          </ul>
        </nav>
        <div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent" aria-label="Falar com o suporte pelo WhatsApp">Suporte no WhatsApp</a>
        </div>
      </div>
      <div id="termos" className="border-t border-white/10 px-4 py-6 text-center text-xs text-snow/75">
        <p>Produto customizado independente, sem vínculo com marcas, estúdios ou franquias de bonecos colecionáveis. Peças feitas sob encomenda; pequenas variações artesanais são esperadas.</p>
        <p className="mt-2">© {new Date().getFullYear()} MiniVocê 3D. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
