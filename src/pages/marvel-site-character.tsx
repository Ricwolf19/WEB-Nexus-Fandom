import { auth } from '../utils/firebase';
import { Link, useRoute, useLocation } from 'wouter';
import { useFetchData } from '../hooks/useFetchData';
import { getCharacter } from '../utils/marvelApi';

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

            <div>
              <h1>{character!.name}</h1>
              <img
                src={`${character!.thumbnail.path}/portrait_incredible.${character!.thumbnail.extension}`}
                alt={character!.name}
                className="rounded-full w-32 h-32"
              />
              {character?.description && <p>{character.description}</p>}
              {character!.comics.items.length > 0 &&
                <div>
                  <h2>Comics</h2>
                  <ul>
                    {character!.comics.items.map(comic => (
                      <li key={comic.name}>{comic.name}</li>
                    ))}
                  </ul>
                </div>
              }
              {character!.series.items.length > 0 &&
                <div>
                  <h2>Series</h2>
                  <ul>
                    {character!.series.items.map(serie => (
                      <li key={serie.name}>{serie.name}</li>
                    ))}
                  </ul>
                </div>
              }
            </div>
      }

    </div>
  );
}
