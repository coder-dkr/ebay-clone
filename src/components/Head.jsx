import MainBar from '../ui/MainBar'
import TopBar from '../ui/TopBar'

const Head = () => {
    return (
        <>
            <TopBar />
            <MainBar />
            <ul className='flex justify-center items-center py-2 gap-x-7'>
                <li className='text-xs cursor-pointer hover:text-blue-600 hover:underline'>Explore (New!)</li>
                <li className='text-xs cursor-pointer hover:text-blue-600 hover:underline'>Saved</li>
                <li className='text-xs cursor-pointer hover:text-blue-600 hover:underline'>Motors</li>
                <li className='text-xs cursor-pointer hover:text-blue-600 hover:underline'>Electronics</li>
                <li className='text-xs cursor-pointer hover:text-blue-600 hover:underline'>Collectibles</li>
                <li className='text-xs cursor-pointer hover:text-blue-600 hover:underline'>Home & Garden</li>
                <li className='text-xs cursor-pointer hover:text-blue-600 hover:underline'>Fashion</li>
                <li className='text-xs cursor-pointer hover:text-blue-600 hover:underline'>Toys</li>
                <li className='text-xs cursor-pointer hover:text-blue-600 hover:underline'>Sporting Goods</li>
                <li className='text-xs cursor-pointer hover:text-blue-600 hover:underline'>Business & Industrial</li>
                <li className='text-xs cursor-pointer hover:text-blue-600 hover:underline'>Jewelry & Watches</li>
                <li className='text-xs cursor-pointer hover:text-blue-600 hover:underline'>eBay Live</li>
                <li className='text-xs cursor-pointer hover:text-blue-600 hover:underline'>Refurbished</li>
            </ul>
        </>
    )
}

export default Head
