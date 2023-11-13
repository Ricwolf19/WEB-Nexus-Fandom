import { useState, useMemo } from 'react';
import { Link } from 'wouter';
import { useFetchData } from '../hooks/useFetchData';
import { getCharacters } from '../utils/marvelApi';

import SearchBar from './search-bar';
import '../marvel_main.css';

const MarvelComponent: React.FC = () => {
  // State variables to hold characters and search term
  const [search, setSearch] = useState<string>('');
  const { data: characters, loading, error } = useFetchData(getCharacters, search);

  // Filter out characters with no image
  const filteredCharacters = useMemo(() => characters?.filter(char => !char.thumbnail.path.includes("not_available")), [characters])

  return (
    <div className="container mx-auto px-4 py-4">
      <SearchBar onSubmit={(s) => setSearch(s)} />

      {loading ? <div>Loading...</div> :

        error ? <div>{error}</div> :

          filteredCharacters!.length < 1 ? <div>No characters found</div> :


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" style={{fontFamily: 'comic sans ms'}}>
              {filteredCharacters?.map(character => (
                <div
                  key={character.id}
                  className="bg-white text-center text-black shadow-md rounded-lg flex flex-col items-center border-double border-black border-4"
                >
                  <Link href={`/marvel-side/character/${character.id}`}>
                    <img
                      src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}
                      alt={character.name}
                      className="w-32 h-32"
                      style={{height: '15rem', width: '20rem', borderRadius: '5px 5px 0 0'}}
                    />
                    <h3 className="py-2 text-md font-bold">{character.name}</h3>
                  </Link>
                </div>
              ))}
            </div>
      }
    </div>
  );
};

export default MarvelComponent;

