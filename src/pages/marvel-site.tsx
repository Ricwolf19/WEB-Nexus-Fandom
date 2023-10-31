import { useLocation } from 'wouter';
import { auth } from '../utils/firebase';
import React from 'react';
import MarvelComponent from '../components/marvel'; 
import Header from '../components/header';

const MarvelSiteFront: React.FC = () => {
  const [, setLocation] = useLocation();
  const user = auth.currentUser;

  if (!user) {
    setLocation('/');
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
        <Header />
      <div>
        <h1>Welcome to the Marvel Site</h1>
        <MarvelComponent /> 
      </div>
    </div>
  );
};

export default MarvelSiteFront;

