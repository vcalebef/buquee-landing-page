import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyGlobalStyles from './styles/globalStyles'
import Hero from './containers/Hero'
import Features from './containers/Features'
import Menu from "./components/Menu"
import HowItWorks from './containers/HowItWorks'
import Pricing from './containers/Pricing'
import Testimonials from './containers/Testimonials'
import Footer from './containers/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyGlobalStyles />
    <Menu />

    <section id='hero'>
      <Hero />
    </section>

    <section id="beneficios">
      <Features />
    </section>

    <section id="como-funciona">
      <HowItWorks />
    </section>

    <section id="planos">
      <Pricing />
    </section>

      <Testimonials />

    <section id="contato">
      <Footer />
    </section>
  </StrictMode>
);
