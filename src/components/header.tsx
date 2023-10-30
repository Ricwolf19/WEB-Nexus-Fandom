import React from 'react';
function Header() {
    return (
        <header className="bg-black text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">Logo</div>
                <nav className="space-x-4">
                    <a href="../pages/index.tsx" className="hover:text-gray-300">Home</a>
                    <a href="../pages/marvel-site.tsx" className="hover:text-gray-300">Marvel</a>
                    <a href="../pages/games-side.tsx" className="hover:text-gray-300">VideoGames</a>
                    <a href="../pages/stores-side.tsx" className="hover:text-gray-300">Stores</a>
                    <a href="../pages/contact-side.tsx" className="hover:text-gray-300">Contact Us</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;