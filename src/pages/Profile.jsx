import React, { useState } from 'react';
import { RiEdit2Line, RiSaveLine, RiCameraLine } from 'react-icons/ri';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'ProCoder',
    email: 'pro.coder@example.com',
    role: 'Full Stack Developer',
    bio: 'Passionate about building amazing web applications with React and Node.js',
    location: 'San Francisco, CA',
    website: 'pro-coder.dev',
    twitter: '@pro_coder',
  });

  const [formData, setFormData] = useState({ ...profile });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Profile</h1>
          <p className="text-gray-500">Manage your personal information</p>
        </div>
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <RiEdit2Line /> Edit Profile
          </button>
        ) : (
          <div className="flex gap-2">
            <button 
              onClick={() => {
                setIsEditing(false);
                setFormData(profile);
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleSubmit}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <RiSaveLine /> Save Changes
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="relative mx-auto w-32 h-32 rounded-full bg-gray-100 mb-4 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-400">
                {profile.name.charAt(0)}
              </div>
              {isEditing && (
                <label className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 transition-colors">
                  <RiCameraLine />
                  <input type="file" className="hidden" accept="image/*" />
                </label>
              )}
            </div>
            
            <h2 className="text-xl font-bold text-gray-800">{profile.name}</h2>
            <p className="text-gray-500 mb-4">{profile.role}</p>
            
            <div className="border-t border-gray-100 pt-4 mt-4">
              <div className="flex justify-center gap-4">
                <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                  <i className="ri-twitter-fill"></i>
                </button>
                <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                  <i className="ri-github-fill"></i>
                </button>
                <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                  <i className="ri-linkedin-fill"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <h3 className="font-semibold text-gray-800 mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <i className="ri-mail-line text-gray-400"></i>
                <span className="text-gray-600">{profile.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-map-pin-line text-gray-400"></i>
                <span className="text-gray-600">{profile.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-global-line text-gray-400"></i>
                <a href={`https://${profile.website}`} className="text-blue-500 hover:underline">
                  {profile.website}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Profile Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-800 mb-6">Personal Information</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  ) : (
                    <p className="text-gray-900">{profile.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  ) : (
                    <p className="text-gray-900">{profile.role}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <p className="text-gray-900">{profile.bio}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.location}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  {isEditing ? (
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        https://
                      </span>
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  ) : (
                    <a 
                      href={`https://${profile.website}`} 
                      className="text-blue-500 hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {profile.website}
                    </a>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Twitter</label>
                {isEditing ? (
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      @
                    </span>
                    <input
                      type="text"
                      name="twitter"
                      value={formData.twitter.replace('@', '')}
                      onChange={(e) => handleChange({
                        target: { name: 'twitter', value: `@${e.target.value}` }
                      })}
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                ) : (
                  <a 
                    href={`https://twitter.com/${profile.twitter.replace('@', '')}`} 
                    className="text-blue-500 hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {profile.twitter}
                  </a>
                )}
              </div>
            </form>
          </div>
          
          {!isEditing && (
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <h3 className="font-semibold text-gray-800 mb-4">Account Settings</h3>
              <div className="space-y-4">
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  Change Password
                </button>
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  Two-Factor Authentication
                </button>
                <button className="w-full text-left p-3 border border-red-100 text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
