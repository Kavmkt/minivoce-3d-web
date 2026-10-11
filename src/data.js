// Conteúdo editável do site. Altere aqui prazos, links e textos sem mexer nos componentes.
export const APP_URL = 'https://app.minivoce3d.com.br' // TODO: URL real do criador
export const WHATSAPP = '5511993697504'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá! Quero saber mais sobre os colecionáveis MiniVocê 3D.')}`
// Links de pagamento do Mercado Pago (Link de pagamento criado no painel do Mercado Pago).
// Enquanto estiver vazio, o botão abre o WhatsApp com a mensagem de compra.
export const CHECKOUT = {
  casal: 'https://mpago.la/15BqSNL', // R$ 190
  casalPet: '', // https://mpago.la/1oU5X34 cobra R$ 249,90 (≠ R$ 230 do site). Corrigir o valor no Mercado Pago e colar o link aqui.
}
export const PRODUCTION_DAYS = 3
export const SHIPPING_TEXT = 'Frete Sedex à parte, calculado pelo CEP. Simule abaixo; o valor exato é confirmado pelo WhatsApp.'
export const waLink = msg => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

export const plans = [
  { id: 'casal', name: 'Casal', price: 190, tagline: '1 ou 2 bonecos',
    features: ['Um ou dois personagens (você, casal, dupla)', 'Pintura artesanal e caixa de colecionador', 'Acesso ao app para criar o seu personagem', 'Produção em 3 dias após o pagamento', 'Envio por Sedex (frete à parte)'],
    msg: 'Olá! Quero comprar o plano Casal (R$ 190) da MiniVocê 3D.' },
  { id: 'casalPet', name: 'Casal + Pet', price: 230, tagline: 'Casal com seu pet', highlight: true,
    features: ['Dois personagens + pet com pelagem e manchas', 'Pintura artesanal e caixa de colecionador', 'Acesso ao app para criar o seu personagem', 'Produção em 3 dias após o pagamento', 'Envio por Sedex (frete à parte)'],
    msg: 'Olá! Quero comprar o plano Casal + Pet (R$ 230) da MiniVocê 3D.' },
  { id: 'outros', name: 'Outros', price: null, tagline: 'Preço a combinar',
    features: ['Família, grupos, profissões, memoriais', 'Edição de colecionador com redoma', 'Orçamento pelo WhatsApp', 'Envio por Sedex (frete à parte)'],
    msg: 'Olá! Quero um orçamento para um colecionável personalizado diferente (MiniVocê 3D).' },
]

export const REPO_URL = 'https://github.com/Kavmkt/minivoce-3d-web'

