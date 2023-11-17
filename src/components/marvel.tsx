import { useState, useMemo } from 'react';
import { Link } from 'wouter';
import { useFetchData } from '../hooks/useFetchData';
import { getCharacters } from '../utils/marvelApi';
import { FaClock, FaExclamationCircle } from 'react-icons/fa'; // Importa los íconos de React

import SearchBar from './search-bar';
import '../marvel_main.css';
import { motion } from 'framer-motion';

const MarvelComponent: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const { data: characters, loading, error } = useFetchData(getCharacters, search);

  const filteredCharacters = useMemo(() => characters?.filter(char => !char.thumbnail.path.includes("not_available")), [characters])

  return (
    <div className="container mx-auto px-4 py-4 mb-6">
      <SearchBar onSubmit={(s) => setSearch(s)} />

      {loading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#333333] bg-opacity-75"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Contenido para el estado de carga */}
          <div className="w-full max-w-lg p-6 bg-gray-950 rounded-lg shadow-xl text-white text-center flex flex-col items-center">
            <FaClock className="text-blue-600 text-5xl sm:text-7xl mb-4" />
            <h1 className="mb-2 text-yellow-300 text-4xl sm:text-6xl">
              Loading...
            </h1>
            <p className="text-xl sm:text-2xl font-bold mb-4">
              Please wait while we load the content.
            </p>
          </div>
        </motion.div>
      )}

      {error && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#333333] bg-opacity-75"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Contenido para el estado de error */}
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
        </motion.div>
      )}

      {!loading && !error && filteredCharacters!.length < 1 ? (
        <motion.div
          className="font-bold text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="sm:text-xl md:text-2xl lg:text-3xl mb-2">No characters found with that name. Try another one or make sure you spelled it right!</p>
          <div className="grid place-items-center">
            <img src="../src/assets/img-marvel/not-found.png" alt="" height={300} width={300} />
          </div>
        </motion.div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" style={{ fontFamily: 'comic sans ms' }}>
          {filteredCharacters?.map(character => (
            <motion.div
              key={character.id}
              className="bg-white text-center text-black shadow-md rounded-lg flex flex-col items-center border-double border-black border-4"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Escala al pasar el cursor
              whileTap={{ scale: 0.95, transition: { duration: 0.3 } }} // Escala al hacer clic
              style={{ overflow: 'hidden' }} // Oculta el desbordamiento de la imagen
            >
              <Link href={`/marvel-side/character/${character.id}`}>
                <motion.img
                  src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}
                  alt={character.name}
                  className="w-32 h-32"
                  style={{ height: '15rem', width: '20rem', borderRadius: '5px 5px 0 0' }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Escala al pasar el cursor
                  whileTap={{ scale: 0.95, transition: { duration: 0.3 } }} // Escala al hacer clic
                />
                <h3 className="py-2 text-md font-bold">{character.name}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarvelComponent;
