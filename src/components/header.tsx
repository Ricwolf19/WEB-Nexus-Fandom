const Header = () => {
    return (
        <header className="bg-black text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">Logo</div>
                <nav className="space-x-4">
                    <a href="/" className="hover:text-gray-300">Home</a>
                    <a href="/marvel-side" className="hover:text-gray-300">Marvel</a>
                    <a href="/games-site" className="hover:text-gray-300">VideoGames</a>
                    <a href="/stores-side" className="hover:text-gray-300">Stores</a>
                    <a href="/contact-side" className="hover:text-gray-300">Contact Us</a>
                    <a href="/register" className='hover:text-gray-300'>Register</a>
                    <a href="/login" className="hover:text-gray-300">Log In</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;