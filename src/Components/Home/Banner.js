import React from "react";
import { Link } from "react-router-dom";
import myimg from "../IMG/IMG_20213220.jpg";
const Banner = () => {
  return (
    <div>
      <div
        class="hero min-h-screen"
        style={{
          background: "WhiteSmoke",
        }}
      >
        {/* <div class="hero-overlay bg-opacity-60"></div> */}
        <div class=" container grid lg:grid-cols-2 gap-10 justify-items-center flex items-center p-6">
          <div class="col-span max-w-md text-black ">
            <h1 class="mb-5 text-5xl">Hello</h1>
            <h1 class="mb-5 text-5xl font-bold">This Hossain</h1>
            <h1 class="mb-5 text-4xl">Web Developer</h1>
            <Link to="ABOUT" className="btn text-white">
              About me
            </Link>
          </div>
          <div class="col-span max-w-md">
            <div class="avatar">
              <div class="w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-8">
                <img src={myimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
