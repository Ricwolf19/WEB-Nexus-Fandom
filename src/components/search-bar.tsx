import { useState, ChangeEvent, FormEvent } from 'react';

interface Props {
  onSubmit: (search: string) => void;
}

export default function SearchBar({ onSubmit }: Props) {
  const [search, setSearch] = useState<string>('');

  // Handle search input change
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Handle form submission (prevent default form action)
  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="w-full max-w-sm mx-auto my-4 mb-16">
      <div className="relative flex items-center bg-[#333333] border-b border-red-500 rounded-md h-14">
        <input
          className="h-full rounded appearance-none bg-transparent border-none w-full text-[#f1f1f1] px-4 leading-tight focus:outline-none focus:bg-[#616161] focus:text-[#f1f1f1] placeholder:text-gray-50"
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <button
          className="absolute right-0 bg-red-500 hover:bg-red-600 focus:bg-red-700 text-white font-bold py-2 px-4 rounded h-full transition duration-300 ease-in-out"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}
