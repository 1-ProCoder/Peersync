import React from 'react';
import { RiDashboardLine, RiUserLine, RiSettingsLine, RiLogoutBoxLine, RiRobot2Line, RiSendPlaneFill, RiCloseLine } from 'react-icons/ri';
import { FaChartLine, FaCalendarAlt } from 'react-icons/fa';

const Analytics = () => {
  const stats = [
    { title: 'Total Visitors', value: '8,542', change: '+24%', isPositive: true },
    { title: 'Avg. Session', value: '4m 32s', change: '+12%', isPositive: true },
    { title: 'Bounce Rate', value: '42%', change: '-5%', isPositive: false },
    { title: 'Pages/Session', value: '3.2', change: '+8%', isPositive: true },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Analytics Dashboard</h1>
        <p className="text-gray-500">Track and analyze your platform's performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
            <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
            <span className={`text-sm ${stat.isPositive ? 'text-green-500' : 'text-red-500'} font-medium`}>
              {stat.change}
            </span>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Traffic Overview</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            Traffic Chart
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4">User Acquisition</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            Acquisition Chart
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Top Pages</h3>
          <button className="text-sm text-blue-500 font-medium">View All</button>
        </div>
        <div className="space-y-4">
          {['/dashboard', '/analytics', '/calendar', '/profile', '/settings'].map((page, i) => (
            <div key={i} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
              <span className="font-medium">{page}</span>
              <span className="text-sm text-gray-500">{Math.floor(Math.random() * 1000) + 500} visits</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
