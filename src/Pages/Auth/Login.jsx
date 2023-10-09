import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { toast } from 'react-toastify';

const Login = () => {
    const { createLogin, signInWithGoogle, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [err, setErr] = useState('');
    const [showPass, setShowPass] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        setErr('')

        createLogin(email, password)
            .then(() => {
                toast.success('Login success!');
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err.code);
                setErr(err.code)
                setLoading(false)
            })
    }
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('Login success!');
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                setErr(err.code)
                setLoading(false)
            })
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-5 mx-auto my-10 lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-5 sm:p-8">
                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Login
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none sm:text-sm rounded-lg focus:ring-0 focus:border-primary block w-full p-2.5" placeholder="Enter Email Address" required />
                        </div>
                        <div className="relative">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type={showPass ? "text" : "password"} name="password" id="password" className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-0 focus:border-primary block w-full p-2.5" placeholder="Enter Password" required />
                            <span onClick={() => { !setShowPass(!showPass) }} className="absolute right-3 top-10 text-gray-700 text-md cursor-pointer">
                                {
                                    showPass ? <FiEyeOff></FiEyeOff> : <FiEye></FiEye>
                                }
                            </span>
                        </div>
                        {err ? <p className="text-red-600">{err}</p> : ''}
                        <button type="submit" className="w-full text-white bg-primary hover:bg-primary focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>

                    </form>
                    <div>
                        <p className="text-center text-gray-700 text-sm pb-3">Or</p>
                        <div className="space-y-3">
                            <button onClick={handleGoogleLogin} className="w-full border border-gray-200 focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-5 py-2 text-center flex items-center justify-center gap-2"> <span className="text-lg "><FcGoogle></FcGoogle></span> Login With Google</button>
                        </div>
                    </div>
                    <p className="text-sm text-center font-light text-gray-500">
                        Don’t have an account yet? <Link to='/register' className="font-medium text-primary hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;