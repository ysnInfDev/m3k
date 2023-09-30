import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-scroll'

import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setISticky] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setISticky(true)
            } else {
                setISticky(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll);
        }

    }
    )

    // NavItems array
    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'Product', path: 'product' },
        { link: 'Service', path: 'service' },
        { link: 'About', path: 'about' },
        { link: 'Contact', path: 'contact' }
    ]
    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={` py-0 lg:px-14 ${isSticky ? "sticky top-0 left-0 right-0 border bg-neutralSilver duration-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href='' className='text-2xl  flex items-center space-x-3'>
                        <img className="w-24 inline-block items-center" src={logo} alt='' />
                        <span className='text-[#888e89]'>Machari3 AlKair</span>
                    </a>
                    {/* navbar items for large devices */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block cursor-pointer text-base text-gray900 hover:text-brandPrimary first:font-medium'>{link}</Link>)
                        }
                    </ul>

                    {/* btn for large devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a href='/' className='hidden lg:flex items-center text-brandPrimary hover:text-gray-900'>
                            Login
                        </a>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign up</button>
                    </div>

                    {/* menu  btn for only mobile devices */}
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6 ' />)
                            }
                        </button>
                    </div>
                </div>

                {/* nav items for mobile devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-gray900 first:font-medium'>{link}</Link>)
                    }
                </div>
            </nav>


        </header>
    )
}

export default Navbar
