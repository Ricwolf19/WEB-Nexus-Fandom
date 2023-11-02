import { useLocation } from 'wouter';
import { auth } from '../utils/firebase';
import imgDedsec from '../assets/img-index/img-dedsec.jpg'
import { Link } from 'wouter';

const Index = () => {
  const [, setLocation] = useLocation();
  const user = auth.currentUser;

  if (user) {
    setLocation('/home');
  }

  return (
    <>
      <div className="bg-black h-screen w-screen flex flex-col items-center">
      <img src={imgDedsec} alt="" className='h-3/5 object-cover' />
            <div className='w-full h-full flex flex-col items-center justify-evenly text-white'>
                <h2 className='text-7xl font-bold'>Start...</h2>
                <div className='w-1/2 flex justify-center items-center gap-5'>
                  <Link href='/login' className='w-1/2 h-10 flex justify-center items-center bg-red-500 text-white font-bold rounded-sm hover:bg-red-700 '>Log In</Link>
                  <Link href='/register' className='w-1/2 h-10 flex justify-center items-center bg-red-500 text-white font-bold rounded-sm hover:bg-red-700 '>Register</Link>
                </div>
              <Link href='/home' className='hover:text-gray-300'>Enter as a guest?</Link>              
            </div>
        </div>
    </>
  );
};

export default Index;
