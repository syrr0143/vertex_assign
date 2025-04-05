import { useState } from "react";
import { Menu, Plus } from "lucide-react";
import ProfileImage from "./ProfileImage";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`max-h-screen flex flex-col ${
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
      {/* Thin sidebar with toggle button */}
      <div className="flex flex-row h-full">
        <div className="w-16 bg-black border-r border-gray-800 flex justify-between flex-col items-center py-4">
          <div className="flex flex-col gap-4">
            <ProfileImage />
            <ProfileImage status={"warning"} />
            <ProfileImage status={"secondary"} />
            <ProfileImage />
          </div>
          <button className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center">
            <Plus size={16} className="text-white" />
          </button>
        </div>

        {/* Expanded sidebar */}
        {!collapsed && (
          <div className="bg-black w-48 border-r border-gray-800 flex flex-col">
            {/* <div className="p-4">
            <h1 className="text-white font-semibold text-lg">Vertxlabs, Inc</h1>
          </div> */}
            <nav className="flex-1">
              {[
                { label: "Dashboard" },
                { label: "Analytics" },
                { label: "Connect" },
                { label: "Dealroom" },
                { label: "Profile", active: true },
                { label: "Settings" },
              ].map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={`flex items-center px-4 py-3 ${
                    item.active
                      ? " text-white"
                      : "text-gray-400 hover:bg-gray-900"
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
