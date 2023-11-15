import { auth } from '../utils/firebase';
import { Link, useRoute, useLocation } from 'wouter';
import { useFetchData } from '../hooks/useFetchData';
import { getCharacter } from '../utils/marvelApi';
import '../marvel_card.css';

export default function MarvelSiteCharacter() {
  const [match, params] = useRoute('/marvel-side/character/:id');
  const { data: character, loading, error } = useFetchData(getCharacter, params?.id);

  const [, setLocation] = useLocation();
  const user = auth.currentUser;

  if (!user) {
    setLocation('/');
    return null;
  }


  return (
    <div>
      <Link href='/marvel-side'>Back</Link>

      {!match ? <div>Not found</div> :

        loading ? <div>Loading...</div> :

          error ? <div>{error}</div> :

            <div className='grid grid-cols-3 lg gap-4 text-black p-4 '>
              <div className='outline-double outline-4 outline-slate-600 bg-gray-200 bg-cover bg-[url("../src/assets/img-bg/marvel_card_bg.jpg")] bg-center p-5 '>
              <h1 className='font-bold text-4xl pb-4 text-center'>{character!.name}</h1>
              <div className='grid place-items-center pb-4  '>
                <img
                  src={`${character!.thumbnail.path}/portrait_incredible.${character!.thumbnail.extension}`}
                  alt={character!.name}
                  className="rounded-full w-60 h-60 border-solid border-black border-4"
                />
              </div>
              {character?.description && <p className='font-bold text-justify text-xl'>{character.description}</p>}
              </div>
              <div className='card halftone col-span-2 outline-double outline-4 outline-slate-600 bg-gray-300 bg-cover divide-y-8 divide-slate-600 p-4'>
              {character!.comics.items.length > 0 &&
                <div className='pb-4'>
                  <h2 className='font-bold text-3xl pb-2'>Comics</h2>
                  <ul>
                    {character!.comics.items.map(comic => (
                      <li key={comic.name} className='font-'>{comic.name}</li>
                    ))}
                  </ul>
                </div>
              }
              {character!.series.items.length > 0 &&
                <div>
                  <h2  className='font-bold text-3xl pb-2'>Series</h2>
                  <ul>
                    {character!.series.items.map(serie => (
                      <li key={serie.name}>{serie.name}</li>
                    ))}
                  </ul>
                </div>
              }
              </div>
            </div>
        }
    </div>
  );
}
