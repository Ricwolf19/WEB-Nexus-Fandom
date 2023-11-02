import imgAbstergo from '../assets/img-register/img-abstergo.jpg';
import { Link } from 'wouter';
import { BsArrowLeft } from 'react-icons/bs';

const Register = () => {
    return (
        <div className="bg-black h-screen w-screen flex flex-col-reverse md:flex-row items-center">
            <div className='text-white absolute top-0 left-0 m-4 cursor-pointer'><Link href='/' ><BsArrowLeft size={30}/></Link></div>
            <div className='w-full h-full flex flex-col items-center justify-evenly text-white'>
                <h2 className='text-5xl font-bold'>Register</h2>
                <form action="" className='w-3/4 md:w-1/2 flex flex-col space-y-6 text-'>
                    <label htmlFor="" className='block'>Name:</label>
                    <input type="text" className='bg-transparent border-b-2 text-xl' />
                    <label htmlFor="" className='block'>Password:</label>
                    <input type="password" className='bg-transparent border-b-2 text-xl' />
                    <label htmlFor="" className='block'>Repeat Password:</label>
                    <input type="password" className='bg-transparent border-b-2 text-xl' />
                    <p className='text-center text-sm'>Do you have an account?<Link href="/login" className='font-bold text-blue-500 hover:text-blue-400'> Log in</Link></p>
                </form>
                <button className='w-1/2 h-10 block bg-red-500 text-white font-bold rounded-sm hover:bg-red-700 '>Register</button>
            </div>
            <img src={imgAbstergo} alt="" className='w-full md:w-1/2 h-1/2 md:h-full object-cover' />
        </div>
    );
};

export default Register;