import { Bell , ShoppingCart ,ChevronDown} from 'lucide-react';

const TopBar = () => {
  return (
    <div className='flex items-center justify-between px-14 border border-solid border-gray-200 border-r-0 border-l-0 border-t-0 '>
      <ul className='flex justify-center items-center gap-x-4 text-xs font-medium'>
        <li className='cursor-pointer'>Hi! <span className='text-blue-600 underline'>Sign in</span> or <span className='text-blue-600 underline'>register</span></li>
        <li className='cursor-pointer'>Daily Deals</li>
        <li className='cursor-pointer'>Brand Outlet</li>
        <li className='cursor-pointer'>Gift Cards</li>
        <li className='cursor-pointer'>Help & Contact</li>
        <li className='cursor-pointer'><img src="https://ir.ebaystatic.com/cr/v/c01/FallSaleV1.jpg" height="30" width="150" alt="Get the coupon" /></li>
      </ul>

      <ul className='flex justify-center items-center gap-x-4 text-[0.85rem] font-[450]'>
        <li className='cursor-pointer'>Sell</li>
        <li className='cursor-pointer flex justify-center items-center gap-x-1'>Watchlist<ChevronDown className='w-4 h-4'/></li>
        <li className='cursor-pointer flex justify-center items-center gap-x-1'>My eBay<ChevronDown className='w-4 h-4'/></li>
        <li className='cursor-pointer pl-2'><Bell className='w-5 h-5'/></li>  
        <li className='cursor-pointer'><ShoppingCart className='w-5 h-5'/></li>  
      </ul>
    </div>
  )
}

export default TopBar
