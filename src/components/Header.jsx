import { useState } from 'react'
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'
import menu from '../assets/icons/menu.svg';
import close from '../assets/icons/close.svg';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className='fixed w-full z-30'>
            <nav className='bg-nav-color drop-shadow-nav-shadow py-[20px]'>
                <div className="container">
                    <div className="nav-wrapper flex justify-between items-center">
                        <a href="#" className="flex items-center justify-center"><img src={logo} alt="Logo" /></a>
                        <div className={`w-[300px] h-[100vh] lg:h-auto lg:w-[70%] xl:w-[60%] p-5 lg:p-0 bg-nav-color absolute top-[84px] left-0 lg:static flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-4 lg:gap-0 delay-300 ${!isOpen ? '-left-[100%]' : ''}`}>
                            <ul id="nav-mobile" className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[36px]">
                                <li className='hover:text-primary'><a href="#!">Explore</a></li>
                                <li className='hover:text-primary'><a href="#!">Stats</a></li>
                                <li className='hover:text-primary'><a href="#!">Drops</a></li>
                                <li className='hover:text-primary'><a href="#!">Activity</a></li>
                            </ul>
                            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[20px]">
                                <form className='relative'>
                                    <input type="text" placeholder="Search..." className="w-full cursor-pointer px-[16px] py-[12px] rounded-lg bg-transparent border border-[#e7e7e7]" />
                                    <svg className='absolute top-[50%] right-[16px] -translate-y-[50%]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17.5 17.5L13.875 13.875" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </form>
                                <Link to="/contact" className="px-[20px] py-[13px] bg-linear rounded-lg">Get in Touch</Link>
                            </div>
                        </div>
                        <button className='flex lg:hidden'>
                            {
                                isOpen ? <img src={close} alt="close" onClick={() => setIsOpen(!isOpen)} />
                                    :
                                    <img src={menu} alt="menu" onClick={() => setIsOpen(!isOpen)} />
                            }
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header