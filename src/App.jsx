import Footer from "./components/Footer"
import Head from "./components/Head"
import HeroSection from "./components/HeroSection"
import Collections from "./components/Collections"


const App = () => {
  return (
    <>
    
    <Head/>
    <section className="mx-14">
      <HeroSection/>
      <Collections/>
    </section>
    <Footer/>
      
    </>
  )
}

export default App

