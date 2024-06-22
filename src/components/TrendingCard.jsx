import React from 'react'

const TrendingCard = ({ img, profession, bid, price, owner, likes }) => {
    return (
        <div className='w-full p-[1px] bg-[#E7EBEE66] hover:bg-linear rounded-xl cursor-pointer'>
            <div className='group w-full h-full p-6 flex flex-col items-start justify-start bg-[#1E1B33] rounded-xl overflow-hidden'>
                <div className="w-full relative overflow-hidden">
                    <img src={img} alt="Image" className='w-full mb-[20px]' />
                    <div className="absolute flex flex-col justify-between items-start w-full h-full p-4 top-0 transition duration-300 -translate-y-[100%] group-hover:translate-y-0">
                        <div className="flex gap-1 ml-auto">
                            <span className='px-[12px] py-[8px] rounded-lg bg-[#1E1B33B8] flex items-center justify-center'>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.955 3.045C10.1052 2.19256 9.00327 1.63664 7.81267 1.45963C6.62206 1.28262 5.40611 1.49395 4.34504 2.06229C3.28397 2.63063 2.43427 3.52574 1.92188 4.61492C1.40949 5.70411 1.26168 6.92941 1.50037 8.1092C1.73905 9.28899 2.35153 10.3605 3.24701 11.1648C4.14248 11.9692 5.2733 12.4636 6.47185 12.5748C7.67039 12.686 8.87287 12.408 9.90104 11.7822C10.9292 11.1563 11.7283 10.2157 12.18 9.1H10.626C10.1933 9.86419 9.53203 10.4735 8.73506 10.8424C7.93809 11.2112 7.04556 11.3209 6.18298 11.1561C5.32041 10.9913 4.53119 10.5603 3.92631 9.92368C3.32142 9.28705 2.93131 8.47682 2.81083 7.60695C2.69035 6.73708 2.84556 5.85133 3.25464 5.07426C3.66372 4.29718 4.30608 3.66788 5.0914 3.27486C5.87671 2.88183 6.76546 2.74484 7.63267 2.88317C8.49988 3.02149 9.30192 3.42816 9.926 4.046L7.7 6.3H12.6V1.4L10.955 3.045Z" fill="white" />
                                </svg>
                            </span>
                            <p className='px-[12px] py-[8px] rounded-lg bg-[#1E1B33B8] flex items-center gap-1'>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1_422)">
                                        <path d="M12.8753 2.31566C11.3527 0.793463 8.87572 0.793463 7.35351 2.31566L6.99996 2.66902L6.6466 2.31566C5.1244 0.793257 2.64722 0.793257 1.12502 2.31566C-0.366276 3.80696 -0.37596 6.17082 1.10256 7.81438C2.45107 9.31288 6.4282 12.5503 6.59695 12.6874C6.7115 12.7805 6.84934 12.8258 6.98636 12.8258C6.99089 12.8258 6.99542 12.8258 6.99975 12.8256C7.1415 12.8322 7.28429 12.7836 7.40255 12.6874C7.5713 12.5503 11.5488 9.31288 12.8978 7.81417C14.3761 6.17082 14.3664 3.80696 12.8753 2.31566ZM11.9788 6.98734C10.9274 8.15537 8.03735 10.5644 6.99975 11.4192C5.96215 10.5646 3.07269 8.15578 2.02149 6.98755C0.990065 5.84116 0.980381 4.20852 1.99903 3.18988C2.51927 2.66984 3.20249 2.40962 3.88571 2.40962C4.56893 2.40962 5.25214 2.66963 5.77239 3.18988L6.54956 3.96705C6.64207 4.05956 6.75869 4.11478 6.88107 4.13415C7.07969 4.1768 7.29521 4.12137 7.44973 3.96726L8.22732 3.18988C9.26801 2.1496 10.9608 2.1498 12.0009 3.18988C13.0195 4.20852 13.0098 5.84116 11.9788 6.98734Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_422">
                                            <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className='font-medium leading-[17px]'>{likes}</span>
                            </p>
                        </div>
                        <button className='font-bold bg-linear p-[16px] h-[46px] rounded-lg flex items-center justify-center mx-auto mb-5'>Buy now</button>
                    </div>
                </div>
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