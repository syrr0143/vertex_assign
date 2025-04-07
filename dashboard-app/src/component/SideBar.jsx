import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Plus } from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "Analytics", path: "/analytics" },
    { label: "Connect", path: "/connect" },
    { label: "Dealroom", path: "/dealroom" },
    { label: "Profile", path: "/profile" },
    { label: "Settings", path: "/settings" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen flex flex-col bg-black z-40 ${
        collapsed ? "w-16" : "w-52"
      } transition-all duration-300`}
    >
      <div className="border-b border-gray-800">
        <div className="flex items-center ml-2 p-0">
          <div className="flex items-center ml-2 p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="30"
              height="30"
              fill="black"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="white"
                stroke="black"
                strokeWidth="2"
              />
              <polygon points="50,20 30,60 50,50 70,60" fill="black" />
              <polygon points="50,50 45,70 55,70" fill="black" />
            </svg>
          </div>
          <div className="flex items-center p-4">
            <h1 className="text-lg font-semibold mr-3">Vertolabs, Inc</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-row h-full">
        <div className="w-16 bg-black border-r border-gray-800 flex justify-between flex-col items-center py-4">
          <div>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-700">
              <img
                src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                alt="Profile"
              />
            </div>
          </div>
          <button className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center">
            <Plus size={16} className="text-white" />
          </button>
        </div>

        {!collapsed && (
          <div className="bg-black w-48 border-r border-gray-800 flex flex-col">
            <nav className="flex-1">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.label}
                    onClick={() => navigate(item.path)}
                    className={`w-full text-left flex items-center px-4 py-3 ${
                      isActive
                        ? "text-white bg-gray-900"
                        : "text-gray-400 hover:bg-gray-800"
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
