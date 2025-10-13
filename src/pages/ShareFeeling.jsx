import React, { useState, useContext } from "react";
import { Web3Context } from "../context/CreateWeb3Context";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const ShareFeeling = () => {
  const { web3State } = useContext(Web3Context);
  const { contractInstance, selectedAccount } = web3State;

  const [mood, setMood] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleUpload = async () => {
    if (!contractInstance || !selectedAccount) {
      alert("Please connect your wallet first ⚡");
      return;
    }

    if (!mood || !message) {
      alert("Please select a mood and write your message 💬");
      return;
    }

    try {
      setLoading(true);
      setSuccess(false);

      const tx = await contractInstance.shareMind(mood, message);
      await tx.wait();

      setSuccess(true);
      setMood("");
      setMessage("");
      setLoading(false);

      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.log("Transaction cancelled or failed ❌", error);
      setLoading(false);
    }
  };

  if (loading) return <Loader/>;

  return (
    <motion.div
      className="min-h-screen bg-black text-green-200 flex flex-col items-center justify-center px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-400 mb-2">
          Share Your Feeling 🧠
        </h1>
        <p className="text-green-300">
          Express your thoughts safely and let your emotion live on-chain 🌱
        </p>
      </div>

      <motion.div
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md border border-green-500/20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-5">
          <label className="block mb-2 text-green-300 font-medium">
            Select Mood
          </label>
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-900 text-green-200 border border-green-600 focus:ring-2 focus:ring-green-400 outline-none"
          >
            <option value="">-- Choose your mood --</option>
            <option value="Reflective">Reflective 💭</option>
            <option value="Calm">Calm 🌿</option>
            <option value="Hopeful">Hopeful ✨</option>
            <option value="Anxious">Anxious 😟</option>
            <option value="Joyful">Joyful 😊</option>
            <option value="Determined">Determined 🔥</option>
            <option value="Other">Other 🌀</option>
          </select>
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-green-300 font-medium">
            Your Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder="Write what's on your mind..."
            className="w-full p-3 rounded-lg bg-gray-900 text-green-200 border border-green-600 focus:ring-2 focus:ring-green-400 outline-none resize-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleUpload}
          className="w-full flex items-center cursor-pointer justify-center gap-2 bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-lg transition-all duration-300 shadow-md"
        >
          <Sparkles className="w-5 h-5" /> Upload to Blockchain
        </motion.button>

        {success && (
          <p className="text-center text-green-400 mt-4 animate-pulse">
            ✅ Your feeling has been shared successfully!
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ShareFeeling;
