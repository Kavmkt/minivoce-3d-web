import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Categories from './components/Categories'
import Regions from './components/Regions'
import Quality from './components/Quality'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#portfolio" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[60] focus:rounded-lg focus:bg-accent focus:p-3 focus:font-bold">Pular para o conteúdo</a>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <HowItWorks />
        <Pricing />
        <Categories />
        <Regions />
        <Quality />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
