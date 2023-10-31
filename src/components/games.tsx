import React, { useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import { getGames } from '../utils/gamesApi';
import type { Game } from '../types';
import SearchBar from './search-bar';

const GamesSide: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const { data: games, loading, error } = useFetchData<Game[]>(getGames, search);

  const handleSearchSubmit = (searchText: string) => {
    setSearch(searchText);
  };

  return (
    <div className="container mx-auto px-4">
      <SearchBar onSubmit={handleSearchSubmit} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {loading ? <p>Loading...</p> :

          error ? <p>{error}</p> :

            games!.length < 1 ? <p>No games found</p> :

              games?.map((game, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center">
                  <img src={game.background_image} alt={game.name} className="rounded-full w-32 h-32" />
                  <h3 className="text-md font-bold">{game.name}</h3>
                  <p className="p-1 text-xs text-gray-700 text-center">Released: {game.released}</p>
                  <p className="p-1 text-xs text-gray-700 text-center">Rating: {game.rating}/5</p>
                  <p className="p-1 text-xs text-gray-700 text-center">
                    Platforms: {game.platforms.map((platform) => platform.platform.name).join(', ')}
                  </p>
                </div>
              ))
        }
      </div>
    </div>
  );
};

export default GamesSide;
