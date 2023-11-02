import { useLocation } from 'wouter';
import { auth } from '../utils/firebase';
import GamesSide from '../components/games';
import Header from '../components/header';
import { motion } from 'framer-motion';
import '../style.css';

const Games = () => {
  const [, setLocation] = useLocation();
  const user = auth.currentUser;

  if (!user) {
    setLocation('/');
    return null;
  }

  return (
    <div className='h-full w-full'>
      <Header />
      <motion.header
        id='hero1'
        className="bg-fixed bg-no-repeat bg-center bg-cover h-screen relative mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="h-screen flex items-center justify-center">
          <div className="mx-2 text-center">
            <motion.h1
              className="text-red-500 font-extrabold text-3xl xs:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-yellow-500">Explore</span> a World of Video Games
            </motion.h1>
            <motion.h2
              className="text-white font-extrabold text-2xl xs:text-3xl md:text-4xl lg:text-5xl leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Discover the <span className="text-blue-500">best</span> games, scores, platforms, names, and release dates.
            </motion.h2>
          </div>
        </div>
      </motion.header>
      <GamesSide />
    </div>
  );
};

export default Games;
