import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo-dark.png'
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from 'react';
const Header = () => {
    const [opened, setOpened] = useState(true)

    return (
        <header>
            <nav className="bg-primary w-full z-20">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to='/'><img className='w-24' src={Logo} alt="Unique Weddings" /></Link>
                    <div className="flex md:order-2">
                        <div className='flex gap-2'>
                            <NavLink className='bg-white text-primary rounded py-2 px-3 mr-2'>Login</NavLink>
                            <NavLink className='bg-white text-primary rounded py-2 px-3 mr-2 hidden md:block'>Register</NavLink>
                        </div>
                        <button onClick={() => setOpened(!opened)} className='text-3xl text-white md:hidden'>{opened ? <FiMenu></FiMenu> : <FiX></FiX>}</button>
                    </div>
                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${opened == true ? 'hidden' : ''}`}>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li className='block py-2 pl-3 pr-4 cursor-pointer text-white md:p-0'><NavLink to='/' className={({isActive})=>isActive?'text-bold bg-white text-primary px-2 py-1 rounded':''}>Home</NavLink></li>
                            <li className='block py-2 pl-3 pr-4 cursor-pointer text-white md:p-0'>Services</li>
                            <li className='block py-2 pl-3 pr-4 cursor-pointer text-white md:p-0'>About</li>
                            <li className='block py-2 pl-3 pr-4 cursor-pointer text-white md:p-0'>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;