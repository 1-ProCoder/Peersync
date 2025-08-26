import React, { useState } from 'react';
import { RiNotification3Line, RiLockPasswordLine, RiShieldCheckLine, RiPaletteLine, RiGlobalLine, RiDeleteBinLine } from 'react-icons/ri';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    language: 'en',
    timezone: 'UTC+00:00',
    theme: 'light',
    emailNotifications: true,
    pushNotifications: true,
    weeklyReports: true,
    marketingEmails: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save settings logic here
    alert('Settings saved successfully!');
  };

  const tabs = [
    { id: 'general', label: 'General', icon: <RiPaletteLine /> },
    { id: 'notifications', label: 'Notifications', icon: <RiNotification3Line /> },
    { id: 'security', label: 'Security', icon: <RiShieldCheckLine /> },
    { id: 'privacy', label: 'Privacy', icon: <RiGlobalLine /> },
    { id: 'delete', label: 'Delete Account', icon: <RiDeleteBinLine /> },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Appearance</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Theme</label>
                  <select
                    name="theme"
                    value={formData.theme}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
                  <select
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="UTC+00:00">(GMT+00:00) UTC</option>
                    <option value="UTC-05:00">(GMT-05:00) Eastern Time</option>
                    <option value="UTC-08:00">(GMT-08:00) Pacific Time</option>
                    <option value="UTC+01:00">(GMT+01:00) London</option>
                    <option value="UTC+09:00">(GMT+09:00) Tokyo</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'notifications':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Email Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Email notifications</h4>
                  <p className="text-sm text-gray-500">Receive email notifications</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="emailNotifications"
                    checked={formData.emailNotifications}
                    onChange={handleChange}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Push notifications</h4>
                  <p className="text-sm text-gray-500">Receive push notifications</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="pushNotifications"
                    checked={formData.pushNotifications}
                    onChange={handleChange}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Weekly reports</h4>
                  <p className="text-sm text-gray-500">Receive weekly summary emails</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="weeklyReports"
                    checked={formData.weeklyReports}
                    onChange={handleChange}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Marketing emails</h4>
                  <p className="text-sm text-gray-500">Receive marketing and promotional emails</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="marketingEmails"
                    checked={formData.marketingEmails}
                    onChange={handleChange}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>
          </div>
        );
        
      case 'security':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Security</h3>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Two-factor authentication</h4>
                  <p className="text-sm text-gray-500 mt-1">Add an extra layer of security to your account</p>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Enable 2FA
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Change password</h4>
                  <p className="text-sm text-gray-500 mt-1">Update your password regularly to keep your account secure</p>
                </div>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Change
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Active sessions</h4>
                  <p className="text-sm text-gray-500 mt-1">View and manage your active login sessions</p>
                </div>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  View all
                </button>
              </div>
            </div>
          </div>
        );
        
      case 'privacy':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Privacy Settings</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Profile visibility</h4>
                <p className="text-sm text-gray-500 mt-1">Choose who can see your profile</p>
                <div className="mt-2">
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Public</option>
                    <option>Friends only</option>
                    <option>Only me</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium text-gray-900">Data sharing</h4>
                <p className="text-sm text-gray-500 mt-1">Help us improve our services by sharing anonymous usage data</p>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-500 shadow-sm focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-700">Share anonymous usage data</span>
                  </label>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium text-gray-900">Data export</h4>
                <p className="text-sm text-gray-500 mt-1">Download a copy of your personal data</p>
                <button className="mt-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  Request data export
                </button>
              </div>
            </div>
          </div>
        );
        
      case 'delete':
        return (
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <RiDeleteBinLine className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Danger Zone</h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>Once you delete your account, there is no going back. Please be certain.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Delete account</h3>
              <p className="text-sm text-gray-500 mb-6">
                Permanently delete your account and all of your data. This action cannot be undone.
              </p>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                Delete my account
              </button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Settings</h1>
        <p className="text-gray-500">Manage your account settings and preferences</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="lg:grid lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="py-6 lg:col-span-3 border-b lg:border-b-0 lg:border-r border-gray-200">
            <nav className="space-y-1 px-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-3 text-lg">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>
          
          {/* Main content */}
          <div className="lg:col-span-9">
            <div className="p-6">
              <form onSubmit={handleSubmit}>
                {renderTabContent()}
                
                {activeTab !== 'delete' && (
                  <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
                    <button
                      type="button"
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 mr-3"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 border border-transparent rounded-lg shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Save changes
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
