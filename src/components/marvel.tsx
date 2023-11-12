import { useState, useMemo } from 'react';
import { Link } from 'wouter';
import { useFetchData } from '../hooks/useFetchData';
import { getCharacters } from '../utils/marvelApi';

import SearchBar from './search-bar';

const MarvelComponent: React.FC = () => {
  // State variables to hold characters and search term
  const [search, setSearch] = useState<string>('');
  const { data: characters, loading, error } = useFetchData(getCharacters, search);

  // Filter out characters with no image
  const filteredCharacters = useMemo(() => characters?.filter(char => !char.thumbnail.path.includes("not_available")), [characters])

  return (
    <div className="container mx-auto px-4">
      <Link href="/">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2">
          Back to Index
        </button>
      </Link>
      <h1 className="text-2xl font-bold text-center my-2">Marvel Characters</h1>

      <SearchBar onSubmit={(s) => setSearch(s)} />

      {loading ? <div>Loading...</div> :

        error ? <div>{error}</div> :

          filteredCharacters!.length < 1 ? <div>No characters found</div> :


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredCharacters?.map(character => (
                <div
                  key={character.id}
                  className="bg-white text-center text-black rounded-lg shadow-md p-2 flex flex-col items-center"
                >
                  <Link href={`/marvel-side/character/${character.id}`}>
                    <img
                      src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}
                      alt={character.name}
                      className="rounded-full w-32 h-32"
                    />
                    <h3 className="text-md font-bold">{character.name}</h3>
                  </Link>
                </div>
              ))}
            </div>
      }
    </div>
  );
};

export default MarvelComponent;

