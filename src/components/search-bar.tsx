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
    <form onSubmit={handleSearchSubmit} className="w-full max-w-sm mx-auto my-4">
      <div className="flex items-center border border-b-2 border-teal-500 py-2">
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
  );
}
