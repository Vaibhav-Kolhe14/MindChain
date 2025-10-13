import React from "react";
import { motion } from "framer-motion";
import { Clock, User, Heart } from "lucide-react";

const MindShareCard = ({ author, timestamp, mood, message }) => {

  const formatAddress = (addr) =>
    addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "Anonymous";


  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleString(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-black/70 border border-green-700 rounded-2xl p-5 shadow-lg hover:shadow-green-500/30 transition-all max-w-md w-full mx-auto backdrop-blur-md"
    >
 
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2 text-green-300 font-mono text-sm">
          <User size={16} />
          <span>{formatAddress(author)}</span>
        </div>
        <div className="flex items-center space-x-1 text-green-400 text-xs">
          <Clock size={14} />
          <span>{formatTime(timestamp)}</span>
        </div>
      </div>

    
      <div className="mb-3">
        <span className="bg-green-800/30 border border-green-700 text-green-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          {mood || "Reflective"}
        </span>
      </div>

  
      <p className="text-green-100 text-sm leading-relaxed mb-4">
        {message ||
          "It's okay to not be okay — every small step counts towards healing."}
      </p>


      <div className="flex justify-end">
        <button className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition text-sm">
          <Heart size={16} />
          <span>Support</span>
        </button>
      </div>
    </motion.div>
  );
};

export default MindShareCard;
