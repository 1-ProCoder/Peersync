import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  RiDashboardLine, 
  RiUserLine, 
  RiSettingsLine, 
  RiLogoutBoxLine, 
  RiNotification4Line, 
  RiSunLine, 
  RiRobot2Line, 
  RiSendPlaneFill, 
  RiCloseLine,
  RiArrowRightLine,
  RiMoonFill,
  RiSearchLine
} from 'react-icons/ri';
import { 
  FaChartLine, 
  FaCalendarAlt,
  FaUsers,
  FaFileAlt,
  FaBell
} from 'react-icons/fa';

const Dashboard = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [isAIPanelOpen, setIsAIPanelOpen] = useState(false);
  const [aiMessage, setAiMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', text: 'Hello! I\'m your AI assistant. How can I help you today?' }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!aiMessage.trim()) return;
    
    // Add user message
    const newMessage = { id: messages.length + 1, sender: 'user', text: aiMessage };
    setMessages([...messages, newMessage]);
    setAiMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { 
        id: messages.length + 2, 
        sender: 'ai', 
        text: `I received your message: "${aiMessage}". This is an automated response.` 
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleLogout = () => {
    // Clear any user session/token here
    navigate('/');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  };

  // Sample data for the dashboard
  const stats = [
    { title: 'Total Students', value: '2,420', change: '+12%', isPositive: true, icon: <FaUsers className="text-blue-500 text-2xl" /> },
    { title: 'Total Projects', value: '1,210', change: '+8%', isPositive: true, icon: <FaFileAlt className="text-green-500 text-2xl" /> },
    { title: 'Total Events', value: '316', change: '-2%', isPositive: false, icon: <FaCalendarAlt className="text-yellow-500 text-2xl" /> },
    { title: 'Total Earnings', value: '$12,840', change: '+18%', isPositive: true, icon: <FaChartLine className="text-purple-500 text-2xl" /> },
  ];

  const recentActivities = [
    { id: 1, user: 'Alex Johnson', action: 'submitted project', time: '2 mins ago', avatar: 'A' },
    { id: 2, user: 'Sarah Williams', action: 'commented on your post', time: '10 mins ago', avatar: 'S' },
    { id: 3, user: 'Mike Peterson', action: 'started following you', time: '25 mins ago', avatar: 'M' },
    { id: 4, user: 'Team Meeting', action: 'in 30 minutes', time: '30 mins', avatar: 'T', isMeeting: true },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Sidebar */}
      <div 
        className={`${isSidebarOpen ? 'w-64' : 'w-20'} 
        bg-gray-900/80 backdrop-blur-md border-r border-gray-800 text-gray-200 transition-all duration-300 ease-in-out`}
      >
        <div className='flex items-center gap-2 p-4'>
          <img src="/src/assets/Logo.svg" alt="logo" className="w-10 h-10" />
          <span className="text-xl font-semibold text-gray-800">PeerSync</span>
        </div>
        
        {/* Navigation */}
        <div className="flex-1 flex flex-col">
          <nav className="mt-6 px-2 space-y-1">
            <NavItem 
              icon={<RiDashboardLine className="w-5 h-5" />} 
              text="Dashboard" 
              active={location.pathname === '/dashboard'}
              to="/dashboard"
            />
            <NavItem 
              icon={<FaChartLine className="w-5 h-5" />} 
              text="Analytics" 
              active={location.pathname === '/analytics'}
              to="/analytics"
            />
            <NavItem 
              icon={<FaCalendarAlt className="w-5 h-5" />} 
              text="Calendar" 
              active={location.pathname === '/calendar'}
              to="/calendar"
            />
            <NavItem 
              icon={<FaUsers className="w-5 h-5" />} 
              text="Users" 
              active={location.pathname === '/users'}
              to="/users"
            />
            <NavItem 
              icon={<FaFileAlt className="w-5 h-5" />} 
              text="Documents" 
              active={location.pathname === '/documents'}
              to="/documents"
            />
            <NavItem 
              icon={<RiUserLine className="w-5 h-5" />} 
              text="Profile" 
              active={location.pathname === '/profile'}
              to="/profile"
            />
            <NavItem 
              icon={<RiSettingsLine className="w-5 h-5" />} 
              text="Settings" 
              active={location.pathname === '/settings'}
              to="/settings"
            />
          </nav>
          <div className="mt-auto mb-6">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 w-full p-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              <RiLogoutBoxLine className="text-xl" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-gray-900/50 backdrop-blur-md border-b border-gray-800">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-800/50 mr-2 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
              <h1 className="text-xl font-semibold text-gray-100">
                {location.pathname.split('/')[1] ? 
                  location.pathname.split('/')[1].charAt(0).toUpperCase() + location.pathname.split('/')[1].slice(1) : 
                  'Dashboard'}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="relative">
                  <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-200 placeholder-gray-500"
                  />
                </div>
              </div>
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                {darkMode ? (
                  <RiSunLine className="w-5 h-5 text-yellow-400" />
                ) : (
                  <RiMoonFill className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <button 
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="p-2 rounded-lg hover:bg-gray-800/50 relative transition-colors"
              >
                <FaBell className="w-5 h-5 text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                U
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gradient-to-br from-gray-900/30 via-gray-900/20 to-gray-900/30">
          <div className="max-w-7xl mx-auto">
            {children || (
              <>
                <div className="mb-8">
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome back, ProCoder! 👋</h1>
                  <p className="text-gray-500">Here's what's happening with your projects today.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500">{stat.title}</p>
                          <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                        </div>
                        <div className={`p-2 rounded-lg ${stat.isPositive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                          {stat.icon}
                        </div>
                      </div>
                      <div className={`mt-2 text-sm ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change} from last month
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold">Recent Activity</h2>
                    <button className="text-sm text-blue-500 hover:underline flex items-center">
                      View all <RiArrowRightLine className="ml-1" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium mr-3 ${
                          activity.isMeeting ? 'bg-purple-500' : 'bg-blue-500'
                        }`}>
                          {activity.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">{activity.user}</span> {activity.action}
                            {activity.isMeeting && (
                              <span className="ml-2 px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full">
                                {activity.time}
                              </span>
                            )}
                          </p>
                          {!activity.isMeeting && (
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          )}
                        </div>
                        {!activity.isMeeting && (
                          <RiArrowRightLine className="text-gray-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>

      {/* AI Panel Toggle Button */}
      <button 
        onClick={() => setIsAIPanelOpen(!isAIPanelOpen)}
        className="fixed right-6 bottom-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-10"
      >
        {isAIPanelOpen ? <RiCloseLine size={24} /> : <RiRobot2Line size={24} />}
      </button>

      {/* AI Panel */}
      {isAIPanelOpen && (
        <div className="fixed right-6 bottom-24 w-80 bg-white rounded-xl shadow-xl flex flex-col" style={{ height: '60vh' }}>
          <div className="bg-blue-500 text-white px-4 py-3 rounded-t-xl flex justify-between items-center">
            <h3 className="font-medium">AI Assistant</h3>
            <button onClick={() => setIsAIPanelOpen(false)} className="text-white hover:text-gray-200">
              <RiCloseLine size={20} />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'ai' 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-blue-500 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={aiMessage}
                onChange={(e) => setAiMessage(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-200 placeholder-gray-500"
              />
              <button 
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <RiSendPlaneFill size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

// Reusable NavItem component
const NavItem = ({ icon, text, active = false, to = '#' }) => {
  return (
    <Link 
      to={to}
      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg mx-2 mb-1 transition-colors ${
        active 
          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border-l-4 border-blue-500' 
          : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span className="ml-3">{text}</span>
      {active && (
        <RiArrowRightLine className="ml-auto text-blue-400" />
      )}
    </Link>
  );
};

export default Dashboard;