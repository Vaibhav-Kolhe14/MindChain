import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, ShieldCheck, Sparkles } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#001a00] to-green-900 text-green-200 flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">

            <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600 opacity-20 rounded-full blur-3xl animate-pulse delay-700"></div>


            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-5xl mx-auto text-center relative z-10"
            >
                <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-6 tracking-wide">
                    About <span className="text-green-300">MindChain Journal</span>
                </h1>
                <p className="text-lg md:text-xl text-green-200 max-w-3xl mx-auto leading-relaxed mb-12">
                    MindChain Journal is a <span className="text-green-400 font-semibold">decentralized mental health companion</span> — built on blockchain to empower individuals
                    to record their emotions, reflections, and healing journeys securely, without fear of data exposure or judgment.
                    Your mind, your space, your chain.
                </p>
            </motion.div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mt-10">

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-black/60 backdrop-blur-md border border-green-700 rounded-2xl p-6 shadow-lg hover:shadow-green-600/40 transition-all"
                >
                    <div className="flex justify-center mb-4">
                        <HeartPulse size={50} className="text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-300 mb-2">Share Anonymously</h3>
                    <p className="text-green-200">
                        Express your thoughts freely without revealing your identity — a safe space to be heard and understood.
                    </p>
                </motion.div>


                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-black/60 backdrop-blur-md border border-green-700 rounded-2xl p-6 shadow-lg hover:shadow-green-600/40 transition-all"
                >
                    <div className="flex justify-center mb-4">
                        <ShieldCheck size={50} className="text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-300 mb-2">Support & Connect</h3>
                    <p className="text-green-200">
                        Read and share tips or experiences with others — fostering a community of empathy and mental wellness.
                    </p>
                </motion.div>


                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-black/60 backdrop-blur-md border border-green-700 rounded-2xl p-6 shadow-lg hover:shadow-green-600/40 transition-all"
                >
                    <div className="flex justify-center mb-4">
                        <Sparkles size={50} className="text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-300 mb-2">Safe & Secure</h3>
                    <p className="text-green-200">
                        Your messages remain private and anonymous, ensuring your thoughts are protected while helping others.
                    </p>
                </motion.div>
            </div>


            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mt-16 flex flex-col items-center text-center"
            >
                <div className="bg-black/70 border border-green-700 rounded-full p-8 shadow-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-20 h-20 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                    >
                       
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 6a4 4 0 00-4 4v4a4 4 0 004 4m8-12a4 4 0 014 4v4a4 4 0 01-4 4M8 6V4m8 2V4M8 20v-2m8 2v-2M12 8v8"
                        />
                    </svg>
                </div>

                <p className="mt-6 text-green-300 text-sm">
                    Empowering minds, securing thoughts — on the blockchain 🧠
                </p>
            </motion.div>


        </div>
    );
};

export default About;
