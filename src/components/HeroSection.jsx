import React from 'react'
import Carousel from '../ui/Carousel'

const HeroSection = () => {
  return (
    <>
      <Carousel/>
      <div className="flex justify-between items-center px-8 py-8 bg-[#71e3e2] text-[rgb(0_49_71)] rounded-3xl mt-8">
        <div className="flex flex-col gap-y-2">
            <h2 className="font-bold text-2xl">Up to 60% off select Apple tech</h2>
            <p className="text-sm font-normal">Save on iPhones, MacBooks, and more with a one-year warranty.</p>
        </div>
        <button className="bg-[rgb(0_49_71)] text-[#71e3e2] py-3 px-6 font-bold rounded-full">Shop now</button>
    </div>
    </>
  )
}

export default HeroSection


