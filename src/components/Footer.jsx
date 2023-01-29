import React from "react";

export default function Footer() {
  return (
    <>
      <div className="mt-20  border-0 border-b"></div>

      <div className="mx-8 py-2 pb-8 flex flex-col gap-4">
        <ul className="flex gap-6">
          <li className="hover:underline">Browse Jobs</li>
          <li className="hover:underline">Browse Company</li>
        </ul>
        <p>Indeed 2023</p>
      </div>
    </>
  );
}
