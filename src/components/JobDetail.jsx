import React from "react";

export default function JobDetail() {
  return (
    <div className="sticky top-0 py-4 w-full h-screen">
      <div className="rounded-md border border-slate-300 inline-block bg-white w-full h-full flex flex-col">
        <div
          className="h-1/2 w-full"
          style={{
            webkitBoxShadow: "0 6px 2px -2px rgba(0,0,0,0.2)",
            mozBoxShadow: "0 6px 2px -2px rgba(0,0,0,0.2)",
            boxShadow: "0 6px 2px -2px rgba(0,0,0,0.2)",
          }}
        >
          <div className="mx-4 mt-10 pb-6">
            <p className="text-2xl font-semibold">Test</p>
            <p className="text-md font-medium text-blue-500 hover:underline mt-1">
              Company
            </p>
            <div className="flex gap-2 -mt-1">
              <p>Work from Home</p>
              <p>•</p>
              <p>Remote</p>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Responded to 75% or more applications in the past 30 days,
              typically within 11 days.
            </p>
            <button className="mt-4 font-bold text-lg bg-blue-700 text-white px-3 py-2 rounded-md">
              Apply Now
            </button>
          </div>
        </div>
        <div className="overflow-y-auto grow">
          <div className=" mt-6 grid grid-cols-1 divide-y">
            <div className="px-4 py-5">
              <p className="text-lg font-semibold">Job details</p>
              <p>Job Type</p>
              <p className="font-semibold bg-gray-200 border rounded-sm text-slate-800 p-2 py-0 inline-block">
                Fulltime
              </p>
            </div>
            <div className="px-4 py-5">
              <p className="text-lg font-semibold">Qualification</p>
              <ul className="list-disc list-inside text-sm text-gray-600 pl-4 pt-2">
                <li>lll</li>
                <li>lll</li>
              </ul>
            </div>
            <div className="px-4 py-5">
              <p className="text-lg font-semibold">Full Job Description</p>
              <div className="text-sm text-gray-600">
                <p>
                  A health and wellness company in Canggu, Bali is looking for a
                  talented and enthusiastic Web Developer (Full-time, Bali
                  Based)
                </p>
                <p>Responsibilities:</p>
                <br />
                <ul className="list-disc list-inside">
                  <li>
                    Design, build and maintain website and software application
                  </li>
                  <li>Develop features to enhance the user experience</li>
                  <li>Ensure web design is optimized for smartphones</li>
                  <li>
                    Coordinate to resolve conflicts, prioritize needs, develop
                    content criteria &amp; creating solutions for obstacles
                  </li>
                  <li>Direct and perform website updates</li>
                  <li>
                    Develop or validate test routines and schedules to ensure
                    that test cases mimic external interfaces and address all
                    browser and device types
                  </li>
                  <li>Edit, write &amp; design website content</li>
                  <li>
                    Maintain an understanding of the latest Web applications and
                    programming practices through education, study and
                    participation in conferences, workshops and groups
                  </li>
                  <li>
                    Back up files from Web sites to local directories for
                    recovery
                  </li>
                  <li>
                    Identify problems uncovered by customer feedback and test
                    and correct or refer problems to appropriate personnel for
                    correction
                  </li>
                  <li>
                    Evaluate code to ensure it meets industry standards, is
                    valid, is properly structured and is compatible with
                    browsers, devices or operating systems
                  </li>
                  <li>
                    Determine user's needs by analyzing technical requirements
                  </li>
                </ul>
                <br />
                <p>Requirements:</p>
                <br />
                <ul className="list-disc list-inside">
                  <li>Indonesian citizen</li>
                  <li>Fluent in written and verbal English</li>
                  <li>Proven work experience in a similar role</li>
                  <li>Understanding of key design principles</li>
                  <li>Proficiency in HTML, CSS, JavaScript and jQuery</li>
                  <li>Understanding of server-side CSS</li>
                  <li>
                    Experience with graphic design applications such as Adobe
                    Illustrator
                  </li>
                  <li>Experience with responsive and adaptive design</li>
                  <li>Understanding of SEO principles</li>
                  <li>Good problem-solving skills</li>
                  <li>
                    Excellent verbal communication and interpersonal skills
                  </li>
                  <li>Familiar with Shopify and Wordpress</li>
                </ul>
                <br />
                <p>Job Type: Full-time</p>
                <br />
                <p>Ability to commute/relocate:</p>
                <ul className="list-disc list-inside">
                  <li>
                    Badung: Reliably commute or planning to relocate before
                    starting work (Required)
                  </li>
                </ul>
                <br />
                <p>Application Question(s):</p>
                <ul className="list-disc list-inside">
                  <li>
                    Are you proficient in HTML, CSS, JavaScript and jQuery?
                  </li>
                </ul>
                <br />
                <p>Experience:</p>
                <ul className="list-disc list-inside">
                  <li>Web Development: 3 years (Preferred)</li>
                </ul>
                <br />
                <p>Language:</p>
                <ul className="list-disc list-inside">
                  <li>English (Required)</li>
                </ul>
              </div>
            </div>
            <div className="px-4 py-5">
              <p className="text-lg font-semibold">Hiring Insights</p>
              <p className="text-sm text-gray-500">
                Hiring <b className="text-medium">1</b> candidate for this role
              </p>
              <p className="font-semibold mt-5">Job Activity</p>
              <ul>
                <li className="list-disc list-inside text-sm text-gray-500">
                  Posted 6 days ago
                </li>
              </ul>
            </div>
            <div className="px-4 mb-8">
              <button className="mt-4 font-bold text-lg bg-gray-200 text-black px-3 py-2 rounded-md">
                Report Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
