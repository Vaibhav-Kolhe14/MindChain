import React from "react";
import { Link } from "react-router-dom";
import WalletConnectButton from "./WalletConnectButton";

const Navbar = () => {
    return (
        <nav className="bg-black/80 backdrop-blur-md border-b border-green-700 px-6 py-4 flex items-center justify-between text-green-200">

            <div className="text-2xl font-bold text-green-300">
                <Link to="/" className="hover:text-green-400 transition">
                    MindChain Journal 🧠
                </Link>
            </div>


            <div className="hidden md:flex space-x-4 font-semibold text-green-200">
                <Link to="/" className="hover:text-green-400 transition relative after:content-['|'] after:ml-4 after:text-green-400 last:after:content-['']">
                    Home
                </Link>
                <Link to="/about" className="hover:text-green-400 transition relative after:content-['|'] after:ml-4 after:text-green-400 last:after:content-['']">
                    About
                </Link>
                <Link to="/share-feeling" className="hover:text-green-400 transition relative after:content-['|'] after:ml-4 after:text-green-400 last:after:content-['']">
                    ShareFeeling
                </Link>
                <Link to="/profile" className="hover:text-green-400 transition relative after:content-['|'] after:ml-4 after:text-green-400 last:after:content-['']">
                    Profile
                </Link>
                <Link to="/feed" className="hover:text-green-400 transition">
                    Feed
                </Link>
            </div>



            <div>
                <WalletConnectButton />
            </div>
        </nav>
    );
};

export default Navbar;
