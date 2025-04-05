export default function InsightsPanel({ mobile = false }) {
  return (
    <div
      className={`bg-black border border-gray-500 rounded-lg p-4 ${
        mobile ? "mb-4" : ""
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-3xl font-semibold">Insights</h3>
        {mobile && <div className="text-md text-white">Visitors</div>}
      </div>

      <div className={mobile ? "flex justify-between" : "space-y-4"}>
        <div className={mobile ? "w-1/2" : ""}>
          <div className="text-lg text-white font-bold mb-1">Founders</div>
          <div className="flex flex-row gap-2">
            <div className="flex items-baseline">
              <h4 className="text-2xl font-bold mr-2">7.4K</h4>
            </div>
            <div className="flex items-baseline flex-col">
              <span className="text-xs text-green-500">+100%</span>
              <div className="text-xs text-gray-400">(1002)</div>
            </div>
          </div>
        </div>

        <div className={mobile ? "w-1/2" : ""}>
          <div className="text-lg text-white font-bold mb-1">Investors</div>

          <div className="flex flex-row gap-2">
            <div className="flex items-baseline">
              <h4 className="text-2xl font-bold mr-2">6.09K</h4>
            </div>
            <div className="flex items-baseline  flex-col">
              <span className="text-xs text-green-500">+100%</span>
              <div className="text-xs text-gray-400">(1001)</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-2 p-0 h-full bg-gray-700 mt-2"></div> */}
      <div className="w-full p-0 h-px bg-gray-700 mt-6 mb-4"></div>

      <div className="mt-6 flex justify-end items-center">
        <button className="text-lg  text-white flex items-center">
          View detailed insights
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
