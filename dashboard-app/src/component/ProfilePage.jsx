import { useEffect, useState } from "react";
import { useMobile } from "../hooks/useMobile";
import ProfileCard from "./ProfileCard";
import Experience from "./Experience";
import FonunderCompany from "./FonunderCompany";
import MobileNav from "./MobileNav";
import BreadCrumb from "./BreadCrumb";
import { useOutletContext } from "react-router-dom";

export default function ProfilePage() {
  const isMobile = useMobile();
  const [activeTab, setActiveTab] = useState("Overview");
const context = useOutletContext();
const { setBreadcrumb } = useOutletContext();

useEffect(() => {
  setBreadcrumb?.({
    tabs: ["Overview", "Portfolio", "Experience", "Media"],
    rightTabs: ["More"],
  });
}, [setBreadcrumb]);


  if (isMobile) {
    return (
      <div className="flex flex-col min-h-screen bg-black text-white">
        <div className="flex items-center justify-between p-4">
          <div className="w-8 h-8 rounded-full bg-gray-600 mr-4" />
        </div>

        <div className="px-4 pb-2">
          <div className="flex border-b border-gray-800">
            {["Overview", "Experience"].map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 ${
                  activeTab === tab
                    ? "border-b-2 border-white font-medium"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-20">
          {activeTab === "Overview" && (
            <>
              <ProfileCard />
              <div className="mt-6">
                <FonunderCompany />
              </div>
            </>
          )}
          {activeTab === "Experience" && (
            <div className="mt-6">
              <Experience />
            </div>
          )}
        </div>

        <MobileNav />
      </div>
    );
  }

  // Desktop view
    return (
      <>
       
            <div className={`flex-1 overflow-y-auto p-6 ${isMobile ? "mt-0" : "mt-24"} mb-12 bg-black text-white`}>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <ProfileCard />
          </div>

          <div className="mt-6 w-full flex flex-row gap-4">
            <div className="w-1/2">
              <FonunderCompany />
            </div>
            <div className="w-1/2">
              <Experience />
            </div>
          </div>
        </div>
      </>
    );
}
