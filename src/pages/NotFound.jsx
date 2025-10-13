import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-[#001a00] to-green-900 text-green-200 px-6 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600 opacity-10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center z-10"
      >
        <AlertCircle size={80} className="text-green-400 mb-6" />
        <h1 className="text-6xl md:text-7xl font-extrabold text-green-300 mb-4">
          404
        </h1>
        <p className="text-lg md:text-xl text-green-200 mb-8 max-w-xl">
          Oops! The page you are looking for does not exist. But don’t worry, your journey for mental wellness continues.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-green-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-green-500 transition cursor-pointer"
        >
          Go Back Home
        </button>
      </motion.div>
    </div>
  );
};

export default NotFound;
