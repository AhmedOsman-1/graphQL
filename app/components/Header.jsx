import Link from "next/link";
import Socials from "./Socials";
const Header = () => {
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-[#020617] text-white">
            <h1 className="text-lg font-bold">
                <Link href="/">BlogCast</Link>
            </h1>
            <nav className="flex space-x-6">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/blog">Blog</Link>
            </nav>
            <div className="flex items-center space-x-4">
                <Socials />
                <button
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
         bg-linear-to-r from-indigo-500 to-purple-500 text-white shadow-lg
         hover:from-indigo-600 hover:to-purple-600 active:translate-y-0.5 transform
         transition duration-200 ease-in-out focus:outline-none focus-visible:ring-4
         focus-visible:ring-indigo-300"
                    type="button">
                    Get started
                </button>
            </div>
        </header>
    );
};

export default Header;
