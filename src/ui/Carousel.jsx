import { useState ,useEffect } from "react"
import { ChevronLeft , ChevronRight ,Pause , Play} from 'lucide-react';
import { Data } from "../constants/constant";


const Carousel = () => {
    const [index, setindex] = useState(0)
    const [paused, setpaused] = useState(false)
   

    const Livedata = Data[index];

    
    useEffect(() => {
        if(!paused){
            const intervalId = setInterval(() => {
                setindex((prevIndex) => (prevIndex === Data.length - 1 ? 0 : prevIndex + 1));
            }, 4000);
            return () => clearInterval(intervalId);
        }
    }, [paused]);  
    
      
    const handlePause = () => {
        setpaused(!paused)
    }
   
  return (
    <>
     <div>
        <div className={`w-full relative h-[22.5rem] rounded-3xl my-6 bg-no-repeat overflow-hidden duration-300  ${ Livedata.theme.isFull ? "bg-cover bg-center" : `bg-contain bg-right`}`}
        style={{backgroundImage : `url("${Livedata.image}")`,
                backgroundColor : Livedata.theme.bg != false ? Livedata.theme.bg : '' }}
        >

            <div className={`${Livedata.theme.showShade ?  'before:content-[""] before:bg-black before:h-[22.5rem] before:-top-[44%] before:-left-40 before:w-[80vh] before:-z-[10] before:absolute before:opacity-25  before:shadow-[40px_-20px_80px_50px_black]' : ''}  absolute flex flex-col items-start gap-y-3 top-1/2 -translate-y-1/2 left-24  drop-shadow-2xl`}
            style={{color : Livedata.theme.text}}
            >
                <h1 className="font-bold text-4xl w-96">{Livedata.title}</h1>
                <p className="w-80">{Livedata.subtitle}</p>
                <button 
                style={{backgroundColor : Livedata.theme.bgBtn}}
                className={`w-fit px-5 py-2 rounded-full shadow-sm font-semibold`}>{Livedata.btntext}</button>
            </div>

            <ul className="absolute right-10 bottom-4 flex justify-center items-center gap-x-2 ">
                <li onClick={() => {setindex((prevIndex) => (prevIndex === 0 ? Data.length - 1 : prevIndex - 1))}} className="bg-white p-2 rounded-full flex justify-center items-center cursor-pointer hover:opacity-75 duration-200 shadow-md"><ChevronLeft/></li>
                <li onClick={() => {setindex((prevIndex) => (prevIndex === Data.length - 1 ? 0 : prevIndex + 1))}} className="bg-white p-2 rounded-full flex justify-center items-center cursor-pointer hover:opacity-75 duration-200 shadow-md"><ChevronRight/></li>
                <li onClick={handlePause} className="bg-white p-2 rounded-full flex justify-center items-center cursor-pointer hover:opacity-75 duration-200 shadow-md">
                {paused ? <Play/> : <Pause/>}
                </li>
            </ul>

            <ul className="absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-center items-center gap-x-2 drop-shadow-lg">
                {Data.map((data,i) => {
                    return (<li key={i} className={`border-[2px] border-solid boder-black w-3 h-3 rounded-full ${index === i ? `bg-white` : ''} `}></li>)
                })
                }
            </ul>

        </div>
    </div> 
    </>
  )
}

export default Carousel
