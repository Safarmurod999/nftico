import React from 'react'

const Filter = ({ active, setActive }) => {
    return (
        <ul className="flex items-center gap-[8px]">
            <li onClick={() => setActive(1)} className={`flex items-center bg-[#E7E7E766] rounded-lg p-[1px] ${active == 1 ? 'bg-linear' : ''}`}>
                <div className={`bg-[#1E1B33] px-[20px] py-[12px] rounded-lg flex items-center justify-center ${active == 1 ? 'bg-linear' : ''}`}>
                    <p>7 days</p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5L10 12.5L15 7.5" fill="white" />
                    </svg>
                </div>
            </li>
            <li onClick={() => setActive(2)} className={`flex items-center bg-[#E7E7E766] rounded-lg p-[1px] ${active == 2 ? 'bg-linear' : ''}`}>
                <div className={`bg-[#1E1B33] px-[20px] py-[12px] rounded-lg flex items-center justify-center ${active == 2 ? 'bg-linear' : ''}`}>
                    <p>10 days</p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5L10 12.5L15 7.5" fill="white" />
                    </svg>
                </div>
            </li>
            <li onClick={() => setActive(3)} className={`flex items-center bg-[#E7E7E766] rounded-lg p-[1px] ${active == 3 ? 'bg-linear' : ''}`}>
                <div className={`bg-[#1E1B33] px-[20px] py-[12px] rounded-lg flex items-center justify-center ${active == 3 ? 'bg-linear' : ''}`}>
                    <p>30 days</p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5L10 12.5L15 7.5" fill="white" />
                    </svg>
                </div>
            </li>
        </ul>
    )
}

export default Filter