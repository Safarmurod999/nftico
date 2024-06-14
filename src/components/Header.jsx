import React from 'react'
import logo from "../assets/logo.svg"
const Header = () => {
    return (
        <header>
            <nav className='bg-nav-color drop-shadow-nav-shadow py-[20px]'>
                <div className="container">
                    <div className="nav-wrapper flex justify-between items-centerw">
                        <a href="#" className="brand-logo"><img src={logo} alt="Logo" /></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down flex justify-between items-center gap-[36px]">
                            <li><a href="#!">Explore</a></li>
                            <li><a href="#!">Stats</a></li>
                            <li><a href="#!">Drops</a></li>
                            <li><a href="#!">Activity</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header