import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import { NavBar } from "./components/NavBar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import { motion } from "framer-motion";


function App() {

  return (
    <div className="overflow-x-hidden  text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 ">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      </div>


      
      
      <div className="mx-auto overflow-hidden px-6 md:max-w-7xl md:px-10 ">
        <NavBar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
        
    </div>
  )
}

export default App
