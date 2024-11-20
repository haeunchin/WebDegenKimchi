import React from 'react';
import { MessageSquare, Brain, Coins } from 'lucide-react';

export default function Features() {
  return (
    <div id="features" className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why DegenKimChi?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <MessageSquare className="w-12 h-12 text-red-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">AI-Powered Social Presence</h3>
            <p className="text-gray-600">
              Our X bot @degenkimchi generates authentic Korean food content and interacts with the community in real-time
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Brain className="w-12 h-12 text-red-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Eliza Framework Integration</h3>
            <p className="text-gray-600">
              Advanced AI capabilities powered by AI16Z's Eliza framework for meaningful interactions
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Coins className="w-12 h-12 text-red-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">DeFi Integration</h3>
            <p className="text-gray-600">
              Easily trade on popular DEXes like Raydium with real-time price tracking on DexScreener
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}