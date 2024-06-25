import { Link } from 'react-router-dom';
import icons from '../assets/images/icons.svg';

const BrowseCard = ({ image, title, price, likes }) => {
    return (
        <div className="w-full p-[1px] hover:bg-linear rounded-xl group">
            <div className="w-full flex flex-col z-10 p-6 sm:p-4 md:p-6 bg-[#1E1B33] rounded-xl gap-[24px]">
                <img src={image} alt={title} className='w-full' />
                <div className='flex items-center justify-between w-full'>
                    <h3 className='text-2xl leading-[28px]'>{title}</h3>

                </div>
                <div className="flex items-center justify-between w-full">
                    <p className='flex items-center gap-[4px] text-[#136852]'>
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.50058 0V4.43595L0.438046 5.9027L3.50058 4.43683V8.28813L0.00257292 6.11126L0.00246094 6.1113L0.00249827 6.11122L0.00246094 6.11118L0.00253559 6.11114L3.50058 0ZM3.50137 0L6.99986 6.11114L6.99997 6.11118L6.99993 6.11122L6.99997 6.1113L6.99986 6.11126L3.50137 8.28813V4.43683L6.56431 5.9027L3.50137 4.43595V0ZM3.50046 8.98586V12L0 6.8094L3.50046 8.98586ZM3.50137 12V8.98539L6.99997 6.80945L3.50137 12Z" fill="#03DB80" />
                        </svg>

                        <span className='text-[#03DB80]'>From {price} ETH</span>
                    </p>
                    <div className='flex items-center gap-[4px]'>
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8753 1.31563C11.3527 -0.206567 8.87573 -0.206567 7.35353 1.31563L6.99997 1.66899L6.64662 1.31563C5.12442 -0.206774 2.64723 -0.206774 1.12503 1.31563C-0.366261 2.80693 -0.375945 5.17079 1.10258 6.81435C2.45109 8.31285 6.42822 11.5503 6.59696 11.6873C6.71152 11.7805 6.84936 11.8258 6.98637 11.8258C6.99091 11.8258 6.99544 11.8258 6.99976 11.8256C7.14152 11.8322 7.2843 11.7835 7.40257 11.6873C7.57131 11.5503 11.5489 8.31285 12.8978 6.81414C14.3761 5.17079 14.3664 2.80693 12.8753 1.31563ZM11.9789 5.98731C10.9274 7.15534 8.03737 9.56432 6.99976 10.4192C5.96216 9.56453 3.0727 7.15575 2.0215 5.98752C0.99008 4.84113 0.980396 3.20849 1.99904 2.18985C2.51929 1.66981 3.2025 1.40959 3.88572 1.40959C4.56894 1.40959 5.25216 1.6696 5.7724 2.18985L6.54957 2.96702C6.64208 3.05953 6.7587 3.11475 6.88109 3.13411C7.07971 3.17676 7.29522 3.12134 7.44975 2.96722L8.22733 2.18985C9.26803 1.14957 10.9608 1.14977 12.0009 2.18985C13.0195 3.20849 13.0099 4.84113 11.9789 5.98731Z" fill="white" />
                        </svg>
                        <span className='text-[14px]'>{likes}</span>
                    </div>


                </div>
                <Link to={'/'} className='w-fit px-6 py-3 text-center border border-[#E7E7E73D] rounded-lg group-hover:bg-linear group-hover:border-0 text-semibold'>
                    Place Bid
                </Link>
            </div>
        </div>
    )
}

export default BrowseCard
