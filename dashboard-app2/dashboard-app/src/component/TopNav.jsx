export default function TopNav() {
  return (
    <div className="flex items-center justify-between border-b border-gray-800 bg-black">
      <div className="flex items-center gap-2">
        

        <button className="px-6 py-4 text-lg font-semibold hover:bg-gray-900 border-l border-gray-800">
          Profile
        </button>
        {/* <h1 className="text-lg font-semibold mr-6">Analytics</h1> */}
      </div>

      <div className="flex items-center">
        <button className="px-6 py-4 text-lg font-semibold hover:bg-gray-900">
          Activity
        </button>
        <button className="px-6 py-4 text-lg font-semibold hover:bg-gray-900 border-l border-gray-800">
          Log out
        </button>
      </div>
    </div>
  );
}
