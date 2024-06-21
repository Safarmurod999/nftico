import React from 'react'

const CollectionCard = ({ name, img, price, increase,eth }) => {
    return (
        <li className='p-[1px] rounded-xl bg-[#E7E7E766]'>
            <div className="w-full h-full p-[20px] rounded-xl bg-[#1E1B33] flex items-center justify-between gap-[12px]">
                <div>
                    <img src={img} alt="image" className="object-cover rounded-lg" />
                </div>
                <div className="flex flex-col items-start justify-start grow gap-[17px]">
                    <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row laptop:items-center justify-between w-full'>
                        <h2 className="text-[18px] md:text-[20px] leading-[26px] font-medium">{name}</h2>
                        <p className="text-sm text-[#03DB80]">{eth} ETH</p>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <p className="text-sm flex items-center gap-[3px]">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.65065 2.66665C8.16063 2.66665 7.76342 3.0646 7.76342 3.55552V4.26673H10.6469V6.9778H7.71903V8.13336C7.71903 10.2689 5.9911 12 3.85951 12C1.72798 12 0 10.2689 0 8.13336C0 5.9979 1.72798 4.26673 3.85951 4.26673H5.10167V3.55552C5.10167 1.59189 6.69059 0 8.65065 0H12V2.66665H8.65065ZM5.10156 4.28893V6.97787H7.71893V4.28893H5.10156ZM2.66162 8.13348C2.66162 7.47073 3.19791 6.93351 3.85939 6.93351H5.05721V8.13348C5.05721 8.79624 4.52093 9.33346 3.85939 9.33346C3.19791 9.33346 2.66162 8.79624 2.66162 8.13348Z" fill="#03DB80" />
                            </svg>
                            <span>{price}</span>
                        </p>
                        <p className="text-sm">+{increase.toFixed(2)}%</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CollectionCard