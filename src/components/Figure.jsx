// Miniatura SVG estilo Pop cabeçudinho. Leve, sem CLS (tamanho fixo via viewBox).
export default function Figure({ hair = '#3B2A20', outfit = '#6C38FF', pet = false, className = '' }) {
  return (
    <svg viewBox="0 0 200 260" className={className} role="img" aria-label="Miniatura colecionável estilo Pop">
      <ellipse cx="100" cy="248" rx="62" ry="9" fill="#0F1424" opacity=".18" />
      <rect x="62" y="168" width="76" height="70" rx="26" fill={outfit} />
      <rect x="76" y="226" width="20" height="16" rx="8" fill="#1E293B" />
      <rect x="104" y="226" width="20" height="16" rx="8" fill="#1E293B" />
      <circle cx="100" cy="98" r="70" fill="#FFD9B8" />
      <path d="M30 94c0-46 32-72 70-72s70 26 70 72c-14-22-40-32-70-32S44 72 30 94z" fill={hair} />
      <ellipse cx="74" cy="104" rx="9" ry="12" fill="#1E293B" />
      <ellipse cx="126" cy="104" rx="9" ry="12" fill="#1E293B" />
      <circle cx="77" cy="99" r="3.5" fill="#fff" />
      <circle cx="129" cy="99" r="3.5" fill="#fff" />
      <ellipse cx="58" cy="128" rx="10" ry="6" fill="#FF6584" opacity=".45" />
      <ellipse cx="142" cy="128" rx="10" ry="6" fill="#FF6584" opacity=".45" />
      <path d="M86 132q14 14 28 0" stroke="#1E293B" strokeWidth="4" fill="none" strokeLinecap="round" />
      {pet && (
        <g>
          <ellipse cx="160" cy="226" rx="26" ry="18" fill="#C98B4E" />
          <circle cx="170" cy="204" r="16" fill="#C98B4E" />
          <path d="M160 192l-4-14 14 8zM180 192l4-14-14 8z" fill="#A66F37" />
          <circle cx="166" cy="203" r="2.5" fill="#1E293B" />
          <circle cx="175" cy="203" r="2.5" fill="#1E293B" />
        </g>
      )}
    </svg>
  )
}
