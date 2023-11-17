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
      <div>
      <Link href='/marvel-side'>
        <div className='mt-3 ml-3 w-fit'>
          <button className="Btn">
            <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
            <div className="text">Back</div>
          </button>
        </div>
      </Link>
      </div>

      {!match ? <div>Not found</div> :

        loading ? <div>Loading...</div> :

          error ? <div>{error}</div> :

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 text-black p-4 '>
              <div className='outline-double outline-slate-600 outline-4 bg-gray-200 bg-cover bg-[url("../src/assets/img-bg/marvel_card_bg.jpg")] bg-center p-5 rounded-3xl'>
                <div>
                  <h1 className='font-bold text-4xl pb-4 text-center'>{character!.name}</h1>
                    <div className='grid place-items-center pb-4'>
                      <img
                        src={`${character!.thumbnail.path}/portrait_incredible.${character!.thumbnail.extension}`}
                        alt={character!.name}
                        className="rounded-full w-60 h-60 border-solid border-black border-4"
                      />
                    </div>
                  {character?.description && <p className='font-bold text-justify text-xl'>{character.description}</p>}
                </div>
              </div>
              <div className='outline-double outline-slate-600 outline-4 sm:col-span-2 bg-gray-300 divide-y-8 divide-slate-600 p-4 rounded-3xl'>
              {character!.comics.items.length > 0 &&
                <div className='pb-4'>
                  <h2 className='font-bold text-3xl pb-2'>Comics</h2>
                  <ul>
                    {character!.comics.items.map(comic => (
                      <li key={comic.name} className='font-bold pb-2'>{comic.name}</li>
                    ))}
                  </ul>
                </div>
              }
              {character!.series.items.length > 0 &&
                <div>
                  <h2  className='font-bold text-3xl pb-2 pt-4'>Series</h2>
                  <ul>
                    {character!.series.items.map(serie => (
                      <li key={serie.name} className='font-bold pb-2'>{serie.name}</li>
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
