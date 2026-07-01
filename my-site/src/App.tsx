import SmoothScroll from './components/SmoothScroll'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import FeaturedProjects from './components/FeaturedProjects'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <SmoothScroll>
      <Header />
      <main style={{ width: '100%' }}>
        <Hero />
        <About />
        <Services />
        <FeaturedProjects />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </SmoothScroll>
  )
}

export default App
