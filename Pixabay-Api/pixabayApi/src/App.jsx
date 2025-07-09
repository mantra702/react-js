import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const APIKEY = "47197584-69e542ae256d7d78ce1f21b38";
  const [wallpaper, setWallpaper] = useState([]);
  const [search, setSearch] = useState("");
  const [orientation, setOrientation] = useState("all");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (query = "") => {
    const url = `https://pixabay.com/api/?key=${APIKEY}&q=${query}&per_page=100&image_type=photo&orientation=${orientation}`;
    const res = await axios.get(url);
    setWallpaper(res.data.hits);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchImages(search);
  };

  const handleOrientationChange = (e) => {
    setOrientation(e.target.value);
    fetchImages(search);
  };

  return (
    <>
      <form className="gallery-controls" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search stunning images..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={orientation} onChange={handleOrientationChange}>
          <option value="all">All Orientations</option>
          <option value="horizontal">Horizontal</option>
          <option value="vertical">Vertical</option>
        </select>

        <button type="submit">Search</button>
      </form>

      <div className="gallery-container">
        <div className="masonry-gallery">
          {wallpaper.map((img, index) => (
            <div className="masonry-card" key={index}>
              <img src={img.webformatURL} alt={img.tags} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
