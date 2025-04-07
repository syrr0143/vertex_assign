import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useMobile } from "../hooks/useMobile"; // assuming this hook exists
import Sidebar from "./SideBar";
import TopNav from "./TopNav";
import BreadCrumb from "./BreadCrumb";

export default function Layout() {
  const [breadcrumb, setBreadcrumb] = useState({
    tabs: [],
    rightTabs: [],
  });

  const isMobile = useMobile();

  return (
    <div className="flex bg-black text-white">
      {/* Sidebar only for non-mobile */}
      {!isMobile && (
        <div className="w-52 fixed top-0 left-0 bottom-0 z-40">
          <Sidebar />
        </div>
      )}

      <div className={`flex-1 ${!isMobile ? "ml-52" : ""} flex flex-col`}>
        {/* TopNav and BreadCrumb only for non-mobile */}
        {!isMobile && (
          <div className="fixed top-0 left-52 right-0 bg-black z-50">
            <div className="flex flex-col border-b border-gray-800">
              <TopNav />
              <BreadCrumb {...breadcrumb} />
            </div>
          </div>
        )}

        {/* Scrollable Content with context */}
        <Outlet context={{ setBreadcrumb }} />
      </div>
    </div>
  );
}
