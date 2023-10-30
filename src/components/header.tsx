import React from 'react';
function Header() {
    return (
        <header className="bg-black text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">Logo</div>
                <nav className="space-x-4">
                    <a href="/" className="hover:text-gray-300">Home</a>
                    <a href="" className="hover:text-gray-300">Marvel</a>
                    <a href="" className="hover:text-gray-300">VideoGames</a>
                    <a href="" className="hover:text-gray-300">Stores</a>
                    <a href="/ContactUs" className="hover:text-gray-300">Contact Us</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;