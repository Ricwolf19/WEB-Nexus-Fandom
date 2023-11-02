import React, { useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import { getGames } from '../utils/gamesApi';
import type { Game } from '../types';
import SearchBar from './search-bar';
import { FaClock, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';
import '../style.css';

const GamesSide: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const { data: games, loading, error } = useFetchData<Game[]>(getGames, search);

  const handleSearchSubmit = (searchText: string) => {
    setSearch(searchText);
  };

  return (
    <div className="container mx-auto px-4 items-center">
      <SearchBar onSubmit={handleSearchSubmit} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {loading ? (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#333333] bg-opacity-75">
            <div className="max-w-lg w-full p-6 bg-[#333333] rounded-lg shadow-xl text-white">
              <div className="text-center flex items-center p-6">
                <FaClock className="text-blue-600 text-7xl mr-4" />
                <h1 className="mb-2 text-yellow-400 text-6xl font-extrabold">
                  Loading...
                </h1>
              </div>
              <p className="text-2xl font-bold p-4 text-center">
                Please wait while we load the content.
              </p>
            </div>
          </div>
        ) : error ? (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#333333] bg-opacity-75">
                <div className="max-w-lg w-full p-6 bg-[#333333] rounded-lg shadow-xl text-white">
                  <div className="text-center flex items-center p-6">
                    <FaExclamationCircle className="text-red-500 text-7xl mr-8" />
                    <h1 className="mb-2 text-red-500 text-6xl font-extrabold">
                      Error!!!
                    </h1>
                  </div>
                  <p className="text-3xl font-bold p-4 text-center text-blue-500">
                    An error occurred: {error}
                  </p>
                  <p className="text-2xl font-bold text-center text-yellow-500">
                    Please try again later. 
                  </p>
                </div>
          </div>
        ) : games!.length < 1 ? (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#333333] bg-opacity-75">
            <div className="max-w-lg w-full p-6 bg-[#333333] rounded-lg shadow-xl text-white">
              <div className="text-center flex items-center p-6">
                <FaInfoCircle className="text-gray-400 text-9xl" />
                <h1 className="text-gray-400 text-5xl font-extrabold">
                  No Games Found
                </h1>
              </div>
              <p className="text-2xl font-bold p-3 text-center text-yellow-500">
                Try searching with different keywords.
              </p>
            </div>
          </div>
        ) :
        games
        ?.filter((game) => game.background_image)
        ?.filter((game) => game.rating)
        .map((game, index) => (
          <div key={index} className='bg-[#333333] bg-opacity-50 rounded-xl shadow-md p-2 flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 mb-2'>
            <div className='bg-white rounded-3xl shadow-xl h-full'>
              <div className='h-full grid rounded-3xl max-w-sm shadow-sm bg-slate-100 flex-col'>
                <img
                  src={game.background_image}
                  width='390'
                  height='200'
                  className='rounded-t-3xl justify-center grid h-80 object-cover transition duration-300 ease-in-out transform hover:scale-110'
                  alt={game.name}
                />
                <div className='group p-6 grid z-10'>
                  <a className='text-gray-300 group-hover:text-cyan-700 font-bold text-xl sm:text-xl line-clamp-2 text-center'>
                    {game.name}
                  </a>
                  <span className='text-gray-500 pt-2 font-semibold text-center'>({new Date(game.released).toLocaleDateString()})</span>
                  <div className="h-28 mb-2 flex items-center">
                    <span className="text-gray-500 text-sm">
                      <strong>PLATFORMS:</strong> {game.platforms.map((platform) => platform.platform.name).join(', ')}
                    </span>
                  </div>
                  <div className='grid-cols-2 flex group justify-between'>
                    <div className='font-black flex flex-col'>
                      <span className='text-yellow-500 text-xl'>SCORE</span>
                      <span className='text-gray-300 text-2xl flex gap-x-1 items-center group-hover:text-yellow-600'>{game.rating}</span>
                    </div>
                    <div className='flex flex-col items-end'>
                      <div className='h-7' />
                      <span className='text-2xl font-bold gap-x-2 text-gray-500'># {index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default GamesSide;
