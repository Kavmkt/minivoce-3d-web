// Conteúdo editável do site. Altere aqui prazos, links e textos sem mexer nos componentes.
export const APP_URL = 'https://app.minivoce3d.com.br' // TODO: URL real do criador
export const WHATSAPP = '5511999999999' // TODO: DDI+DDD+número
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá! Quero saber mais sobre os colecionáveis MiniVocê 3D.')}`
export const REPO_URL = 'https://github.com/Kavmkt/minivoce-3d-web'

export const navLinks = [
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#modelos', label: 'Modelos' },
  { href: '#regioes', label: 'Regiões de Entrega' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#faq', label: 'FAQ' },
]

export const steps = [
  { n: 1, title: 'Monte no App', tag: 'Preview instantâneo',
    text: 'Escolha cabelo, roupas, pet e acessórios e veja a prévia na hora. Tudo pelo celular, sem precisar de conhecimento técnico.' },
  { n: 2, title: 'Produção Artesanal 3D', tag: 'Alta definição',
    text: 'Modelagem modular, impressão 3D em alta definição e pintura detalhada à mão, peça por peça. Você aprova antes da pintura.' },
  { n: 3, title: 'Unboxing na Sua Porta', tag: 'Caixa de colecionador',
    text: 'Peça selada em caixa personalizada com o seu nome e uma mini biografia impressa, pronta para presentear ou exibir.' },
]

export const categories = [
  { id: 'pessoas', title: 'Você & Amigos', emoji: '🧑‍🎤', color: 'bg-primary', text: 'Avatares humanos com roupas temáticas e profissões: médico, chef, dev, atleta, noiva e muito mais.' },
  { id: 'pets', title: 'Pets & Memoriais', emoji: '🐶', color: 'bg-warm', text: 'Cães, gatos e outros animais com traços de pelagem e manchas características. Ótimo também como homenagem.' },
  { id: 'casais', title: 'Casais & Duplas', emoji: '💞', color: 'bg-accent', dark: true, text: 'Edições especiais para presentes, aniversários de namoro e topos de bolo de casamento.' },
  { id: 'colecionador', title: 'Edição de Colecionador', emoji: '🏆', color: 'bg-surface-dark', text: 'Acompanha redoma de proteção e caixa especial numerada. Tiragem limitada.' },
]

export const regions = [
  { name: 'Alphaville & Tamboré', note: 'Entrega direta em condomínios' },
  { name: 'Barueri', note: 'Centro e bairros' },
  { name: 'Santana de Parnaíba', note: 'Aldeia da Serra e região' },
  { name: 'Cajamar', note: 'Polvilho e Jordanésia' },
  { name: 'Osasco e Grande SP', note: 'Via Lalamove, Uber Flash ou Sedex' },
]

export const deadlines = [
  { stage: 'Aprovação da prévia', time: '1 dia útil', note: 'Você confirma o visual antes da pintura.' },
  { stage: 'Modelagem e impressão 3D', time: '3 a 5 dias úteis', note: 'Prazo exemplo — ajuste conforme sua capacidade.' },
  { stage: 'Pintura e acabamento', time: '2 a 4 dias úteis', note: 'Pintura artesanal peça a peça.' },
  { stage: 'Envio local (Região Oeste)', time: 'Mesmo dia a 1 dia útil', note: 'Uber Flash / Lalamove.' },
  { stage: 'Envio nacional (Sedex)', time: '2 a 7 dias úteis', note: 'Embalagem reforçada anti-impacto.' },
]

export const reviews = [
  { name: 'Camila R.', place: 'Alphaville', text: 'Fiz o meu e do meu golden. Ficou a cara dos dois, e a caixa é linda demais!' },
  { name: 'Rafael T.', place: 'Barueri', text: 'Presente de aniversário de namoro. Minha namorada chorou. Chegou rápido e bem protegido.' },
  { name: 'Juliana M.', place: 'Santana de Parnaíba', text: 'Aprovei a prévia antes da pintura, isso me deu muita segurança. Atendimento excelente.' },
]
// Substitua pelas avaliações reais dos seus clientes antes de publicar.

export const faqs = [
  { q: 'O que é o estilo Pop cabeçudinho?', a: 'É um estilo caricatural de colecionável com cabeça grande, olhos expressivos e corpo compacto, inspirado nos bonecos “pop” de coleção. Ele destaca traços marcantes (cabelo, óculos, pelagem, manchas) em vez de buscar realismo fotográfico.' },
  { q: 'Como o app usa as imagens e escolhas para criar o boneco?', a: 'Você escolhe as características no app (cabelo, roupa, acessórios, pet) e pode enviar fotos de referência. Elas servem de guia para a nossa equipe modelar o seu personagem. Suas imagens são usadas somente para produzir a sua peça.' },
  { q: 'Posso aprovar antes de enviar para a pintura?', a: 'Sim. Depois da modelagem, você recebe uma prévia para aprovar ou pedir ajustes. A pintura só começa após o seu OK.' },
  { q: 'Como funciona a entrega em condomínios de Alphaville e Santana de Parnaíba?', a: 'Combinamos a entrega com você e informamos o nome na portaria. Em condomínios que não permitem entregadores externos, agendamos a retirada na portaria ou um ponto de encontro. A peça segue em embalagem rígida e protegida.' },
]

export const portfolio = [
  { file: 'safari-familia', alt: 'Família de três colecionáveis com roupas de safári: pai com binóculos, mãe com chapéu e filho com lupa', label: 'Família Safári', cat: 'Você & Amigos' },
  { file: 'casamento', alt: 'Casal de noivos colecionáveis: noivo de smoking com barba e noiva de vestido branco com buquê', label: 'Casamento', cat: 'Casais & Duplas' },
  { file: 'casal-banco-bulldog', alt: 'Casal colecionável sentado em um banco com um bulldog inglês entre os dois', label: 'Casal + Pet', cat: 'Pets & Memoriais' },
  { file: 'casal-anos-50', alt: 'Casal colecionável estilo anos 50: ele de jaqueta de couro e ela de vestido vermelho de bolinhas', label: 'Casal Anos 50', cat: 'Casais & Duplas' },
  { file: 'familia-dino', alt: 'Família colecionável com um menino abraçado a um dinossauro verde de brinquedo', label: 'Família + Dino', cat: 'Você & Amigos' },
  { file: 'veterinaria-gato', alt: 'Colecionável de veterinária de jaleco segurando um gatinho preto', label: 'Profissões e Pets', cat: 'Pets & Memoriais' },
]
