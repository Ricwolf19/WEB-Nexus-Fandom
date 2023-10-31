import { useLocation } from 'wouter';
import { auth } from '../utils/firebase';
import GamesSide from '../components/games';
import Header from '../components/header';

const Games = () => {
  const [, setLocation] = useLocation();
  const user = auth.currentUser;

  if (!user) {
    setLocation('/');
    return null;
  }

  return (
    <div>
       <Header />
      <h1 className="text-2xl font-bold text-center my-2">Video Games</h1>
      <GamesSide />
    </div>
  );
};

export default Games;
