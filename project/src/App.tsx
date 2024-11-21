import React from 'react';
import { Github, Twitter, ExternalLink, Bot, Sandwich } from 'lucide-react';
import Hero from './components/Hero';
import TokenInfo from './components/TokenInfo';
import Features from './components/Features';
import BuySection from './components/BuySection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-red-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sandwich className="w-8 h-8 text-red-600" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
              DegenKimChi
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://twitter.com/degenkimchi" target="_blank" rel="noopener noreferrer" 
               className="hover:text-red-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://github.com/haeunchin/ElizaDegenKimchi" target="_blank" rel="noopener noreferrer"
               className="hover:text-red-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <TokenInfo />
      <Features />
      <BuySection />

      <footer className="bg-red-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">DegenKimChi</h3>
              <p className="text-red-200">The first AI-powered Korean food meme token with real utility.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://dexscreener.com/solana/6257uclpbzqccm8x4mptn19wqbcndwfvquomlejf2e1b" 
                     className="text-red-200 hover:text-white transition-colors flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" /> DexScreener
                  </a>
                </li>
                <li>
                  <a href="https://raydium.io" 
                     className="text-red-200 hover:text-white transition-colors flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" /> Buy on Raydium
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-red-800 text-center text-red-200">
            <p>© 2024 DegenKimChi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;