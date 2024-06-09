import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex  mb-4">
        {React.Children.map(children, (tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`mr-4 px-4 py-2 rounded-lg mx-auto w-full ${
              activeTab === index
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div>
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;