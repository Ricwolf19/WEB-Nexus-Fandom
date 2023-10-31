import { Link } from 'wouter';
import { useLocation } from 'wouter';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import Header from '../components/header';

function Home() {
  const [, setLocation] = useLocation();
  const user = auth.currentUser;

  function handleSignOut() {
    signOut(auth).then(() => setLocation('/')
    ).catch((error) =>
      console.error(error)
    );
  }

  if (!user) {
    setLocation('/');
    return null;
  }

  return (
    <>
      <Header />
      <div className="index-container p-8">
        <h1 className="text-4xl">Hello {user?.email}</h1>
        <h1>Welcome to My Geek Store</h1>
        <button className="p-2 bg-red-400 text-white-100" onClick={handleSignOut}>Sign out</button>
        <p>Discover our game and comic stores!</p>
        <div className="my-4">
          <Link href="/stores-side">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
              Go to Stores
            </button>
          </Link>
          <Link href="/marvel-side">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2">
              Go to Marvel
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
