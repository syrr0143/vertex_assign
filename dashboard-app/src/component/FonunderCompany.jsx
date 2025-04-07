
export default function FonunderCompany({ mobile = false }) {
  return (
    <div className="bg-[#111] border border-gray-500 rounded-lg p-6 w-full h-full">
      <h3 className="text-3xl font-bold mb-4">Founded Companies</h3>
      <div className="text-4xl font-bold">02</div>
      <div className="mt-8 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#222] rounded flex items-center justify-center">
              V
            </div>
            <div>
              <div className="flex items-center gap-4">
                <span className="font-medium">Vertx</span>

                <button className="rounded-full bg-green-800 text-green-400 text-[10px] font-medium px-3 py-0.5 flex items-center">
                  LIVE
                </button>
              </div>
              <p className="text-xs text-gray-400">Founded in 2020 • Fintech</p>
            </div>
          </div>
          <button className="text-xs text-gray-400">View Profile</button>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#222] rounded flex items-center justify-center">
              C
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Company 1</span>

                <button className="rounded-full bg-purple-800 text-purple-400 text-[10px] font-medium px-3 py-0.5 flex items-center">
                  ACQUIRED
                </button>
              </div>
              <p className="text-xs text-gray-400">
                Founded in 2023 • Acquired by abc, DevCompanies
              </p>
            </div>
          </div>
          <button className="text-xs text-gray-400">View Profile</button>
        </div>
      </div>
    </div>
  );
}
