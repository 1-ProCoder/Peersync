import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Who is PeerSync for?",
      answer: "PeerSync is designed for students of all levels who want to enhance their learning experience through collaboration and AI-powered tools. Whether you're in high school, college, or pursuing professional certifications, PeerSync helps you study smarter."
    },
    {
      question: "How does the AI tutor work?",
      answer: "Our AI tutor uses advanced algorithms to understand your learning patterns and provide personalized study recommendations, practice questions, and explanations to help you master difficult concepts."
    },
    {
      question: "Can I form study groups?",
      answer: "Yes! PeerSync makes it easy to create or join study groups where you can share notes, discuss topics, and collaborate on assignments with peers who have similar academic goals."
    },
    {
      question: "How do I get started?",
      answer: "Simply sign up for an account, set up your profile, and start exploring the platform. You can join existing study groups or create your own, and our AI will help you every step of the way."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-700 rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              className={`w-full px-6 py-4 text-left flex justify-between items-center ${
                activeIndex === index ? 'bg-gray-800' : 'bg-gray-900/50 hover:bg-gray-800/70'
              } transition-colors duration-200`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-medium text-white">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
              }`}
            >
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
