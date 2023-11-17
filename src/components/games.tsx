import React, { useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import { getGames } from '../utils/gamesApi';
import type { Game } from '../types';
import SearchBar from './search-bar';
import { FaClock, FaExclamationCircle, FaInfoCircle, FaStar } from 'react-icons/fa';
import '../style.css';
import { motion } from "framer-motion";

const GamesSide: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const { data: games, loading, error } = useFetchData<Game[]>(getGames, search);

  const handleSearchSubmit = (searchText: string) => {
    setSearch(searchText);
  };

  return (
    <div className="container mx-auto px-4 items-center mb-10">
      <SearchBar onSubmit={handleSearchSubmit} />
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
{loading ? (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#333333] bg-opacity-75">
    <div className="w-full max-w-lg p-6 bg-gray-950 rounded-lg shadow-xl text-white text-center flex flex-col items-center">
      <FaClock className="text-blue-600 text-5xl sm:text-7xl mb-4" />
      <h1 className="mb-2 text-yellow-300 text-4xl sm:text-6xl">
        Loading...
      </h1>
      <p className="text-xl sm:text-2xl font-bold mb-4">
        Please wait while we load the content.
      </p>
    </div>
  </div>
) : error ? (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#333333] bg-opacity-75">
    <div className="w-full max-w-lg p-6 bg-[#333333] rounded-lg shadow-xl text-white text-center flex flex-col items-center">
      <FaExclamationCircle className="text-red-500 text-5xl sm:text-7xl mb-4" />
      <h1 className="mb-2 text-red-500 text-4xl sm:text-6xl">
        Error!!!
      </h1>
      <p className="text-2xl sm:text-3xl font-bold mb-2 text-blue-500">
        An error occurred: {error}
      </p>
      <p className="text-xl sm:text-2xl font-bold text-yellow-200">
        Please try again later. 
      </p>
    </div>
  </div>
) : games!.length < 1 ? (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#333333] bg-opacity-75">
    <div className="w-full max-w-lg p-6 bg-[#333333] rounded-lg shadow-xl text-white text-center flex flex-col items-center">
      <FaInfoCircle className="text-gray-400 text-5xl sm:text-9xl mb-4" />
      <h1 className="text-gray-400 text-3xl sm:text-5xl font-bold mb-4">
        No Games Found
      </h1>
      <p className="text-xl sm:text-2xl font-bold mb-2 text-yellow-500">
        Try searching with different keywords.
      </p>
    </div>
  </div>
) : 
        games
        ?.filter((game) => game.background_image)
        ?.filter((game) => game.rating)
        .map((game, index) => (
          <motion.div
          key={index}
          className=" glassmorphism-container p-4 text-white flex flex-col items-center transition duration-300 ease-in-out transform mb-2" style={{ boxShadow: '0 0 5px rgba(255, 255, 255, .7)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
            <div className='rounded-3xl h-full'>
              <div className=' rounded-xl h-full grid  max-w-sm flex-col'>
                <img
                  src={game.background_image}
                  width='390'
                  height='200'
                  className='rounded-xl justify-center grid h-80 object-cover transition duration-300 ease-in-out transform hover:scale-95'
                  alt={game.name}
                />
                <div className=' group p-6 grid z-10'>
                  <a className=' text-white font-bold text-xl sm:text-xl line-clamp-2 text-center'>
                    {game.name}
                  </a>
                  <span className='text-white/70 pt-2 font-semibold text-center'>({new Date(game.released).toLocaleDateString()})</span>
                  <div className="h-28 mb-2 flex items-center">
                    <span className="text-white/80 text-sm">
                      <strong>PLATFORMS:</strong> {game.platforms.map((platform) => platform.platform.name).join(', ')}
                    </span>
                  </div>
                  <div className='grid-cols-2 flex group justify-between'>
                    <div className=' flex flex-col'>
                      <span className='font-bold text-yellow-500 text-xl'>SCORE</span>
                      <span className='text-gray-200 text-xl flex gap-x-1 items-center'>{game.rating} <span className='hover:animate-ping'><FaStar/></span></span>
                    </div>
                    <div className='flex flex-col items-end'>
                      <div className='h-7'/>
                      <span className='text-2xl  font-bold gap-x-2 text-red-500'># {index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))
        }
      </motion.div> 
    </div>
  );
};

export default GamesSide;
