import { ChevronDown, Search } from 'lucide-react';
import  { useState } from 'react';

const MainBar = () => {
    const [category, setCategory] = useState("All Categories");

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
      };

    return (
        <div className='flex justify-between px-14 items-center py-4 gap-x-5 border border-solid border-gray-200 border-r-0 border-l-0 border-t-0'>
            <a href="/"><img src="/ebay.svg" className="w-44"></img></a>
            <button className="w-fit flex items-center justify-center">
                <span className='text-[0.8rem] font-medium text-gray-500 leading-[1] w-16'>Shop by category</span> <ChevronDown className='w-4 h-4' />
            </button>

            <div className='flex items-center justify-evenly border-[3px] border-solid border-black w-full gap-x-4 rounded-full px-4'>
                <Search className='min-w-4 min-h-4 cursor-pointer font-bold' />
                <input className='w-full outline-none border-0 py-2' type="text" placeholder='Search for anything' />
                <select className='outline-none cursor-pointer  border-2 py-2 px-2  border-t-0 border-b-0 border-r-0 border-solid border-gray-300 text-[0.8rem]' name="categories" value={category} onChange={handleCategoryChange} >
                    <option className='text-xs' value="All Categories">All Categories</option>
                    <option className='text-xs' value="Antique">Antique</option>
                    <option className='text-xs' value="Art">Art</option>
                    <option className='text-xs' value="Books">Books</option>
                    <option className='text-xs' value="Decorations">Decorations</option>
                </select>
            </div>

            <div className='flex justify-center items-center gap-x-2 cursor-pointer'>
                <button className='bg-[#3665f3] text-white font-bold text-sm rounded-full py-3 px-14'>Search</button>
                <span className='text-xs hover:text-blue-600'>Advanced</span>
            </div>
        </div>
    )
}

export default MainBar
