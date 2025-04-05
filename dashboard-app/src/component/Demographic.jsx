import { useEffect, useRef } from "react";
import urlworld from '../assets/map.png'
export default function DemographicsMap({ mobile = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, rect.width, rect.height);

    const countries = [
      {
        name: "India",
        color: "#5B21B6",
        x: rect.width * 0.7,
        y: rect.height * 0.4,
      },
      {
        name: "USA",
        color: "#2563EB",
        x: rect.width * 0.2,
        y: rect.height * 0.35,
      },
      {
        name: "CANADA",
        color: "#F59E0B",
        x: rect.width * 0.2,
        y: rect.height * 0.25,
      },
      {
        name: "UAE",
        color: "#10B981",
        x: rect.width * 0.6,
        y: rect.height * 0.4,
      },
    ];

    countries.forEach((country) => {
      ctx.beginPath();
      ctx.arc(country.x, country.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = country.color;
      ctx.fill();
    });
  }, [mobile]);

  const countryData = [
    {
      name: "INDIA",
      shortName: "IN",
      percentage: 47,
      color: "#5B21B6",
      flag: "https://flagcdn.com/w40/in.png", // Updated flag URL for India
    },
    {
      name: "USA",
      shortName: "US",
      percentage: 25,
      color: "#2563EB",
      flag: "https://flagcdn.com/w40/us.png", // Updated flag URL for USA
    },
    {
      name: "CANADA",
      shortName: "CA",
      percentage: 60,
      color: "#F59E0B",
      flag: "https://flagcdn.com/w40/ca.png",
    },
    {
      name: "UAE",
      shortName: "AE",
      percentage: 70,
      color: "#10B981",
      flag: "https://flagcdn.com/w40/ae.png",
    },
  ];

  return (
    <div className="bg-black border border-gray-500 rounded-lg p-4">
      <div className="flex gap-4 justify-between items-center">
        <div className="flex-1">
          <img src={urlworld} className="w-full h-48"></img>
        </div>

        <div>
          {!mobile && (
            <div className="w-64 space-y-6">
              {countryData.map((country, index) => (
                <div key={index} className="flex flex-row gap-2">
                  {/* Info row with flag and text */}

                  <div className="flex items-center justify-center">
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="rounded-xs"
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{country.name}</span>
                      </div>
                      <span className="text-sm font-medium">
                        {country.percentage}%
                      </span>
                    </div>

                    {/* Progress bar with custom color */}
                    <div className="h-2 bg-gray-500 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${country.percentage}%`,
                          backgroundColor: country.color,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        {!mobile && (
          <div className="badge bg-black mt-4">
            <div className="flex space-x-4">
              {countryData.map((country, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-1"
                    style={{ backgroundColor: country.color }}
                  ></div>
                  <span className="text-xs">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <button className="text-lg text-white flex items-center justify-center">
          View all countries
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
