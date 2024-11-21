import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function BuySection() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">How to Buy DegenKimChi</h2>
        
        <div className="max-w-3xl mx-auto bg-red-50 rounded-xl p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
              <span className="font-semibold">1. Connect Wallet</span>
              <span className="text-gray-600">Connect your Solana wallet</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
              <span className="font-semibold">2. Get SOL</span>
              <span className="text-gray-600">Ensure you have SOL in your wallet</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
              <span className="font-semibold">3. Trade on Raydium</span>
              <span className="text-gray-600">Swap SOL for DegenKimChi</span>
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="https://raydium.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              Buy on Raydium <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Track Price</h3>
          <a 
            href="https://dexscreener.com/solana/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700"
          >
            View on DexScreener <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}