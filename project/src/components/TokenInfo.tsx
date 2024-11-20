import React from 'react';
import { TrendingUp, Users, Lock, Cpu } from 'lucide-react';

export default function TokenInfo() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-xl bg-red-50 border border-red-100">
            <TrendingUp className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Market Cap</h3>
            <p className="text-gray-600">Growing community-driven token with solid fundamentals</p>
          </div>
          
          <div className="p-6 rounded-xl bg-red-50 border border-red-100">
            <Users className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Community</h3>
            <p className="text-gray-600">Active and engaging community of kimchi enthusiasts</p>
          </div>
          
          <div className="p-6 rounded-xl bg-red-50 border border-red-100">
            <Lock className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Security</h3>
            <p className="text-gray-600">Audited smart contract with locked liquidity</p>
          </div>
          
          <div className="p-6 rounded-xl bg-red-50 border border-red-100">
            <Cpu className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI Integration</h3>
            <p className="text-gray-600">Powered by AI16Z's Eliza framework for intelligent interactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}