import React, { useState } from 'react';
import { RiAddLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };
  
  const today = new Date();
  const isToday = (day) => {
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };
  
  const isSelected = (day) => {
    return (
      day === selectedDate.getDate() &&
      month === selectedDate.getMonth() &&
      year === selectedDate.getFullYear()
    );
  };
  
  const events = [
    { id: 1, title: 'Team Meeting', time: '10:00 AM - 11:30 AM', color: 'bg-blue-500' },
    { id: 2, title: 'Project Deadline', time: '2:00 PM', color: 'bg-red-500' },
    { id: 3, title: 'Client Call', time: '4:30 PM - 5:00 PM', color: 'bg-green-500' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Calendar</h1>
          <p className="text-gray-500">Manage your schedule and events</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors">
          <RiAddLine /> Add Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={prevMonth}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <RiArrowLeftSLine size={20} />
            </button>
            <h2 className="text-xl font-semibold">
              {months[month]} {year}
            </h2>
            <button 
              onClick={nextMonth}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <RiArrowRightSLine size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {/* Day headers */}
            {days.map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
            
            {/* Empty cells for days before the first day of the month */}
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`} className="h-12"></div>
            ))}
            
            {/* Days of the month */}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
              <div 
                key={day} 
                onClick={() => setSelectedDate(new Date(year, month, day))}
                className={`h-12 border rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors ${
                  isToday(day) 
                    ? 'border-blue-500 bg-blue-50' 
                    : isSelected(day)
                    ? 'border-blue-500 bg-blue-100'
                    : 'border-transparent hover:bg-gray-50'
                }`}
              >
                <span className={`text-sm font-medium ${
                  isToday(day) || isSelected(day) ? 'text-blue-600' : 'text-gray-800'
                }`}>
                  {day}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Events */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">
              {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </h3>
            
            {events.length > 0 ? (
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="p-3 border rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 mt-1.5 rounded-full ${event.color}`}></div>
                      <div>
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-gray-500">{event.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No events scheduled for this day.</p>
            )}
            
            <button className="w-full mt-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
              + Add Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
