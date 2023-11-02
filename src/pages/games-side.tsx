import { useLocation } from 'wouter';
import { auth } from '../utils/firebase';
import GamesSide from '../components/games';
import Header from '../components/header';
import '../style.css';

const Games = () => {
  const [, setLocation] = useLocation();
  const user = auth.currentUser;

  if (!user) {
    setLocation('/');
    return null;
  }

  return (
    <div className='h-full w-full'>
      <Header />
      <header id='hero1' className="bg-fixed bg-no-repeat bg-center bg-cover h-screen relative mb-16">
        <div className="h-screen flex items-center justify-center">
          <div className="mx-2 text-center">
          <h1 className="text-red-500 font-extrabold text-4xl xs:text-5xl md:text-6xl text">
            <span className="text-yellow-500">Explore</span> a World of Video Games
          </h1>
          <h2 className="text-white font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
            Discover the <span className="text-blue-500">best</span> games, scores, platforms, names, and release dates.
          </h2>
          </div>
        </div>
      </header>
      <GamesSide />
    </div>
  );
};

export default Games;
