import React, { useEffect, useState } from "react";
import NavBar from "./Components/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Card from "react-bootstrap/Card";

export default function App() {
  const APIKEY = "47197584-69e542ae256d7d78ce1f21b38";

  const [wallpaper, setWallpaper] = useState([]);
  const [search, setSearch] = useState("");
  const [imageType, setImageType] = useState("all");

  useEffect(() => {
    fetchWallpaperImages();
  }, []);

  // useEffect(() => {
  //   fetchWallpaperImagesWithSearch(search);
  // }, [search]);

  const fetchWallpaperImages = async () => {
    const res = await axios.get(
      `https://pixabay.com/api/?key=${APIKEY}&per_page=100&image_type=${imageType}`
    );

    const data = res.data;

    setWallpaper(data.hits);
  };

  const fetchWallpaperImagesWithSearch = async (q) => {
    const API = `https://pixabay.com/api/?key=${APIKEY}&q=${q}&image_type=all&orientation=all&per_page=100&image_type=${imageType}`;

    const res = await axios.get(API);

    const data = res.data;

    setWallpaper(data.hits);
  };

  return (
    <>
      <NavBar />

      <h3 className="mt-5">
        Stunning royalty-free images & royalty-free stock
      </h3>

      <div className="d-flex justify-content-center">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Search here...."
            onChange={(event) => setSearch(event.target.value)}
          />

          <Button onClick={() => fetchWallpaperImagesWithSearch(search)}>
            Search
          </Button>
        </Form.Group>
      </div>

      <div className="d-flex justify-content-center">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <select onChange={(event) => setImageType(event.target.value)}>
              <option value="">Select</option>
              <option value="all">All</option>
              <option value="photo">Photo</option>
              <option value="illustration">Illustration</option>
              <option value="vector">Vector</option>
            </select>
          </Form.Group>
        </Form>
      </div>

      <h6>
        {search} Items {imageType}
      </h6>

      <div className="container">
        <div className="row">
          {wallpaper.map((image, index) => {
            return (
              <div className="col-md-4">
                <Card style={{ width: "18rem", margin: "10px" }}>
                  <Card.Img variant="top" src={image.webformatURL} />
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}