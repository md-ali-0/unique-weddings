import { Link } from 'react-router-dom';
import Logo from '../assets/logo-dark.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-primary">
            <div className="w-full container mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to='/'><img className='w-24 mx-auto py-3 sm:py-0' src={Logo} alt="Unique Weddings" /></Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                        <li>
                            <Link className='mr-4 hover:underline md:mr-6'>About</Link>
                        </li>
                        <li>
                            <Link className='mr-4 hover:underline md:mr-6'>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link className='mr-4 hover:underline md:mr-6'>Licensing</Link>
                        </li>
                        <li>
                            <Link className='mr-4 hover:underline md:mr-6'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-pink-700 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-white sm:text-center">© {currentYear} Unique Weddings. All Rights Reserved.</span>
            </div>
        </footer>


    );
};

export default Footer;