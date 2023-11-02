import React, { useState } from "react";
import { Link } from "wouter";
import { AiOutlineMenu } from "react-icons/ai";
import imgLogo from "../assets/logo.jpg";


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };
  
    return (
      <nav className="bg-gray-950 text-white p-4 m:py-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-center items-center">
            <img className="w-16" src={imgLogo} alt="" />
            <h1 className="font-bold text-2xl md:text-3xl">Nexus-Fandom</h1>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/home" className="hover:text-gray-300 border-b-2 border-yellow-300">
              Home
            </Link>
            <Link href="/marvel-side" className="hover:text-gray-300 hover:border-b-2 hover:border-red-500">
              Marvel
            </Link>
            <Link href="/games-site" className="hover:text-gray-300 hover:border-b-2 hover:border-sky-500">
              VideoGames
            </Link>
            <Link href="/stores-side" className="hover:text-gray-300 hover:border-b-2 hover:border-green-500">
              Stores
            </Link>
            <Link href="/contact-side" className="hover:text-gray-300 hover:border-b-2 hover:border-indigo-500">
              Contact Us
            </Link>
          </div>
          <div className="hidden md:flex gap-6">
            <button className="border-2 border-red-500 bg-red-500/30 hover:bg-red-500 p-2 rounded font-bold">
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
              <Link href="/home" className="hover:text-gray-300 border-b-2 border-yellow-500">
                Home
              </Link>
              <Link href="/marvel-side" className="hover:text-gray-300 hover:border-b-2 hover:border-red-500">
                Marvel
              </Link>
              <Link href="/games-site" className="hover:text-gray-300 hover:border-b-2 hover:border-sky-500">
                VideoGames
              </Link>
              <Link href="/stores-side" className="hover:text-gray-300 hover:border-b-2 hover:border-green-500">
                Stores
              </Link>
              <Link href="/contact-side" className="hover:text-gray-300 hover:border-b-2 hover:border-indigo-500">
                Contact Us
              </Link>
              <button className="hover:text-gray-300 hover:border-b-2 hover:border-red-500">
                Log In
              </button>
            </div>
          </div>
        )}
      </nav>
    );
}

export default Header;
