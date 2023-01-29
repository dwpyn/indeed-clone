import React from "react";

export default function Search() {
  return (
    <div className="py-8 lg:pt-28 lg:pb-24">
      <div className="max-w-4xl flex flex-col lg:flex-row gap-4 mx-8 lg:mx-auto ">
        <div className="border rounded border-slate-400 py-2 rounded-lg w-full lg:w-1/2 pl-4 flex gap-4">
          <p className="font-medium">What</p>
          <input
            className="w-full"
            type="text"
            placeholder="Job title, keywords, or company"
          />
        </div>
        <div className="border rounded border-slate-400 py-2 rounded-lg w-full lg:w-1/2 pl-4 flex gap-4">
          <p className="font-medium">Where</p>
          <input
            className="w-full"
            type="text"
            placeholder="city, province or region"
          />
        </div>
        <button className="text-white bg-blue-600 w-full py-3 lg:w-32 rounded-lg font-medium">
          Find Jobs
        </button>
      </div>
    </div>
  );
}
