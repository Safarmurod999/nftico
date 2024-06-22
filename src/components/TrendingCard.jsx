import React from 'react'

const TrendingCard = ({ img, profession, bid, price, owner }) => {
    return (
        <div className='w-full p-[1px] bg-[#E7EBEE66] hover:bg-linear rounded-xl cursor-pointer'>
            <div className='w-full h-full p-6 flex flex-col items-start justify-start bg-[#1E1B33] rounded-xl'>
                <img src={img} alt="Image" className='w-full mb-[20px]' />
                <h3 className='flex justify-start items-center gap-[5px] mb-[8px]'>
                    <span className='text-[14px]'>By {owner}</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="6" fill="#F4C558" />
                        <path d="M8.2275 3.7275C8.33315 3.62691 8.47374 3.57131 8.61961 3.57241C8.76548 3.57352 8.90521 3.63124 9.00933 3.73341C9.11345 3.83558 9.1738 3.97421 9.17766 4.12003C9.18151 4.26585 9.12857 4.40747 9.03 4.515L6.0375 8.2575C5.98604 8.31292 5.92393 8.3574 5.8549 8.38827C5.78586 8.41915 5.7113 8.43578 5.63568 8.43718C5.56007 8.43858 5.48495 8.42472 5.41481 8.39642C5.34468 8.36813 5.28097 8.32598 5.2275 8.2725L3.243 6.288C3.18773 6.2365 3.1434 6.1744 3.11266 6.1054C3.08192 6.0364 3.06538 5.96192 3.06405 5.88639C3.06272 5.81086 3.07661 5.73584 3.1049 5.6658C3.13319 5.59576 3.1753 5.53213 3.22872 5.47872C3.28213 5.42531 3.34576 5.3832 3.4158 5.35491C3.48584 5.32661 3.56086 5.31272 3.63639 5.31405C3.71192 5.31539 3.7864 5.33192 3.8554 5.36266C3.9244 5.39341 3.9865 5.43773 4.038 5.493L5.6085 7.06275L8.21325 3.744C8.21794 3.73822 8.22294 3.73271 8.22825 3.7275H8.2275Z" fill="#1E1B33" />
                    </svg>
                </h3>
                <p className='mb-[16px] font-medium text-xl leading-[29px]'>{profession}</p>
                <div className="w-full flex items-start justify-between p-[16px] border-[0.5px] border-[#E7E7E766] rounded-lg">
                    <div className="">
                        <p className='text-[#C0C0C0] mb-[10px]'>From</p>
                        <p>{price > 0 ? `${price} ETH` : 'Not For Sale'}</p>
                    </div>
                    <div className="">
                        <p className='text-[#C0C0C0] mb-[10px]'>Highest Bid</p>
                        <p>{bid} ETH</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingCard