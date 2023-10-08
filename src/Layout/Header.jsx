import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo-dark.png'
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from 'react';
const Header = () => {
    const [opened, setOpened] = useState(true)

    return (
        <header>
            <nav className="bg-primary w-full z-20">
                <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to='/'><img className='w-24' src={Logo} alt="Unique Weddings" /></Link>
                    <div className="flex md:order-2">
                        <div className='flex gap-2'>
                            <NavLink className='bg-white text-primary rounded py-2 px-3 mr-2'>Login</NavLink>
                            <NavLink className='bg-white text-primary rounded py-2 px-3 mr-2 hidden md:block'>Register</NavLink>
                        </div>
                        <button onClick={() => setOpened(!opened)} className='text-3xl text-white md:hidden'>{opened ? <FiMenu></FiMenu> : <FiX></FiX>}</button>
                    </div>
                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 py-1 ${opened == true ? 'hidden' : ''}`}>
                        <ul className="flex flex-col p-4 md:p-0 font-semibold gap-3 border rounded md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li className='text-white'><NavLink to='/' className={({isActive})=>isActive?'bg-white text-primary rounded px-2 py-1':'px-2 py-1'}>Home</NavLink></li>
                            <li className='text-white'><NavLink to='/service' className={({isActive})=>isActive?'bg-white text-primary rounded px-2 py-1':'px-2 py-1'}>Services</NavLink></li>
                            <li className='text-white'><NavLink to='/about' className={({isActive})=>isActive?'bg-white text-primary rounded px-2 py-1':'px-2 py-1'}>About</NavLink></li>
                            <li className='text-white'><NavLink to='/contact' className={({isActive})=>isActive? 'bg-white text-primary rounded px-2 py-1':'px-2 py-1'}>Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;