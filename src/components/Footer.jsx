import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-700 text-green-200 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
    
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-green-300 mb-2">
            MindChain Journal 🧠
          </h2>
          <p className="text-sm text-green-200 max-w-sm">
            An anonymous mental health platform to share thoughts and support others safely.
          </p>
        </div>

      
        <div className="flex flex-col items-center">
          <h3 className="text-green-300 font-semibold mb-2">Quick Links</h3>
          <div className="flex flex-col space-y-1 text-green-200">
            <a href="/" className="hover:text-green-400 transition">Home</a>
            <a href="/about" className="hover:text-green-400 transition">About</a>
            <a href="/share-feeling" className="hover:text-green-400 transition">ShareFeeling</a>
            <a href="/profile" className="hover:text-green-400 transition">Profile</a>
            <a href="/feed" className="hover:text-green-400 transition">Feed</a>
          </div>
        </div>

       
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-green-300 font-semibold mb-2">Connect</h3>
          <div className="flex space-x-4 text-xl text-green-300">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-green-400 transition">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-green-400 transition">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-green-400 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

     
      <div className="border-t border-green-700 mt-8 pt-4 text-center text-green-300 text-sm">
        © {new Date().getFullYear()} MindChain Journal — Secure your mind on the blockchain 💚
      </div>
    </footer>
  );
};

export default Footer;
