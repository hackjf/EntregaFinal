import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <div className="fixed top-0 flex justify-between w-screen p-10 items-center bg-white z-40">
        <div>
          <span className="bg-yellow-400 p-2 font-bold rounded-lg text-3xl px-5 shadow-lg">
            IMDb
          </span>
        </div>

        <div className="pr-10">
          <ul className="flex gap-10 font-bold text-lg cursor-pointer">
            <Link to="?movies" className="hover:bg-gray-100 p-3 rounded-md">
              Movies
            </Link>
            <Link to="?tvShows" className="hover:bg-gray-100 p-3 rounded-md">
              TV Shows
            </Link>
            <Link to="?cinema" className="hover:bg-gray-100 p-3 rounded-md">
              In Cinema
            </Link>
          </ul>
        </div>
      </div>

      <div className="w-1/4 h-screen pt-40 p-5">
        <div className="bg-black text-white p-5 pt-10 rounded-xl shadow-xl fixed w-1/3 2xl:w-1/5">
          <h1 className="text-4xl font-semibold">
            What do you want to watch today?
          </h1>

          <ul className="mt-10 text-lg grid gap-6 px-3 pb-10">
            <Link
              to="?popular"
              className="flex items-center gap-4 border-b pb-2 cursor-pointer duration-200 hover:bg-[#ffffff16] border-[#b4b4b4]"
            >
              <i class="far fa-heart"></i> Popular Movies
            </Link>

            <Link
              to="?top"
              className="flex items-center gap-4 border-b pb-2 cursor-pointer duration-200 hover:bg-[#ffffff16] border-[#b4b4b4]"
            >
              <i class="fas fa-fire-alt"></i> Top Movies
            </Link>

            <Link
              to="?best"
              className="flex items-center gap-4 border-b pb-2 cursor-pointer duration-200 hover:bg-[#ffffff16] border-[#b4b4b4]"
            >
              <i class="far fa-thumbs-up"></i> Best Rated Series
            </Link>

            <Link
              to="?cinema"
              className="flex items-center gap-4 border-b pb-2 cursor-pointer duration-200 hover:bg-[#ffffff16] border-[#b4b4b4]"
            >
              <i class="fas fa-film"></i> In Cinema Now
            </Link>
          </ul>
        </div>
      </div>

      <div className="pt-40 pl-36 2xl:pl-0 w-[70%] pb-10">
        <Outlet />
        <div className="bg-black absolute h-[250px] w-[100%] left-0 p-10 flex justify-between">
          <div>
            <span className="bg-yellow-400 p-2 font-bold rounded-lg text-3xl px-5 shadow-lg">
              IMDb
            </span>
          </div>

          <div className="flex items-start gap-3 pr-16">
            <label className="text-white font-semibold">Contact me</label>
            <input
              placeholder="Enter your email"
              className=" rounded-full p-1 outline-none pl-2"
            />
            <button className="absolute hover:bg-yellow-500 duration-500 hover:text-gray-700 font-semibold right-12 bg-yellow-400 p-1 rounded-full px-4">
              Submit
            </button>

            <div className="absolute top-24 right-36">
              <ul className="text-white">
                <li className="flex items-center gap-3">
                  <i class="fas fa-at"></i>
                  <p>correo@correo.com</p>
                </li>
                <li className="flex items-center gap-3 mt-2">
                  <i class="fas fa-phone"></i>
                  <p>+57 321 0288 32</p>
                </li>
                <li className="flex items-center gap-3 mt-2">
                  <i class="fas fa-map-marked-alt"></i>
                  <p>Colombia, Bogota</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bottom-3 absolute text-white">
            <i class="fas fa-copyright text-yellow-400"></i> 2023. All rights
            reserverd
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
