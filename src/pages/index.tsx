import React, { useEffect } from "react";
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

  // Define las opciones de animación
  const animationControls = useAnimation();

  useEffect(() => {
    // Función para iniciar la animación
    const startAnimation = () => {
      const animationInterval = setInterval(async () => {
        // Animación de movimiento aleatorio en el eje X y Y
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;

        await animationControls.start({ x: randomX, y: randomY, transition: { duration: 1 } });

        // Animación de parpadeo constante
        await animationControls.start({ opacity: 0.5, transition: { duration: 0.5 } });
        await animationControls.start({ opacity: 1, transition: { duration: 0.5 } });

        // Restaura la posición y la opacidad
        await animationControls.start({ x: 0, y: 0, opacity: 1, transition: { duration: 0.5 } });
      }, 2000); // Intervalo de tiempo entre animaciones (2 segundos)

      return () => {
        clearInterval(animationInterval);
      };
    };

    startAnimation();
  }, [animationControls]);

  return (
    <>
      <div className="bg-black h-screen w-screen flex flex-col items-center">
        {/* Utiliza el componente animado para la imagen */}
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





