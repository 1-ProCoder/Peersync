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
  RiArrowRightLine
} from 'react-icons/ri';
import { 
  FaChartLine, 
  FaCalendarAlt,
  FaUsers,
  FaFileAlt
} from 'react-icons/fa';

const Dashboard = ({ children }) => {
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
    <div className="bg-gray-50 min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm p-4 flex flex-col">
        <div className="flex items-center gap-2 p-4">
          <img src="/src/assets/Logo.svg" alt="logo" className="w-10 h-10" />
          <span className="text-xl font-semibold text-gray-800">PeerSync</span>
        </div>
        
        <div className="flex-1 flex flex-col">
          <nav className="space-y-1 mt-4">
            <NavItem 
              icon={<RiDashboardLine />} 
              text="Dashboard" 
              to="/dashboard" 
              active={location.pathname === '/dashboard'}
            />
            <NavItem 
              icon={<FaChartLine />} 
              text="Analytics" 
              to="/analytics"
              active={location.pathname === '/analytics'}
            />
            <NavItem 
              icon={<FaCalendarAlt />} 
              text="Calendar" 
              to="/calendar"
              active={location.pathname === '/calendar'}
            />
            <NavItem 
              icon={<RiUserLine />} 
              text="Profile" 
              to="/profile"
              active={location.pathname === '/profile'}
            />
            <NavItem 
              icon={<RiSettingsLine />} 
              text="Settings" 
              to="/settings"
              active={location.pathname === '/settings'}
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
        <header className="bg-white shadow-sm p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">
              {location.pathname === '/dashboard' && 'Dashboard'}
              {location.pathname === '/analytics' && 'Analytics'}
              {location.pathname === '/calendar' && 'Calendar'}
              {location.pathname === '/profile' && 'Profile'}
              {location.pathname === '/settings' && 'Settings'}
            </h1>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <RiNotification4Line className="text-gray-600 text-xl" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <RiSunLine className="text-gray-600 text-xl" title='Coming Soon' />
              </button>
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                  P
                </div>
                <span className="font-medium">ProCoder</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {children || (
            <>
              {/* Dashboard Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
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
                  <button className="text-sm text-blue-600 hover:underline">View All</button>
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
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                      {activity.isMeeting ? (
                        <button className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full hover:bg-blue-200">
                          Join
                        </button>
                      ) : (
                        <RiArrowRightLine className="text-gray-400" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
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
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
const NavItem = ({ icon, text, active = false, to = '#' }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
      active 
        ? 'bg-blue-50 text-blue-600' 
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    <span className="text-xl">{icon}</span>
    <span className="font-medium">{text}</span>
  </Link>
);

export default Dashboard;
