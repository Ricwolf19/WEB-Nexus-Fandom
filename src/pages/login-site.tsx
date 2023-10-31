import imgHitman from '../assets/img-login/img-hitman-login.jpg'
import { Link } from 'wouter';

const LogIn = () => {
    return (
        <div className="bg-black h-screen w-screen flex flex-col md:flex-row items-center">
            <img src={imgHitman} alt="" className='w-full md:w-1/2 h-1/2 md:h-full object-contain' />
            <div className='w-full h-full flex flex-col items-center justify-evenly text-white'>
                <h2 className='text-5xl font-bold'>Log In</h2>
                <form action="" className='w-3/4 md:w-1/2 flex flex-col space-y-6 text-'>
                    <label htmlFor="" className='block'>Name:</label>
                    <input type="text" className='bg-transparent border-b-2 text-xl' />
                    <label htmlFor="" className='block'>Password:</label>
                    <input type="password" className='bg-transparent border-b-2 text-xl' />
                    <a href='' className='text-center text-sm hover:text-red-400'>forgot the password?</a>
                    
                </form>
                <div className='w-1/2 text-center'>
                <button className='w-full h-10 block bg-red-500 text-white font-bold rounded-sm hover:bg-red-700 '>Log In</button>
                <p className='text-sm'>You do not have an account?<Link href='/register' className='font-bold text-blue-500 hover:text-blue-400'> Sign Up</Link></p> 
                </div>
            </div>
        </div>

    );
};

export default LogIn;