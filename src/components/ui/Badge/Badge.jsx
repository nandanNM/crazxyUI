import React from "react";

const Badge = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Badge</h1>

      {/* Filled Gradient Badges */}
      <div className="flex flex-wrap gap-3">
        <span className="px-4 py-1 rounded-full text-white text-sm font-semibold shadow-md bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500">
          Default
        </span>
        <span className="px-4 py-1 rounded-full text-white text-sm font-semibold shadow-md bg-gradient-to-r from-green-400 to-emerald-500">
          Success
        </span>
        <span className="px-4 py-1 rounded-full text-white text-sm font-semibold shadow-md bg-gradient-to-r from-red-400 to-pink-500">
          Error
        </span>
        <span className="px-4 py-1 rounded-full text-white text-sm font-semibold shadow-md bg-gradient-to-r from-yellow-400 to-orange-500">
          Warning
        </span>
      </div>

      {/* Gradient Border Only Badges */}
      <div className="flex flex-wrap gap-3">
        <div className="p-[2px] rounded-lg bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500">
          <span className="block bg-white text-blue-600 px-3 py-1 rounded-xl text-sm font-semibold">
            Default
          </span>
        </div>
        <div className="p-[2px] rounded-lg bg-gradient-to-r from-green-400 to-emerald-500">
          <span className="block bg-white text-green-600 px-3 py-1 rounded-xl text-sm font-semibold">
            Success
          </span>
        </div>
        <div className="p-[2px] rounded-lg bg-gradient-to-r from-red-400 to-pink-500">
          <span className="block bg-white text-red-600 px-3 py-1 rounded-xl text-sm font-semibold">
            Error
          </span>
        </div>
        <div className="p-[2px] rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500">
          <span className="block bg-white text-yellow-600 px-4 py-1 rounded-xl text-sm font-semibold">
            Warning
          </span>
        </div>
      </div>
    </div>
  );
};

export default Badge;
