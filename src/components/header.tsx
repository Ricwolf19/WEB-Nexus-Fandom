import { Link } from "wouter";

const Header = () => {
    return (
        <header className="bg-black bg-opacity-20 text-white py-4 fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-center items-center">
                <nav className="space-x-4">
                    <Link href="/" className="hover:text-gray-300">Home</Link>
                    <Link href="/marvel-side" className="hover:text-gray-300">Marvel</Link>
                    <Link href="/games-site" className="hover:text-gray-300">VideoGames</Link>
                    <Link href="/stores-side" className="hover:text-gray-300">Stores</Link>
                    <Link href="/contact-side" className="hover:text-gray-300">Contact Us</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;