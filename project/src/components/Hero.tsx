import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="relative">
          <img 
            src="https://raw.githubusercontent.com/haeunchin/DegenKimchi/main/assets/DegenKimchi.png" 
            alt="Kimchi" 
            className="w-48 h-48 rounded-full object-cover mb-8 border-4 border-red-500 shadow-lg"
          />
          <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg">
            <Bot className="w-8 h-8 text-red-600" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
          DegenKimChi
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          The first AI-powered Korean food meme token that brings the spicy world of kimchi to Web3
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://raydium.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Buy Now
          </a>
          <a 
            href="#features" 
            className="px-8 py-3 border-2 border-red-600 text-red-600 rounded-full font-semibold hover:bg-red-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}