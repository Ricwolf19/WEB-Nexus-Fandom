import type { Character } from '../types';
import md5 from 'md5';

// Marvel API keys
const PRIV_KEY = import.meta.env.VITE_PRIV_KEY as string;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY as string;

export async function getCharacters(query: string, limit = 50) {
  // Create a unique timestamp for the API request
  const ts = new Date().getTime().toString();
  // Create an MD5 hash to authenticate the request
  const hash = md5(ts + PRIV_KEY + PUBLIC_KEY);
  const url =
    query.length > 0
      ? `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&limit=${limit}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
      : `https://gateway.marvel.com/v1/public/characters?limit=${limit}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;

  const res = await fetch(url);
  const data = await res.json();

  return data.data.results as Character[];
}

export async function getCharacter(id: string) {
  // Create a unique timestamp for the API request
  const ts = new Date().getTime().toString();
  // Create an MD5 hash to authenticate the request
  const hash = md5(ts + PRIV_KEY + PUBLIC_KEY);
  const url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;

  const res = await fetch(url);
  const data = await res.json();

  return data.data.results[0] as Character;
}
