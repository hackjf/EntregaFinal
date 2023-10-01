import axios from "axios";
import React, { useEffect, useState } from "react";
import InfoModal from "./InfoModal";
import { useLocation } from "react-router-dom";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [url, setUrl] = useState("https://api.themoviedb.org/3/discover/movie");

  const location = useLocation();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${url}?api_key=6a1ee9a4ace46150db32c18364719ba1&language=en-US&page=${page}`
        );

        setMovies(data.results.map((e) => e));
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [page, url]);

  useEffect(() => {
    switch (location.search) {
      case "?movies":
        setUrl("https://api.themoviedb.org/3/discover/movie");
        break;
      case "?tvShows":
        setUrl("https://api.themoviedb.org/3/tv/on_the_air");
        break;
      case "?popular":
        setUrl("https://api.themoviedb.org/3/movie/popular");
        break;
      case "?top":
        setUrl("https://api.themoviedb.org/3/movie/top_rated");
        break;
      case "?best":
        setUrl("https://api.themoviedb.org/3/tv/top_rated");
        break;
      case "?cinema":
        setUrl("https://api.themoviedb.org/3/movie/now_playing");
        break;
    }

    setPage(1);
  }, [location]);

  const addPage = () => {
    setPage(page + 1);
  };

  const lessPage = () => {
    if (page < 2) {
      return;
    }
    setPage(page - 1);
  };

  return (
    <div>
      <h1 className="font-bold text-5xl">Explore</h1>

      <div className="mt-10">
        <input
          className="bg-gray-200 p-5 w-full rounded-lg outline-none"
          placeholder="Search for your movie..."
        />
      </div>

      <div className="mt-3 flex items-center text-xl justify-center mb-4 w-full gap-3">
        <button
          className="text-yellow-400 border px-3 rounded shadow"
          onClick={lessPage}
        >
          <i class="fas fa-step-backward"></i>
        </button>

        <div className="border px-3 font-semibold rounded shadow">
          Page {page}
        </div>

        <button
          className="text-yellow-400 border px-3 rounded shadow"
          onClick={addPage}
        >
          <i class="fas fa-step-forward"></i>
        </button>
      </div>

      <div className="grid 2xl:grid-cols-4 grid-cols-2 gap-5">
        {movies.map((e, i) => (
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} />
            <div
              className="absolute top-0 w-full h-full hover:cursor-pointer"
              onMouseEnter={() => {
                document
                  .getElementById(`hover:${i}`)
                  .classList.remove("translate-y-[100%]");
              }}
              onMouseLeave={() => {
                document
                  .getElementById(`hover:${i}`)
                  .classList.add("translate-y-[100%]");
              }}
              onClick={() => {
                handleOpen();
                setData(e);
              }}
            >
              <div
                className="bg-black bg-opacity-50 rounded-xl w-full h-full flex items-center
               justify-center translate-y-[100%] duration-500"
                id={`hover:${i}`}
              >
                <h1 className="font-bold text-white">
                  <i class="fas fa-plus mr-1"></i>MAS INFO
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center text-xl justify-center mb-4 w-full gap-3">
        <button
          className="text-yellow-400 border px-3 rounded shadow"
          onClick={lessPage}
        >
          <i class="fas fa-step-backward"></i>
        </button>

        <div className="border px-3 font-semibold rounded shadow">
          Page {page}
        </div>

        <button
          className="text-yellow-400 border px-3 rounded shadow"
          onClick={addPage}
        >
          <i class="fas fa-step-forward"></i>
        </button>
      </div>

      <InfoModal isOpen={isOpen} handleOpen={handleOpen} data={data} />
    </div>
  );
};

export default Movies;
