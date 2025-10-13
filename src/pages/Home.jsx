import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-[#001a00] to-green-900 text-green-200 px-6 relative overflow-hidden">
      
      
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600 opacity-10 rounded-full blur-3xl animate-pulse delay-700"></div>

     
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center max-w-3xl"
      >
        
        <MessageCircle size={80} className="mx-auto text-green-400 mb-6 animate-pulse" />

        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-orbitron text-green-300">
          MindChain Support
        </h1>

        
        <p className="text-lg md:text-2xl text-green-200 mb-8">
          Share your thoughts. <span className="text-green-400 font-semibold">Stay anonymous.</span> Connect with others. Heal together.
        </p>

        
        <Link to="/share-feeling">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-400 hover:bg-green-500 transition text-black font-semibold px-6 py-3 rounded-full text-lg cursor-pointer"
          >
            Start Writing
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
