const apiKey = import.meta.env.VITE_RAWG_API_KEY as string;

export const getGames = async (search: string) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?${search ? `search=${search}&` : ''}page_size=40&key=${apiKey}`
  );
  const { results } = await response.json();
  console.log(results)
  return results;
};
