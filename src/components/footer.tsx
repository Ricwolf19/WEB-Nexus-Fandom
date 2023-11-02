import { Link } from 'wouter';
import { ImFacebook2 } from 'react-icons/im';
import { AiFillYoutube } from 'react-icons/ai';
import { FaSquareXTwitter, FaXbox, FaPlaystation} from 'react-icons/fa6';



const footer = () => {
    return (
        <div className="bg-gray-900 p-2">
            <div className="flex flex-col justify-center items-center gap-4">
                <div className='flex gap-5 text-gray-400'>
                    <span className='cursor-pointer hover:text-blue-600 hover:bg-white rounded'><ImFacebook2 size={30}/></span>
                    <span className='cursor-pointer hover:text-red-600'><AiFillYoutube size={30}/></span>
                    <span className='cursor-pointer hover:text-black hover:bg-white rounded'><FaSquareXTwitter size={30}/></span>
                    <span className='cursor-pointer hover:text-green-600'><FaXbox size={30}/></span>
                    <span className='cursor-pointer hover:text-blue-700'><FaPlaystation size={30}/></span>
                </div>
                <h2 className='font-bold text-xl md:text-2xl text-white'>Nexus-Fandom</h2>
                <p className='text-gray-400'>Copyright &copy; NexusFandom.Inc</p>
                <div className='flex gap-3 text-gray-200'>
                    <Link href='/contact-side' className='pe-3 border-r-2 border-gray-400 hover:text-gray-400'>Contact Us</Link>
                    <a href='' className='hover:text-gray-400'>Terms and Conditions</a>
                </div>
            </div>
        </div>
    );
};

export default footer;