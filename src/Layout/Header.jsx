import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo-dark.png'
import { FiMenu, FiX, FiLogOut, FiLogIn } from "react-icons/fi";
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import userImage from '../assets/user.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const [opened, setOpened] = useState(true)
    const { user, createSignOut, loading } = useContext(AuthContext)
    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-screen bg-gray-50 z-50">
                <div role="status">
                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    const logoutButton = () => {
        createSignOut()
            .then(() => {
                toast.success('LogOut success!');
            })
            .catch(() => {
                toast.error('LogOut Error!');
            });
    }
    return (
        <header>
            <nav className="bg-primary w-full z-20">
                <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to='/'><img className='w-24' src={Logo} alt="Unique Weddings" /></Link>
                    <div className="flex md:order-2">
                        {
                            user ? (
                                <div className='flex items-center gap-2'>
                                    <img className='w-10 h-10 border-white rounded-full border-2' src={user?.photoURL ? user.photoURL : userImage} alt="" />
                                    <p className='text-white'>{user?.displayName ? user.displayName : ''}</p>
                                    <button onClick={logoutButton} className='bg-white text-primary rounded py-2 px-3 mr-2'> <span className='hidden md:block'>Logout</span> <span className='md:hidden'><FiLogOut></FiLogOut></span> </button>
                                </div>
                            ) : (
                                <div className='flex gap-2'>
                                    <NavLink to='/login' className='bg-white text-primary rounded py-2 px-3 mr-2'><span className='hidden md:block'>Login</span> <span className='md:hidden'><FiLogIn></FiLogIn></span></NavLink>
                                    <NavLink to='/register' className='bg-white text-primary rounded py-2 px-3 mr-2 hidden md:block'>Register</NavLink>
                                </div>
                            )
                        }

                        <button onClick={() => setOpened(!opened)} className='text-3xl text-white md:hidden'>{opened ? <FiMenu></FiMenu> : <FiX></FiX>}</button>
                    </div>
                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 py-1 ${opened == true ? 'hidden' : ''}`}>
                        <ul className="flex flex-col p-4 md:p-0 font-semibold gap-3 rounded md:flex-row md:space-x-8 md:mt-0">
                            <li className='text-white'><NavLink to='/' className={({ isActive }) => isActive ? 'bg-white text-primary rounded px-2 py-1' : 'px-2 py-1'}>Home</NavLink></li>
                            <li className='text-white'><NavLink to='/services' className={({ isActive }) => isActive ? 'bg-white text-primary rounded px-2 py-1' : 'px-2 py-1'}>Services</NavLink></li>
                            <li className='text-white'><NavLink to='/vendors' className={({ isActive }) => isActive ? 'bg-white text-primary rounded px-2 py-1' : 'px-2 py-1'}>Vendors</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </header>
    );
};

export default Header;