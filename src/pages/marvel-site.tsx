import { useLocation } from 'wouter';
import { auth } from '../utils/firebase';
import React from 'react';
import MarvelComponent from '../components/marvel'; 
import Header from '../components/header';
import { motion } from 'framer-motion';

import "../style.css";
import Footer from '../components/footer';

const MarvelSiteFront: React.FC = () => {
  const [, setLocation] = useLocation();
  const user = auth.currentUser;

  if (!user) {
    setLocation('/');
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col text-white">
        <Header />
        <motion.header
          id='marvelHero'
          className="bg-fixed bg-no-repeat bg-center bg-cover h-screen relative mb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="h-screen flex items-center justify-center" >
            <div className="mx-2 mt-10 md:mt-10 text-center">
              <motion.h1
                className="text-white font-bold text-3xl xs:text-4xl md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ WebkitTextStroke: '2px rgb(255,255,255)' }}
              >
                <span className="text-red-700">Welcome</span> to the Marvel Universe
              </motion.h1>
              <motion.h2
                className="text-white text-2xl xs:text-3xl md:text-4xl lg:text-5xl leading-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Explore each character's appearances in the Marvel Universe
              </motion.h2>
            </div>
          </div>
          <div className='h-2 bg-gradient-to-r from-[#FF0000] to-[#FCBA03] animate-gradient '></div>
        </motion.header>
        <div className='marvelBody bg-fixed bg-no-repeat bg-center bg-cover h-full relative w-full'>
          <MarvelComponent />
          <Footer/>
        </div>
    </div>
  );
};

export default MarvelSiteFront;
