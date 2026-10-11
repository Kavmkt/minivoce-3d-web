import { shippingZones } from './data'

const inRange = (n, ranges) => ranges.some(([a, b]) => n >= a && n <= b)

// Descobre a região pelo CEP (faixas oficiais por estado), sem consultar nenhum serviço externo.
export function estimateShipping(cepInput) {
  const cep = String(cepInput).replace(/\D/g, '')
  if (cep.length !== 8) return null
  const n = Number(cep.slice(0, 5))

  let zone = null
  if (inRange(n, [[6000, 6999], [7700, 7799]])) zone = 'local' // Osasco, Barueri, Santana de Parnaíba, Cotia, Cajamar...
  else if (inRange(n, [[1000, 9999]])) zone = 'spGrande'
  else if (inRange(n, [[10000, 19999]])) zone = 'spInterior'
  else if (inRange(n, [[20000, 39999]])) zone = 'sudeste' // RJ, ES, MG
  else if (inRange(n, [[80000, 99999]])) zone = 'sul'
  else if (inRange(n, [[70000, 73699], [73700, 76799], [78000, 78899], [79000, 79999], [77000, 77999]])) zone = 'centroOeste' // DF, GO, MT, MS, TO
  else if (inRange(n, [[40000, 65999]])) zone = 'nordeste'
  else if (inRange(n, [[66000, 69999], [76800, 76999], [78900, 78999]])) zone = 'norte'
  else if (inRange(n, [[72800, 72999]])) zone = 'centroOeste'

  return zone ? { zone, ...shippingZones[zone] } : null
}
