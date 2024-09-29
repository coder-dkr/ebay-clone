import Footer from "./components/Footer"
import Head from "./components/Head"
import HeroSection from "./components/HeroSection"
import Collections from "./components/Collections"
import BottomBanner from "./components/BottomBanner"
import Offer from "./ui/Offer"


const App = () => {
  return (
    <>
    <Head/>
    <section className="mx-14">
      <HeroSection/>
      <Collections/>
      <Offer bg="#191919" color="#e9e597" title="Flat 50% on DSLR Camera" sub="Brand New , free international shipping , gaurantee of 1 year with replacement for free" btn="Visit page" />
      <BottomBanner image="https://i.ebayimg.com/images/g/mv0AAOSwA-5m41W8/s-l960.webp" bg="#002a69" text="#d4e5fe" title="Capture the culture with 15% off" subtitle="Shop select sneakers and streetwear from Jordan, Gucci, and more." bgBtn="#d4e5fe" btntext="Get the coupon"/>
    </section>
    <Footer/>
      
    </>
  )
}

export default App

