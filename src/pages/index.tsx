import { useEffect } from "react";
import { Link, useLocation } from 'wouter';
import { auth } from '../utils/firebase';
import imgDedsec from '../assets/img-index/img-dedsec.jpg';
import { motion, useAnimation } from "framer-motion";

const Index = () => {
  const [, setLocation] = useLocation();
  const user = auth.currentUser;

  if (user) {
    setLocation('/home');
  }

  const animationControls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const startAnimation = async () => {
      const animationInterval = setInterval(async () => {
        // ... (tu lógica de animación actual)
        if (!isMounted) {
          clearInterval(animationInterval);
        }
      }, 2000);

      return () => {
        isMounted = false;
        clearInterval(animationInterval);
      };
    };

    if (animationControls) {
      startAnimation();
    }

    return () => {
      isMounted = false;
    };
  }, [animationControls]);

  return (
    <>
      <div className="bg-black h-screen w-screen flex flex-col items-center">
        <motion.img
          src={imgDedsec}
          alt=""
          className="h-3/5 object-cover"
          animate={animationControls}
        />
        <div className='w-full h-full flex flex-col items-center justify-evenly text-white'>
          <h2 className='text-7xl font-bold'>Start...</h2>
          <div className='w-1/2 flex justify-center items-center gap-5'>
            <Link href='/login' className='w-1/2 h-10 flex justify-center items-center bg-red-500 text-white font-bold rounded-sm hover:bg-red-700 '>Log In</Link>
            <Link href='/register' className='w-1/2 h-10 flex justify-center items-center bg-red-500 text-white font-bold rounded-sm hover:bg-red-700 '>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
