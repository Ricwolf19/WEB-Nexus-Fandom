import { Link } from 'wouter';
import Header from '../components/header';

const Index = () => {
  return (
    <>
    <Header />
    <div className="index-container p-8">
      <h1>Welcome to My Geek Store</h1>
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
};

export default Index;
