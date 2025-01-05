import React from 'react';
import { BarChart2, TrendingUp, Users, Play } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { icon: Play, label: 'Total Views', value: '125.4K' },
          { icon: Users, label: 'Subscribers', value: '15.2K' },
          { icon: TrendingUp, label: 'Watch Time', value: '2.5K hrs' },
          { icon: BarChart2, label: 'Revenue', value: '$1,234' }
        ].map((stat) => (
          <div key={stat.label} className="bg-gray-900 rounded-xl p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <stat.icon className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Views Over Time</h2>
          <div className="h-64 flex items-center justify-center text-gray-400">
            Chart Placeholder
          </div>
        </div>
        
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Top Videos</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28"
                  alt="Thumbnail"
                  className="w-24 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-white font-medium">Getting Started with Web3</h3>
                  <p className="text-sm text-gray-400">12.5K views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;