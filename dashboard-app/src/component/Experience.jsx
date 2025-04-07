
export default function Experience({ mobile = false }) {
 
  return (
    <div className="bg-[#111] border border-gray-500 rounded-lg p-6 w-full h-full">
      <h3 className="text-3xl font-bold mb-4">Experience</h3>
      <div className="text-4xl font-bold ">03</div>
      <div className="mt-8 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#222] rounded"></div>
            <span className="font-medium">Company 1</span>
          </div>
          <button className="text-xs text-gray-400">View Profile</button>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#222] rounded"></div>
            <span className="font-medium">Company 2</span>
          </div>
          <button className="text-xs text-gray-400">View Profile</button>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#222] rounded"></div>
            <span className="font-medium">Company 3</span>
          </div>
          <button className="text-xs text-gray-400">View Profile</button>
        </div>
      </div>
    </div>
  );
}
