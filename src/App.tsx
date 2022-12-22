import "./App.css";
import memoji1 from "./image/memoji1.png";
import memoji2 from "./image/memoji2.png";
import memoji3 from "./image/memoji3.png";
import memoji4 from "./image/memoji4.png";
import memoji5 from "./image/memoji5.png";
import memoji6 from "./image/memoji6.png";
import memoji7 from "./image/memoji7.png";
import memoji8 from "./image/memoji8.png";
import memoji9 from "./image/memoji9.png";
import memoji10 from "./image/memoji10.png";
import memoji11 from "./image/memoji11.png";
import memoji12 from "./image/memoji12.png";

import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="w-full h-full">
      <div className="h-14 border-t-4 border-b-2 border-black w-full grid grid-cols-5 grid-rows-1">
        <div className="flex items-center justify-between text-center px-2 border-r-2 border-black">Year : All <button>⬇</button> </div>
        <div className="flex items-center justify-between text-center px-2 border-x-2 border-black">Programme: All <button>⬇</button></div>
        <div className="flex items-center justify-between text-center px-2 border-x-2 border-black">Themes : All <button>⬇</button></div>
        <div className="flex items-center justify-between text-center px-2 border-x-2 border-black">Practice : All <button>⬇</button></div>
        <div className="flex items-center justify-between text-center px-2 ">Students <button>⬇</button> </div>
      </div>
      <div className="w-full h-[50rem] grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 ">
        <div className="flex flex-col justify-around px-4 h-[14.5rem] relative border-y-2 sm:border-r-4 lg:border-r-0 border-black  ">
          <div className="flex items-center justify-between text-center ">
            <span>
            chris evans
            </span>
            <span>
            POT123
            </span>
          </div>
          <div className="flex w-full items-center justify-center bg-red-200">
                    <img src={memoji1}  className="w-48 h-40 object-cover" />
          </div>
          <div className="flex items-center justify-between text-center ">
            <span>
            2016
            </span>
            <span className="underline underline-offset-2	cursor-pointer hover:text-blue-500">
            Read More
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-around px-4 h-[14.5rem] px-4 relative border-y-2 
lg:border-x-4 border-black ">
           <div className="flex items-center justify-between text-center ">
            <span>
            chris evans
            </span>
            <span>
            POT123
            </span>
          </div>
           <div className="flex w-full items-center justify-center bg-red-200">
                    <img src={memoji2}  className="w-48 h-40 object-cover" />
          </div>
          <div className="flex items-center justify-between text-center ">
            <span>
            2016
            </span>
            <span className="underline underline-offset-2	cursor-pointer hover:text-blue-500">
            Read More
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-around px-4 h-[14.5rem] px-4 relative border-y-2 sm:border-r-4 lg:border-r-0 border-black ">
           <div className="flex items-center justify-between text-center ">
            <span>
            chris evans
            </span>
            <span>
            POT123
            </span>
          </div>
           <div className="flex w-full items-center justify-center bg-red-200">
                    <img src={memoji3}  className="w-48 h-40 object-cover" />
          </div>
          <div className="flex items-center justify-between text-center ">
            <span>
            2016
            </span>
            <span className="underline underline-offset-2	cursor-pointer hover:text-blue-500">
            Read More
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-around px-4 h-[14.5rem] px-4 relative border-y-2 border-black ">
           <div className="flex items-center justify-between text-center ">
            <span>
            chris evans
            </span>
            <span>
            POT123
            </span>
          </div>
           <div className="flex w-full items-center justify-center bg-red-200">
                    <img src={memoji4}  className="w-48 h-40 object-cover" />
          </div>
          <div className="flex items-center justify-between text-center ">
            <span>
            2016
            </span>
            <span className="underline underline-offset-2	cursor-pointer hover:text-blue-500">
            Read More
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-around px-4 h-[14.5rem] px-4 relative border-y-2 sm:border-r-4 lg:border-x-4 border-black ">
           <div className="flex items-center justify-between text-center ">
            <span>
            chris evans
            </span>
            <span>
            POT123
            </span>
          </div>
          <div className="flex w-full items-center justify-center bg-red-200">
                    <img src={memoji5}  className="w-48 h-40 object-cover" />
          </div>
          <div className="flex items-center justify-between text-center ">
            <span>
            2016
            </span>
            <span className="underline underline-offset-2	cursor-pointer hover:text-blue-500">
            Read More
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-around px-4 h-[14.5rem] px-4  relative border-y-2 border-black ">
           <div className="flex items-center justify-between text-center ">
            <span>
            chris evans
            </span>
            <span>
            POT123
            </span>
          </div>
           <div className="flex w-full items-center justify-center bg-red-200">
                    <img src={memoji6}  className="w-48 h-40 object-cover" />
          </div>
          <div className="flex items-center justify-between text-center ">
            <span>
            2016
            </span>
            <span className="underline underline-offset-2	cursor-pointer hover:text-blue-500">
            Read More
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-around px-4 h-[14.5rem] px-4 relative border-y-2 sm:border-r-4 lg:border-r-0 border-black ">
           <div className="flex items-center justify-between text-center ">
            <span>
            chris evans
            </span>
            <span>
            POT123
            </span>
          </div>
          <div className="flex w-full items-center justify-center bg-red-200">
                    <img src={memoji7}  className="w-48 h-40 object-cover" />
          </div>
          <div className="flex items-center justify-between text-center ">
            <span>
            2016
            </span>
            <span className="underline underline-offset-2	cursor-pointer hover:text-blue-500">
            Read More
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-around px-4 h-[14.5rem] px-4 relative border-y-2 lg:border-x-4 border-black ">
           <div className="flex items-center justify-between text-center ">
            <span>
            chris evans
            </span>
            <span>
            POT123
            </span>
          </div>
           <div className="flex w-full items-center justify-center bg-red-200">
                    <img src={memoji8}  className="w-48 h-40 object-cover" />
          </div>
          <div className="flex items-center justify-between text-center ">
            <span>
            2016
            </span>
            <span className="underline underline-offset-2	cursor-pointer hover:text-blue-500">
            Read More
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-around px-4 h-[14.5rem] px-4 relative border-y-2 sm:border-r-4 lg:border-r-0 border-black ">
           <div className="flex items-center justify-between text-center ">
            <span>
            chris evans
            </span>
            <span>
            POT123
            </span>
          </div>
           <div className="flex w-full items-center justify-center bg-red-200">
                    <img src={memoji9}  className="w-48 h-40 object-cover" />
          </div>
          <div className="flex items-center justify-between text-center ">
            <span>
            2016
            </span>
            <span className="underline underline-offset-2	cursor-pointer hover:text-blue-500">
            Read More
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-around px-4 h-[14.5rem] px-4 relative border-t-2 border-b-4 sm:border-b-2 lg:border-b-4 border-black ">
           <div className="flex items-center justify-between text-center ">
            <span>
            chris evans
            </span>
            <span>
            POT123
            </span>
          </div>
          <div className="flex w-full items-center justify-center bg-red-200">
                    <img src={memoji10}  className="w-48 h-40 object-cover" />
          </div>
        <div className="flex items-center justify-between text-center ">
            <span>
            2016
            </span>
            <span className="underline underline-offset-2	cursor-pointer hover:text-blue-500">
            Read More
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-around px-4 h-[14.5rem] px-4 relative border-b-2 sm:border-t-2 sm:border-b-4 sm:border-r-4 lg:border-t-2 lg:border-b-4 lg:border-x-4 border-black ">
           <div className="flex items-center justify-between text-center ">
            <span>
            chris evans
            </span>
            <span>
            POT123
            </span>
          </div>
         <div className="flex w-full items-center justify-center bg-red-200">
                    <img src={memoji11}  className="w-48 h-40 object-cover" />
          </div>
          <div className="flex items-center justify-between text-center ">
            <span>
            2016
            </span>
            <span className="underline underline-offset-2	cursor-pointer hover:text-blue-500">
            Read More
            </span>
          </div>
</div>
        <div className="flex flex-col justify-around px-4 h-[14.5rem] px-4 relative border-t-2 border-b-4 border-black ">
           <div className="flex items-center justify-between text-center ">
            <span>
            chris evans
            </span>
            <span>
            POT123
            </span>
          </div>
           <div className="flex w-full items-center justify-center bg-red-200">
                    <img src={memoji12}  className="w-48 h-40 object-cover" />
          </div>
          <div className="flex items-center justify-between text-center ">
            <span>
            2016
            </span>
            <span className="underline underline-offset-2	cursor-pointer hover:text-blue-500">
            Read More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
