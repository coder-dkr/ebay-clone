import Footer from "./components/Footer"
import Head from "./components/Head"
import HeroSection from "./components/HeroSection"


const App = () => {
  return (
    <>
    
    <Head/>
    <section className="mx-14">
      <HeroSection/>
    </section>
    <Footer/>

    
    <span className="absolute  bottom-5 right-7 bg-white text-black text-base px-4 py-2 rounded-full shadow-[0px_3px_5px_0px_gray] cursor-pointer">?</span>
      
    </>
  )
}

export default App

