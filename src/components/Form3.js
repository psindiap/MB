import React from "react";
// import bgImg from '../assets/img1.jpg';
import bgImg from "../assets/MB2.jpg";
import mbImg from "../assets/mb1.png";
import { useForm } from "react-hook-form";
import Row from "./row";




const images = {};
function importAll(r) {
  r.keys().forEach((key) => (images[key] = r(key)));
}
importAll(require.context('../Srcs', false, /\.(png|jpe?g|svg)$/));


function sortObj(obj) {
    // Convert object keys to array
    const keys = Object.keys(obj);
  
    // Sort the keys
    keys.sort();
  
    // Shuffle the keys
    for (let i = keys.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [keys[i], keys[j]] = [keys[j], keys[i]];
    }
  
    // Create a new object with shuffled keys
    const shuffledObj = {};
    keys.forEach((key) => {
      shuffledObj[key] = obj[key];
    });
  
    return shuffledObj;
}




export default function Form3() {
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(100);
  const [Images, setImages] = React.useState(images);

  function handleClick() {
    setImages(sortObj(Images));
  }

  
// console.log(sortObj(images));
const [isSelected, setIsSelected] = React.useState(true);

  const handleRadioClick = () => {
    setIsSelected(!isSelected);
  };
  return (

    
    <div className="flex mx-auto flex-row  w-11/12 items-center justify-center register2 h-screen90 rounded-lg">
      <div className="flex flex-col w-5/12 p-4">
        <h2 className="font-semibold text-xl">Sort</h2>
        <span className="mb-10">Priority based Sort: Ascending order-</span>

        <div class="mt-4 mb-4 flex items-center mx-auto">
          <input
            id="link-radio"
            type="radio"
            checked={isSelected}
            onClick={handleRadioClick}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"

          />
          <label
            for="link-radio"
            class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
          >Diverse Results
          </label>
        </div>

        <div className="mx-auto flex flex-col items-center justify-center md:flex-col w-9/12 mt-6">
          <div className="mx-auto w-full p-2">
            <label
              for="countries"
              class="block mb-2 text-sm font-semibold text-lg text-gray-900 dark:text-white"
            >
              Priority 1:
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a parameter</option>
              <option value="US">Deflection</option>
              <option value="CA">Weight</option>
              <option value="FR">Thickness</option>
              <option value="DE">Depth</option>
            </select>
          </div>

          <div className="mx-auto w-full p-2">
            <label
              for="countries"
              class="block mb-2 text-sm font-semibold text-lg text-gray-900 dark:text-white"
            >
              Priority 2:
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose another parameter</option>
              <option value="US">Deflection</option>
              <option value="CA">Weight</option>
              <option value="FR">Thickness</option>
              <option value="DE">Depth</option>
            </select>
          </div>
        </div>

        <button class="mx-auto w-fit block bg-blue-500 hover:bg-blue-400 text-white font-bold mt-8 py-2 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded " onClick={handleClick}>
          Sort
        </button>
      </div>

      <div className="w-6/12 mt-1 grid md:grid-cols-1 md:gap-4 overflow-auto items-center justify-center  " style={{height:"92%"}}>

        {
            Object.keys(Images).map((key, index) => {
                return (
                    // console.log(key),
                    // console.log(images[key].default),
                   <Row ind={index} def={"__"} t={"__"} l={"__"} w={"__"} img={key} />
                  
                    
                )
            })
        }

      </div>
    </div>
  );
}
