import { Route } from 'wouter';
import Index from './pages/index';
import StoresSide from './pages/stores-side';
import MarvelSite from './pages/marvel-site';
import MarvelSiteCharacter from './pages/marvel-site-character';
import LogIn from './pages/login-site';
import Register from './pages/register-site';
import Home from './pages/home';
import ContactUs from './pages/contact-side';
import VideoGames from './pages/games-side';

export default function App() {
  return (
    <>
      <Route path="/">
        <Index />
      </Route>
      <Route path="/stores-side">
        <StoresSide />
      </Route>
      <Route path="/marvel-side">
        <MarvelSite />
      </Route>
      <Route path="/marvel-side/character/:id">
        <MarvelSiteCharacter />
      </Route>
      <Route path="/games-site">
        <VideoGames />
      </Route>
      <Route path="/contact-side">
        <ContactUs />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <LogIn />
      </Route>  
      <Route path='/home'>
        <Home />
      </Route>
    </>
  );
}

