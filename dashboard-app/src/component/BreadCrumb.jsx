import { useState } from "react";

export default function BreadCrumb({ tabs = [], rightTabs = [] }) {
  const [activeTab, setActiveTab] = useState(tabs[0] || ""); // Default to first tab

  return (
    <div className="flex items-center justify-between max-h-[48px] overflow-hidden border-b border-gray-800 bg-black">
      {/* Left Section - Tabs */}
      <div className="flex items-center max-h-[24px] ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 text-lg font-bold border-l border-gray-800 transition-all whitespace-nowrap ${
              activeTab === tab
                ? "text-white bg-gray-900"
                : "text-gray-400 hover:bg-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Right Section - Optional Buttons */}
      <div className="flex items-center">
        {rightTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 text-lg font-semibold border-l border-gray-800 transition-all ${
              activeTab === tab
                ? "text-white bg-gray-900"
                : "text-gray-400 hover:bg-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
