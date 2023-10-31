import { Link } from "wouter";

const Header = () => {
    return (
        <header className="bg-black text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">Logo</div>
                <nav className="space-x-4">
                    <Link href="/" className="hover:text-gray-300">Home</Link>
                    <Link href="/marvel-side" className="hover:text-gray-300">Marvel</Link>
                    <Link href="/games-site" className="hover:text-gray-300">VideoGames</Link>
                    <Link href="/stores-side" className="hover:text-gray-300">Stores</Link>
                    <Link href="/contact-side" className="hover:text-gray-300">Contact Us</Link>
                    <Link href="/register" className='hover:text-gray-300'>Register</Link>
                    <Link href="/login" className="hover:text-gray-300">Log In</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
