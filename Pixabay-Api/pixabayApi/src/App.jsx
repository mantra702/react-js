import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const APIKEY = "47197584-69e542ae256d7d78ce1f21b38";
  const [wallpaper, setWallpaper] = useState([]);
  const [search, setSearch] = useState("");
  const [size, setSize] = useState("medium");
  const [orientation, setOrientation] = useState("all");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (query = "") => {
    const url = `https://pixabay.com/api/?key=${APIKEY}&q=${query}&per_page=100&image_type=photo&orientation=${orientation}`;
    const res = await axios.get(url);
    setWallpaper(res.data.hits);
  };

  const getImageBySize = (image) => {
    if (size === "small") return image.previewURL;
    if (size === "large") return image.largeImageURL;
    return image.webformatURL;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchImages(search);
  };

  return (
    <>
      <form className="control-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search images..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <select
          value={orientation}
          onChange={(e) => setOrientation(e.target.value)}
        >
          <option value="all">All</option>
          <option value="horizontal">Horizontal</option>
          <option value="vertical">Vertical</option>
        </select>

        <button type="submit">Search</button>
      </form>

      <div className="image-grid-only">
        {wallpaper.map((img, index) => (
          <div className="image-card-only" key={index}>
            <img src={getImageBySize(img)} alt={img.tags} className="image-only" />
          </div>
        ))}
      </div>
    </>
  );
}
