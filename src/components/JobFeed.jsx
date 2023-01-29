import React, { useState, useEffect } from "react";
import JobItem from "./JobItem";
import JobDetail from "./JobDetail";

export default function JobFeed({ jobItems = [] }) {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <>
      <p className="ml-4 pt-4">Jobs based on your activity on Indeed</p>
      <div className="flex flex-row pt-2 justify-center">
        <section className="md:basis-1/2 md:mr-4 flex flex-col gap-2 mx-auto">
          {jobItems.map((i, key) => (
            <JobItem job={jobItems[key]} />
          ))}
        </section>
        {width > breakpoint ? (
          <section className="basis-2/3">
            <JobDetail />
          </section>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
