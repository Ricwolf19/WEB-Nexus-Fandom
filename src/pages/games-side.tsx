import GamesSide from '../components/games';
import Header from '../components/header';

const Games = () => {
  return (
    <div>
       <Header />
      <h1 className="text-2xl font-bold text-center my-2">Video Games</h1>
      <GamesSide />
    </div>
  );
};

export default Games;
