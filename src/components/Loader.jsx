import React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react"; 

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      
      <div className="absolute w-60 h-60 bg-green-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-green-600 opacity-10 rounded-full blur-3xl animate-pulse delay-700"></div>

     
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.2,
        }}
        className="flex flex-col items-center justify-center z-10"
      >
        <Loader2 className="text-green-400 w-16 h-16 animate-spin" />
        <p className="mt-4 text-green-300 font-mono tracking-wide">
          Loading your secure thoughts...
        </p>
      </motion.div>
    </div>
  );
};

export default Loader;
