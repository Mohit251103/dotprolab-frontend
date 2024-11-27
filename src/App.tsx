import About from "./components/about/About"
import Faq from "./components/faq/Faq"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"

function App() {

  return (
    <div className="bg-[#071624] text-white overflow-auto overflow-x-hidden">
      <Hero />
      <About />
      <Faq />
      <Footer/>
    </div>
  )
}

export default App
