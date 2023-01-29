import Header from "./components/Header";
import JobFeed from "./components/JobFeed";
import Footer from "./components/Footer";
import Search from "./components/Search";
import RecentSearch from "./components/RecentSearch";
import { useState } from "react";

function App() {
  const [isRecent, setIsRecent] = useState(false);

  return (
    <div className="App">
      <Header />
      <Search />
      <div className="border-b">
        <div className="mx-auto max-w-lg flex justify-center ">
          <button
            onClick={() => setIsRecent(false)}
            className={`text-xl font-bold pb-5 ${
              !isRecent ? "border-b-4" : ""
            } px-16 border-blue-600`}
          >
            Job Feed
          </button>
          <button
            onClick={() => setIsRecent(true)}
            className={`text-xl font-bold pb-5 ${
              isRecent ? "border-b-4" : ""
            } px-16 border-blue-600`}
          >
            Recent Search
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-8 lg:mx-auto">
        {isRecent ? <RecentSearch /> : <JobFeed jobItems={dummy} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;

const dummy = [
  {
    title: "Creative Designer",
    company: "PT. Aera Indonesian Projects",
    stars: 5,
    location: "Badung",
    salary: [4000000, 5000000],
    tag: "Full-time",
    desc: [
      "Mengerti dan menguasai aplikasi Adobe Photoshop, illustrator dan penggunaan gambar 2D dan 3D",
      "Mengerti pecah warna yang menghasilkan motion atau grafik",
    ],
    activeDate: new Date().toISOString(),
    relation: "Bali",
  },
  {
    title: "Creative Designer",
    company: "PT. Aera Indonesian Projects",
    stars: 5,
    location: "Badung",
    salary: [4000000, 5000000],
    tag: "Full-time",
    desc: [
      "Mengerti dan menguasai aplikasi Adobe Photoshop, illustrator dan penggunaan gambar 2D dan 3D",
      "Mengerti pecah warna yang menghasilkan motion atau grafik",
    ],
    activeDate: new Date().toISOString(),
    relation: "Bali",
  },
  {
    title: "Creative Designer",
    company: "PT. Aera Indonesian Projects",
    stars: 5,
    location: "Badung",
    salary: [4000000, 5000000],
    tag: "Full-time",
    desc: [
      "Mengerti dan menguasai aplikasi Adobe Photoshop, illustrator dan penggunaan gambar 2D dan 3D",
      "Mengerti pecah warna yang menghasilkan motion atau grafik",
    ],
    activeDate: new Date().toISOString(),
    relation: "Bali",
  },
  {
    title: "Creative Designer",
    company: "PT. Aera Indonesian Projects",
    stars: 5,
    location: "Badung",
    salary: [4000000, 5000000],
    tag: "Full-time",
    desc: [
      "Mengerti dan menguasai aplikasi Adobe Photoshop, illustrator dan penggunaan gambar 2D dan 3D",
      "Mengerti pecah warna yang menghasilkan motion atau grafik",
    ],
    activeDate: new Date().toISOString(),
    relation: "Bali",
  },
  {
    title: "Creative Designer",
    company: "PT. Aera Indonesian Projects",
    stars: 5,
    location: "Badung",
    salary: [4000000, 5000000],
    tag: "Full-time",
    desc: [
      "Mengerti dan menguasai aplikasi Adobe Photoshop, illustrator dan penggunaan gambar 2D dan 3D",
      "Mengerti pecah warna yang menghasilkan motion atau grafik",
    ],
    activeDate: new Date().toISOString(),
    relation: "Bali",
  },
];
