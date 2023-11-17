import { useLocation } from 'wouter';
import { auth } from '../utils/firebase';
import GamesSide from '../components/games';
import Header from '../components/header';
import { motion } from 'framer-motion';
import '../style.css';
import Footer from '../components/footer';

const Games = () => {
  const [, setLocation] = useLocation();
  const user = auth.currentUser;

  if (!user) {
    setLocation('/');
    return null;
  }

  return (
    <div className='h-full w-full bg-gray-800'>
      <Header />
      <motion.header
        id='hero1'
        rel='preload'
        className="bg-fixed bg-no-repeat bg-center bg-cover h-screen relative mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }} // Añadir un pequeño retraso para un efecto más suave
      >
        <div className="h-screen flex items-center justify-center">
          <div className="mx-2 mt-10 md:mt-20 text-center">
            <motion.h1
              className="text-red-600 font-bold text-3xl xs:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }} // Ajustar el retraso para un efecto de aparición más lento
              style={{ WebkitTextStroke: '2px rgb(255,255,255)' }}
            >
              <span className="text-amber-400">Explore</span> a World of Video Games
            </motion.h1>
            <motion.h2
              className="text-white text-2xl xs:text-3xl md:text-4xl lg:text-5xl leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }} // Ajustar el retraso para un efecto de aparición más lento
            >
              Discover the best games, scores, platforms, names, and release dates.
            </motion.h2>
          </div>
        </div>
        <div className='h-2 bg-gradient-to-r from-[#FF0000] to-[#0000FF] animate-gradient'></div>
      </motion.header>
      <GamesSide />
      <Footer />
    </div>
  );
};

export default Games;
