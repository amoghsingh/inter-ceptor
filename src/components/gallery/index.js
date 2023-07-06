import React, { useEffect, useState } from "react";
import Gcontent from "./g-content";
import "./styles.css";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchGallery = async () => {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );
    response = await response.json();
    setData((prev) => [...prev, ...response]);
    setLoading(false);
  };

  const handleScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="gcard-container">
        <Gcontent gData={data} /> {loading && <div>Loading...</div>}
      </div>
    </>
  );
};

export default Gallery;
