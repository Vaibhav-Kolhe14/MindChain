import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Web3Context } from "../context/CreateWeb3Context";
import MindShareCard from "../components/MindShareCard";
import Loader from "../components/Loader";
import { User, FileText } from "lucide-react";

const Profile = () => {
  const { web3State } = useContext(Web3Context);
  const { contractInstance, selectedAccount } = web3State;
  const navigate = useNavigate();

  const [myPosts, setMyPosts] = useState([]);
  const [loading, setLoading] = useState(false);


  const goToShareFeeling = () => navigate("/share-feeling");

 
  const fetchMyPosts = async () => {
    if (!contractInstance || !selectedAccount) {
      alert("Connect your wallet first!");
      return;
    }

    try {
      setLoading(true);
      
      const data = await contractInstance.getPostsByAuthor(selectedAccount); 
     
      const formatted = data.map((item) => ({
        author: item.author,
        mood: item.mood,
        message: item.message,
        timestamp: new Date(Number(item.timestamp) * 1000).toISOString(),
      }));
      setMyPosts(formatted);
      setLoading(false);
    } catch (error) {
      console.error("Transaction cancelled or failed:", error);
      setLoading(false);
    }
  };

  if (loading) return <Loader/>;

  return (
    <div className="min-h-screen bg-black text-green-200 flex flex-col items-center py-10 px-4">
      
      
      <div className="flex flex-col items-center space-y-4 mb-8">
        <div className="w-28 h-28 rounded-full bg-green-900/50 flex items-center justify-center text-green-400 text-5xl font-bold shadow-lg">
          <User size={60} />
        </div>
        <p className="text-green-300 font-mono text-sm">{selectedAccount ? `${selectedAccount.slice(0,6)}...${selectedAccount.slice(-4)}` : "Anonymous"}</p>
        <p className="text-green-400 text-center max-w-xs">
          Welcome to your personal MindChain profile. Here you can share your thoughts safely, and view your contributions.
        </p>
      </div>

    
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <button
          onClick={goToShareFeeling}
          className="bg-green-500 hover:bg-green-400 text-black cursor-pointer font-semibold px-6 py-3 rounded-lg shadow-md transition-all flex items-center gap-2"
        >
          <FileText size={20} /> Start Writing
        </button>

        <button
          onClick={fetchMyPosts}
          className="bg-black/70 border border-green-600 cursor-pointer hover:bg-green-800 text-green-300 font-semibold px-6 py-3 rounded-lg shadow-md transition-all flex items-center gap-2"
        >
          <FileText size={20} /> Get My Articles
        </button>
      </div>

      
      {myPosts.length > 0 && (
        <>
          <p className="text-green-400 mb-4 font-medium">Total Posts: {myPosts.length}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {myPosts.map((post, index) => (
              <MindShareCard
                key={index}
                author={post.author}
                mood={post.mood}
                message={post.message}
                timestamp={post.timestamp}
              />
            ))}
          </div>
        </>
      )}

      {myPosts.length === 0 && (
        <p className="text-green-400 mt-10">
          No posts yet. Click “Start Writing” to share your feelings 🌱
        </p>
      )}
    </div>
  );
};

export default Profile;
