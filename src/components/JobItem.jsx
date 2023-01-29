import React from "react";

export default function JobItem({ job }) {
  const {
    title,
    company,
    stars,
    location,
    salary,
    tag,
    desc,
    activeDate,
    relation,
  } = job;
  return (
    <div className="p-4 rounded-md border border-slate-300 inline-block hover:drop-shadow-md bg-white">
      <h3 className="text-xl font-semibold">{title}</h3>
      <h4 className="text-lg">{company}</h4>
      <div className="-mt-1 flex">
        <h5 className="text-md">{location}</h5>

        {stars && (
          <div className="flex mx-4 items-center">
            <p className="mr-1 font-semibold dont-gray-500">{stars}</p>
            <svg
              width="12"
              height="12"
              role="presentation"
              class="starIcon"
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12.8709L12.4542 15.5593C12.7807 15.7563 13.1835 15.4636 13.0968 15.0922L11.9148 10.0254L15.8505 6.61581C16.1388 6.36608 15.9847 5.89257 15.6047 5.86033L10.423 5.42072L8.39696 0.640342C8.24839 0.289808 7.7516 0.289808 7.60303 0.640341L5.57696 5.42072L0.395297 5.86033C0.015274 5.89257 -0.13882 6.36608 0.149443 6.61581L4.0852 10.0254L2.90318 15.0922C2.81653 15.4636 3.21932 15.7563 3.54584 15.5593L8 12.8709Z"
                fill="#767676"
              ></path>
            </svg>
          </div>
        )}
      </div>
      <div className="flex items-center mt-2 mb-1">
        {salary && (
          <div className=" mr-1 font-semibold bg-gray-200 border rounded-sm text-slate-800 p-2 py-0">
            <p>{`Rp. ${salary[0]} a month`}</p>
          </div>
        )}
        <p className="mr-1 font-semibold bg-gray-200 border rounded-sm text-slate-800 p-2 py-0">
          {tag}
        </p>
      </div>
      <ul className="list-inside list-disc text-sm text-gray-600">
        {desc.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
      <div className="flex text-xs text-gray-400 mt-3">
        <p className="mr-2">{activeDate}</p>
        <p>{relation}</p>
      </div>
    </div>
  );
}
