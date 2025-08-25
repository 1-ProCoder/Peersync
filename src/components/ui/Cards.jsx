import React from 'react';

const Cards = () => {
    const CardsData = [
        {
            id: 1,
            title: "Study Rooms",
            description: "Join or create rooms with timers and focus tracking."
        },
        {
            id: 2,
            title: "AI Assistant",
            description: "Get instant help with explanations, summaries, or practice questions."
        },
        {
            id: 3,
            title: "Peer Matching",
            description: "Connect with students in your class/subject/level."
        },
        {
            id: 4,
            title: "Progress Tracking",
            description: "Monitor your study progress and stay on track."
        },
        {
            id: 5,
            title: "Privacy First",
            description: "Your data is secure and private with end-to-end encryption."
        }
    ];
  return (
    <div className='flex flex-wrap justify-center gap-4 mt-10 w-full'>
      {CardsData.map(card => (
        <div key={card.id} className='border border-gray-700 p-4 rounded-lg shadow-md w-64 text-white backdrop-blur-lg bg-gray-900/30'>
          <h2 className='text-xl font-bold text-white'>{card.title}</h2>
          <p className='text-gray-300'>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
