import React, { useEffect, useState, useMemo, ChangeEvent, FormEvent } from 'react';
import md5 from 'md5';
import { Link } from 'wouter';

const PRIV_KEY = import.meta.env.VITE_PRIV_KEY as string;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY as string;

// Define the character object structure
type Character = {
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

// Marvel API keys

const MarvelComponent: React.FC = () => {
  // State variables to hold characters and search term
  const [characters, setCharacters] = useState<Character[]>([]);
  const [search, setSearch] = useState<string>('');

  const filteredCharacters = useMemo(() => characters.filter(char => !char.thumbnail.path.includes("not_available")), [characters])

  useEffect(() => {
    // Create a unique timestamp for the API request
    const ts = new Date().getTime().toString();

    // Create an MD5 hash to authenticate the request
    const hash = md5(ts + PRIV_KEY + PUBLIC_KEY);
    const limit = 50; // Limit the number of characters retrieved from the API
    const url =
      search.length > 0
        ? `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&limit=${limit}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
        : `https://gateway.marvel.com/v1/public/characters?limit=${limit}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;

    // Fetch data from the Marvel API based on search term
    fetch(url)
      .then((response) => response.json())
      .then(({ data }) => {
        setCharacters(data.results);
      });
  }, [search]);

  // Handle search input change
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Handle form submission (prevent default form action)
  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto px-4">
      <Link href="/">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2">
          Back to Index
        </button>
      </Link>
      <h1 className="text-2xl font-bold text-center my-2">Marvel Characters</h1>

      <form onSubmit={handleSearchSubmit} className="w-full max-w-sm mx-auto my-4">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search character..."
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredCharacters.map((character, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center"
          >
            <img
              src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}
              alt={character.name}
              className="rounded-full w-32 h-32"
            />
            <h3 className="text-md font-bold">{character.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarvelComponent;

