import { Facebook ,Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <div className='bg-[#f7f7f7] border border-solid border-gray-300 border-b-0 border-r-0 border-l-0 mt-14 p-12 pb-8 flex flex-col gap-y-12'>
            <div className='flex items-start justify-between'>
                <ul className='flex flex-col gap-y-2'>
                    <li className='text-sm text-gray-600  font-bold'>Buy</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Registration</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Bidding & buying help</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Stores</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>eBay for Charity</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Charity Shop</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Seasonal Sales and events</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>eBay Gift Cards</li>
                </ul>

                <ul className='flex flex-col gap-y-2'>
                    <li className='text-sm text-gray-600  font-bold'>About eBay</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Company info</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>News</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Deferred Prosecution Agreement with District of Massachusetts</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Investors</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Careers</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Diversity & Inclusion</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Global Impact</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Government relations</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Advertise with us</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Policies</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Verified Rights Owner (VeRO) Program</li>
                    <li className='text-xs text-gray-600 hover:underline cursor-pointer '>eCI Licenses</li>
                </ul>

                
                <div className='flex flex-col gap-y-4'>
                    <ul className='flex flex-col gap-y-2'>
                        <li className='text-sm text-gray-600  font-bold'>eBay companies</li>
                        <li className='text-xs text-gray-600 hover:underline cursor-pointer '>TCGplayer</li>

                    </ul>
                    <ul className='flex  items-start flex-col gap-y-2'>
                        <li className='text-sm text-gray-600  font-bold'>Stay connected</li>
                        <li className='text-xs text-gray-600 hover:underline cursor-pointer  flex justify-center items-center'><Facebook className='w-4 h-4'/>Facebook</li>
                        <li className='text-xs text-gray-600 hover:underline cursor-pointer  flex justify-center items-center'><Twitter className='w-4 h-4'/>Twitter</li>
                        
                    </ul>
                </div>


                <div className='flex flex-col gap-y-4'>
                    <ul className='flex flex-col gap-y-2'>
                        <li className='text-sm text-gray-600  font-bold'>Help & Contact</li>
                        <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Seller Center</li>
                        <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Contact Us</li>
                        <li className='text-xs text-gray-600 hover:underline cursor-pointer '>eBay Returns</li>
                        <li className='text-xs text-gray-600 hover:underline cursor-pointer '>eBay Money Back Guarantee</li>
                    </ul>
                    <ul className='flex flex-col gap-y-2'>
                        <li className='text-sm text-gray-600  font-bold'>Community</li>
                        <li className='text-xs text-gray-600 hover:underline cursor-pointer '>Announcements</li>
                        <li className='text-xs text-gray-600 hover:underline cursor-pointer '>eBay Community</li>
                        <li className='text-xs text-gray-600 hover:underline cursor-pointer '>eBay for Business Podcast</li>
                        <li className='text-xs text-gray-600 hover:underline cursor-pointer '>eBay Sites</li>
                    </ul>
                </div>
            </div>

            <div className='text-xs'>
            Copyright © 1995-2024 eBay Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Consumer Health Data, Payments Terms of Use, Cookies, CA Privacy Notice, Your Privacy Choices and AdChoice
            </div>
        </div>
    )
}

export default Footer
