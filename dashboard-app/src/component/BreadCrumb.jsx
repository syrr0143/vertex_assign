import { useState } from "react";

export default function BreadCrumb() {
  const [activeTab, setActiveTab] = useState("Overview"); // Default active tab

  return (
    <div className="flex items-center justify-between border-b border-gray-800 bg-black">
      {/* Left Section - Tabs */}
      <div className="flex items-center ">
        {["Overview", "Demographics"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 text-lg font-bold border-l border-gray-800 transition-all ${
              activeTab === tab
                ? "text-white bg-gray-900"
                : "text-gray-400 hover:bg-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Right Section - Other Buttons */}
      <div className="flex items-center">
        {["More"].map((tab) => (
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
