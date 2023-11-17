import { useState } from "react";
import { Link, useLocation } from "wouter";
import { auth } from '../utils/firebase';
import { AiOutlineMenu } from "react-icons/ai";
import imgLogo from "../assets/logo.jpg";


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  const [, setLocation] = useLocation();
  const handleLogout = () => {
    auth.signOut() // Cerrar sesión usando Firebase
      .then(() => {
        setLocation('/');
        return null;
      })
      .catch((error) => {
        // Maneja los errores si ocurrieron al cerrar la sesión.
        console.error(error);
      });
  };


  return (
    <nav className="bg-gray-950 text-white  md:py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className="flex justify-center items-center">
          <img className="w-16" src={imgLogo} alt="" />
          <h1 className="font-bold text-2xl md:text-3xl">Nexus-Fandom</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/home" className={`hover:text-gray-300 ${location === "/home" ? "border-b-2 border-yellow-300" : "hover:border-b-2 hover:border-yellow-300"}`}>
            Home
          </Link>
          <Link href="/marvel-side" className={`hover:text-gray-300 ${location === "/marvel-side" ? "border-b-2 border-red-500" : "hover:border-b-2 hover:border-red-500"}`}>
            Marvel
          </Link>
          <Link href="/games-site" className={`hover:text-gray-300 ${location === "/games-site" ? "border-b-2 border-sky-500" : "hover:border-b-2 hover:border-sky-500"}`}>
            VideoGames
          </Link>
          <Link href="/stores-side" className={`hover:text-gray-300 ${location === "/stores-side" ? "border-b-2 border-green-500" : "hover:border-b-2 hover:border-green-500"}`}>
            Stores
          </Link>
          <Link href="/contact-side" className={`hover:text-gray-300 ${location === "/contact-side" ? "border-b-2 border-indigo-500" : "hover:border-b-2 hover:border-indigo-500"}`}>
            Contact Us
          </Link>
        </div>
        <div className="hidden md:flex gap-6">
          <button onClick={handleLogout} className="border-2 border-red-500 bg-red-500/30 hover:bg-red-500 p-2 rounded font-bold">
            Log Out
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-3xl">
            <AiOutlineMenu />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="w-full h-screen p-5 md:hidden absolute bg-gray-900 ">
          <div className="flex flex-col space-y-4">
            <Link href="/home" className={`hover:text-gray-300 ${location === "/home" ? "border-b-2 border-yellow-500" : "hover:border-b-2 hover:border-yellow-500"}`}>
              Home
            </Link>
            <Link href="/marvel-side" className={`hover:text-gray-300 hover:border-b-2 hover:border-red-500 ${location === "/marvel-side" ? "" : "hover:border-b-2 hover:border-red-500"}`}>
              Marvel
            </Link>
            <Link href="/games-site" className={`hover:text-gray-300 ${location === "/games-site" ? "border-b-2 border-sky-500" : "hover:border-b-2 hover:border-sky-500"}`}>
              VideoGames
            </Link>
            <Link href="/stores-side" className={`hover:text-gray-300 ${location === "/stores-side" ? "border-b-2 border-green-500" : "hover:border-b-2 hover:border-green-500"}`}>
              Stores
            </Link>
            <Link href="/contact-side" className={`hover:text-gray-300 ${location === "/contact-side" ? "border-b-2 border-indigo-500" : "hover:border-b-2 hover:border-indigo-500"}`}>
              Contact Us
            </Link>
            <button onClick={handleLogout} className={`text-left hover:text-gray-300 hover:border-b-2 hover:border-red-500`}>
              Log Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

