import React from "react";

export default function RecentSearch() {
  return (
    <div className="max-w-lg mx-auto mt-4 grid grid-cols-1 divide-y gap-4">
      {data.map((item) => {
        return (
          <div className="flex justify-between pt-3 items-center">
            <div>
              <p>{item.keyword}</p>
              <p className="text-xs text-gray-500">{item.recent} new</p>
            </div>
            <p>X</p>
          </div>
        );
      })}
    </div>
  );
}

const data = [
  {
    keyword: "Bali",
    recent: 38,
  },
  {
    keyword: "web",
    recent: 38,
  },
  {
    keyword: "design",
    recent: 38,
  },
  {
    keyword: "UI",
    recent: 38,
  },
];
