import React, { useContext, useState, useEffect } from "react";
import { Web3Context } from "../context/CreateWeb3Context";
import MindShareCard from "../components/MindShareCard";
import Loader from "../components/Loader";

const AllArticles = () => {
  const { web3State } = useContext(Web3Context);
  const { contractInstance } = web3State;

  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchAllPosts = async () => {
    if (!contractInstance) return;
    try {
      setLoading(true);

      const data = await contractInstance.getAllMindShares();
      const formatted = data.map((item) => ({
        author: item.author,
        mood: item.mood,
        message: item.message,
        timestamp: new Date(Number(item.timestamp) * 1000).toISOString(),
      }));

      setAllPosts(formatted);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching all posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, [contractInstance]);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-black text-green-200 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-green-400 mb-6 text-center">
        Community Mind Shares 🧠
      </h1>

      {allPosts.length === 0 ? (
        <p className="text-green-400 mt-10 text-center">
          No thoughts shared yet. Be the first to contribute! 🌱
        </p>
      ) : (
        <>
          <p className="text-green-400 mb-4 font-medium">
            Total Articles: {allPosts.length}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {allPosts.map((post, index) => (
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
    </div>
  );
};

export default AllArticles;
