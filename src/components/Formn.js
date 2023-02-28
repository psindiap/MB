import React from "react";
// import bgImg from '../assets/img1.jpg';
import bgImg from "../assets/MBC3.jpg";
import mbImg from "../assets/mb1.png";

import { useForm } from "react-hook-form";

import {
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Formn() {
  const [start, setStart] = React.useState(30);
  const [end, setEnd] = React.useState(100);

  const [start2, setStart2] = React.useState(30);
  const [end2, setEnd2] = React.useState(100);

  const [start3, setStart3] = React.useState(30);
  const [end3, setEnd3] = React.useState(100);

  const [start4, setStart4] = React.useState(30);
  const [end4, setEnd4] = React.useState(100);

  return (
    <div className="flex w-full  justify-center items-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center register md:h-screen80 overflow-auto md:overflow-hidden ">
        <div className="flex flex-col w-full md:w-1/2 p-12 px-20">
          <h2 className="font-semibold text-xl mt-8">Generate design:</h2>
          <span>Set desired Parameters-</span>

          <div className="w-full mx-auto mt-12">
            <div>Number of generated designs </div>
              <div className="w-1/2 mx-auto">
              <input
                type="text"
                id="disabled-input"
                aria-label="disabled input"
                class="mb-6 text-center bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value="6"
                disabled
              ></input>
              </div>
            </div>
          
            <div>Number of Clusters {"(k)"}</div>
            <div className="w-1/2 mx-auto">
              <input
                type="text"
                id="disabled-input"
                aria-label="disabled input"
                class="mb-6 text-center bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value="6"
                disabled
              ></input>
            </div>

          

          <button class="my-8 mx-auto w-fit block bg-blue-500 hover:bg-blue-400 text-white font-bold mt-8 py-2 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded ">
            <NavLink to="/form3">Proceed</NavLink>
          </button>
        </div>
        <div className="flex h-screen40 mx-auto md:w-inital md:h-full">
          <img className="img" src={bgImg} alt="" />
        </div>
      </div>
    </div>
  );
}