export const navLinks = [
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#precos', label: 'Preços' },
  { href: '#modelos', label: 'Modelos' },
  { href: '#regioes', label: 'Entrega' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#faq', label: 'FAQ' },
]

export const steps = [
  { n: 1, title: 'Crie no App', tag: 'Prévia em minutos',
    text: 'Envie suas fotos no app e acompanhe a criação da prévia do seu personagem. Tudo pelo celular, sem precisar de conhecimento técnico.' },
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
  { name: 'Alphaville & Tamboré', note: 'Atendimento prioritário' },
  { name: 'Barueri', note: 'Centro e bairros' },
  { name: 'Santana de Parnaíba', note: 'Aldeia da Serra e região' },
  { name: 'Cajamar', note: 'Polvilho e Jordanésia' },
  { name: 'Osasco e Grande SP', note: 'Envio por Sedex' },
]

export const deadlines = [
  { stage: 'Pagamento confirmado', time: 'Dia 0', note: 'Pagamento integral pelo Mercado Pago (Pix ou cartão).' },
  { stage: 'Produção artesanal', time: '3 dias após o pagamento', note: 'Modelagem, impressão 3D e pintura peça a peça.' },
  { stage: 'Envio por Sedex', time: 'Prazo dos Correios', note: 'O prazo exato depende do CEP; você recebe o código de rastreio.' },
]

export const reviews = [
  { name: 'Camila R.', place: 'Alphaville', text: 'Fiz o meu e do meu golden. Ficou a cara dos dois, e a caixa é linda demais!' },
  { name: 'Rafael T.', place: 'Barueri', text: 'Presente de aniversário de namoro. Minha namorada chorou. Chegou rápido e bem protegido.' },
  { name: 'Juliana M.', place: 'Santana de Parnaíba', text: 'Aprovei a prévia antes da pintura, isso me deu muita segurança. Atendimento excelente.' },
]
// Substitua pelas avaliações reais dos seus clientes antes de publicar.

export const faqs = [
  { q: 'O que é o estilo Pop cabeçudinho?', a: 'É um estilo caricatural de colecionável com cabeça grande, olhos expressivos e corpo compacto, inspirado nos bonecos “pop” de coleção. Ele destaca traços marcantes (cabelo, óculos, pelagem, manchas) em vez de buscar realismo fotográfico.' },
  { q: 'Como o app usa as imagens e escolhas para criar o boneco?', a: 'Você envia fotos de referência no app e escolhe o que quer destacar (roupa, acessórios, pet). As imagens servem de base para criar a prévia do seu personagem, que depois nossa equipe modela. Suas imagens são usadas somente para produzir a sua peça.' },
  { q: 'Posso aprovar antes de enviar para a pintura?', a: 'Sim. Depois da modelagem, você recebe uma prévia para aprovar ou pedir ajustes. A pintura só começa após o seu OK.' },
  { q: 'Como funciona a entrega em condomínios de Alphaville e Santana de Parnaíba?', a: 'O envio é feito por Sedex, com rastreio, direto para o endereço informado. Em condomínios, informe o nome do morador e o bloco/casa e avise a portaria. Se o condomínio não aceita entregas dos Correios, você pode indicar um endereço alternativo (trabalho, familiar ou agência para retirada).' },
  { q: 'Como é o pagamento? É seguro?', a: 'O pagamento é integral e feito pelo Mercado Pago (Pix ou cartão), em ambiente do próprio Mercado Pago. Nós não vemos nem armazenamos os dados do seu cartão. Se preferir, você também pode fazer o pedido pelo WhatsApp.' },
  { q: 'Em quanto tempo recebo?', a: 'A produção leva 3 dias após a confirmação do pagamento. Depois disso o envio é por Sedex, com código de rastreio. O prazo de entrega depende do seu CEP.' },
]

export const portfolio = [
  { file: 'safari-familia', alt: 'Família de três colecionáveis com roupas de safári: pai com binóculos, mãe com chapéu e filho com lupa', label: 'Família Safári', cat: 'Você & Amigos' },
  { file: 'casamento', alt: 'Casal de noivos colecionáveis: noivo de smoking com barba e noiva de vestido branco com buquê', label: 'Casamento', cat: 'Casais & Duplas' },
  { file: 'casal-banco-bulldog', alt: 'Casal colecionável sentado em um banco com um bulldog inglês entre os dois', label: 'Casal + Pet', cat: 'Pets & Memoriais' },
  { file: 'casal-anos-50', alt: 'Casal colecionável estilo anos 50: ele de jaqueta de couro e ela de vestido vermelho de bolinhas', label: 'Casal Anos 50', cat: 'Casais & Duplas' },
  { file: 'familia-dino', alt: 'Família colecionável com um menino abraçado a um dinossauro verde de brinquedo', label: 'Família + Dino', cat: 'Você & Amigos' },
  { file: 'veterinaria-gato', alt: 'Colecionável de veterinária de jaleco segurando um gatinho preto', label: 'Profissões e Pets', cat: 'Pets & Memoriais' },
]

// Estimativa de Sedex saindo da Região Oeste de SP, pacote de ~1 kg (peça + caixa + proteção).
// São VALORES APROXIMADOS (faixas) para dar uma ideia ao cliente. Ajuste com o simulador dos Correios.
export const shippingZones = {
  local: { label: 'Região Oeste de SP', min: 22, max: 32, days: '1 a 2 dias úteis' },
  spGrande: { label: 'Grande São Paulo', min: 24, max: 34, days: '1 a 2 dias úteis' },
  spInterior: { label: 'Interior de SP', min: 30, max: 42, days: '1 a 3 dias úteis' },
  sudeste: { label: 'Sudeste (RJ, MG, ES)', min: 36, max: 50, days: '2 a 3 dias úteis' },
  sul: { label: 'Sul', min: 42, max: 58, days: '2 a 4 dias úteis' },
  centroOeste: { label: 'Centro-Oeste', min: 50, max: 68, days: '2 a 5 dias úteis' },
  nordeste: { label: 'Nordeste', min: 55, max: 80, days: '3 a 6 dias úteis' },
  norte: { label: 'Norte', min: 65, max: 95, days: '4 a 8 dias úteis' },
}
