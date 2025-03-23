import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import Card from "./Card";

function Newsapp() {
  const [input, setInput] = useState("india");
  const category = ["All", "Sports", "Politics", "Entertainment", "Health", "Fitness"];
  const [data, setData] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const API_KEY = "5a8445a9bdce4de1b68f851026ac4e7f";

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${input}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    const news = jsonData.articles;
    setData(news);
  };

  useEffect(() => {
    getData();
  }, [input]);

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between px-6 lg:px-10 py-3 items-center bg-gray-700 text-white">
        <div className="flex gap-2 lg:gap-5 items-center">
          <i className="ri-newspaper-fill text-3xl"></i>
          <h1 className="text-xl lg:text-2xl font-bold">NewsHub</h1>
        </div>

        <ul className="lg:flex gap-10 text-lg hidden lg:block cursor-pointer lg:ml-30">
          <li>Home</li>
          <li>Trending</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-4">
          <input
            onChange={(e) => setInput(e.target.value)}
            className="bg-white text-black outline-none border rounded-lg w-40 pl-2 lg:w-60"
            type="text"
            placeholder="Search here"
          />
        </div>
      </nav>

      <div className="no-scrollbar flex gap-3 lg:gap-5 items-center justify-center mt-5 overflow-auto pl-10 lg:pl-1 border-b pb-3">
        {category.map((elem, index) => (
          <button
            key={index}
            onClick={(e) => {
              setInput(e.target.innerText);
              setActiveCategory(index);
            }}
            className={`px-3 lg:px-4 py-2 text-black border border-red rounded-full lg:hover:bg-red-300 
            ${activeCategory === index ? "bg-red-500 text-white" : ""}`}
          >
            {elem}
          </button>
        ))}
      </div>


      <div>
        <h1 className="text-xl font-bold text-center underline mt-2">
          {input === "india" || input === "All" ? "All latest news" : `All latest news related to ${input}`}
        </h1>
      </div>

      <div className={`${data.length === 0 ? "text-center mt-10 font-bold" : "flex flex-wrap px-10 gap-15 mt-10"}`}>
        {data.length === 0 ? "Please wait loading latest news..." : data.map((elem, index) => (
          <Card key={index} id={index} values={data} />
        ))}
      </div>
    </div>
  );
}

export default Newsapp;
