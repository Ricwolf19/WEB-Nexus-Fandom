import { Link, useRoute } from 'wouter';
import { useFetchData } from '../hooks/useFetchData';
import { getCharacter } from '../utils/marvelApi';

export default function MarvelSiteCharacter() {
  const [match, params] = useRoute('/marvel-side/character/:id');
  const { data: character, loading, error } = useFetchData(getCharacter, params?.id);

  return (
    <div>
      <Link href='/marvel-side'>Back</Link>

      {!match ? <div>Not found</div> :

        loading ? <div>Loading...</div> :

          error ? <div>{error}</div> :

            <div>
              <h1>{character?.name}</h1>
            </div>
      }

    </div>
  );
}
