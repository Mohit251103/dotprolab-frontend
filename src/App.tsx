import About from "./components/about/About"
import Faq from "./components/faq/Faq"
import Hero from "./components/hero/Hero"

function App() {

  return (
    <div className="bg-[#071624] text-white overflow-auto overflow-x-hidden">
      <Hero />
      <About />
      <Faq/>
    </div>
  )
}

export default App
