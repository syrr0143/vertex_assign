import { useState } from "react";
import { useMobile } from "../hooks/useMobile";
import Sidebar from "./SideBar";
import TopNav from "./TopNav";
import MobileNav from "./MobileNav";
import FonunderCompany from "./FonunderCompany";
import Experience from "./Experience";
import BreadCrumb from "./BreadCrumb";
import ProfileCard from "./ProfileCard";

export default function Dashboard() {
  const isMobile = useMobile();
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {!isMobile ? (
        <>
          {/* <TopNav /> */}
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />

            <main className="flex-1 overflow-y-auto mt-12">
              <div className="fixed top-0 left-52 w-[calc(100%-13rem)] bg-black text-white z-50">
                <TopNav />

                <BreadCrumb />
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold">Overview</h1>
                </div>

                <div className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <ProfileCard />
                </div>

                <div className="mt-6 w-full flex flex-row gap-4">
                  <div className="w-1/2 flex">
                    <div className="w-full h-full">
                      <FonunderCompany />
                    </div>
                  </div>
                  <div className="w-1/2 flex">
                    <div className="w-full h-full">
                      <Experience />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-600 mr-4"></div>
            </div>
            <div className="flex items-center">
              <button className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-filter"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
              </button>
              <button className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-more-vertical"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
            </div>
          </div>

          <div className="px-4 pb-2">
            <div className="flex border-b border-gray-800">
              {["Overview", "Reports", "Demographics"].map((tab) => (
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
                <VisitorsChart mobile={true} />
                <InsightsPanel mobile={true} />
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-bold">Demographics</h2>
                    <span className="text-sm text-gray-400">Visitors</span>
                  </div>
                  <DemographicsMap mobile={true} />
                </div>
              </>
            )}
          </div>

          <MobileNav />
        </>
      )}
    </div>
  );
}
