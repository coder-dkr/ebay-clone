import { Trending } from "../constants/constant"
import { Heart } from 'lucide-react';

const Collections = () => {
    
  return (
    <div className="flex flex-col gap-y-9 mt-10">

      {Trending.map( (Trend,index) => {
          
        return(
            <div key={index} className="flex flex-col">
                <h1 className="font-semibold text-2xl mb-6">Trending in {Trend.name}</h1>
                <div className="flex justify-center items-start gap-x-4 overflow-auto h-fit">

                    {Trend.collection.map( (col,i) => {

                        return(
                            <div key={i} className="min-w-64 flex flex-col  items-start gap-y-2">
                                <div className="bg-[#f0f0f0] rounded-3xl bg-no-repeat bg-center bg-contain relative"
                                style={{
                                    backgroundImage : `url(${col.img})`,
                                    width : "250px",
                                    height : "250px"
                                }}>
                                    <div className="absolute top-2 right-3 bg-white p-3 rounded-full shadow-md cursor-pointer"><Heart className="w-4 h-4 hover:text-pink-500 hover:fill-pink-500"/></div>
                                </div>
                                <h3 className="text-base font-normal">{col.title}</h3>
                                <p className="font-bold">{col.price}</p>

                            </div>
                        )

                    })}
                </div>
            </div>
        )

      })
      }
        
    </div>
  )
}

export default Collections
