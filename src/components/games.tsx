import React, { useState, useEffect } from 'react';
import SearchBar from './search-bar';

type Game = {
  name: string;
  background_image: string;
  released: string;
  rating: number;
  platforms: {
    platform: {
      name: string;
    };
  }[];
};

const GamesSide: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [search, setSearch] = useState<string>('');
  const apiKey = import.meta.env.VITE_RAWG_API_KEY as string;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?${search ? `search=${search}&` : ''}page_size=40&key=${apiKey}`
        );
        const { results } = await response.json();
        setGames(results);
      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    };

    fetchData();
  }, [search, apiKey]);

  const handleSearchSubmit = (searchText: string) => {
    setSearch(searchText);
  };

  return (
    <div className="container mx-auto px-4">
      <SearchBar onSubmit={handleSearchSubmit} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {games.map((game, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center">
            <img src={game.background_image} alt={game.name} className="rounded-full w-32 h-32" />
            <h3 className="text-md font-bold">{game.name}</h3>
            <p className="p-1 text-xs text-gray-700 text-center">Released: {game.released}</p>
            <p className="p-1 text-xs text-gray-700 text-center">Rating: {game.rating}/5</p>
            <p className="p-1 text-xs text-gray-700 text-center">
              Platforms: {game.platforms.map((platform) => platform.platform.name).join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesSide;
