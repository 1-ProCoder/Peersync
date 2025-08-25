import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-4">
        <div className="flex items-center space-x-2 p-4">
          <span className="text-2xl font-bold">PeerSync</span>
        </div>
        <nav className="mt-8">
          <Link to="/dashboard" className="flex items-center space-x-2 p-3 rounded-lg bg-gray-800 text-white">
            <span>Dashboard</span>
          </Link>
          <Link to="/study-groups" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white mt-2">
            <span>Study Groups</span>
          </Link>
          <Link to="/schedule" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white mt-2">
            <span>Schedule</span>
          </Link>
          <Link to="/resources" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-white mt-2">
            <span>Resources</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <span className="sr-only">Notifications</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="relative">
              <button className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">U</span>
                </div>
                <span className="text-gray-700">User</span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm font-medium">Active Study Groups</h3>
            <p className="text-3xl font-bold mt-2">3</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm font-medium">Upcoming Sessions</h3>
            <p className="text-3xl font-bold mt-2">2</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm font-medium">Completed Tasks</h3>
            <p className="text-3xl font-bold mt-2">5/8</p>
          </div>

          {/* Recent Activity */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">SG</span>
                  </div>
                  <div>
                    <p className="text-sm">New message in <span className="font-medium">Math Study Group</span></p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <span>New Study Session</span>
              </button>
              <button className="w-full flex items-center space-x-2 p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <span>Join a Group</span>
              </button>
              <button className="w-full flex items-center space-x-2 p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <span>Upload Notes</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;