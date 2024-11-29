import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HiveLogo from '../components/HiveLogo';

const LandingPage = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const fullText = "Thhe decentralized crowd-funding platform powered by Ethereum blockchain. Join us to securely fund dreams and make them a reality.";

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50);

    return () => clearInterval(typingEffect);
  }, []);

  const handleGetStarted = () => {
    navigate('/app');
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center text-green-400 relative overflow-hidden font-mono">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="relative z-10 text-center w-full max-w-4xl px-4">
        <HiveLogo className="w-32 h-32 mx-auto mb-8 text-green-400 animate-pulse" />
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-fade-in-down">
          Welcome to <span className="text-yellow-400">FundHive</span>
        </h1>
        <div className="bg-black border border-green-400 p-4 rounded-lg shadow-lg mb-8">
          <p className="text-lg sm:text-xl animate-fade-in-up text-left">
            $ {typedText}
            <span className="animate-blink">_</span>
          </p>
        </div>
        <button
          className="bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          onClick={handleGetStarted}
        >
          ./get-started.sh
        </button>
      </div>
      <footer className="absolute bottom-4 text-sm text-green-600">
        Powered by Ethereum Blockchain
      </footer>
    </div>
  );
};

export default LandingPage;

