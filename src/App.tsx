import "./App.css";
import IMG1 from "./image/IMG1.jpg"
import IMG2 from "./image/IMG2.jpg"
import IMG3 from "./image/IMG3.jpg"
import IMG4 from "./image/IMG4.jpg"
import IMG5 from "./image/IMG5.jpg"
import IMG6 from "./image/IMG6.jpg"
import IMG7 from "./image/IMG7.jpg"
import IMG8 from "./image/IMG8.jpg"
import IMG9 from "./image/IMG9.jpg"
import IMG10 from "./image/IMG10.jpg"
import IMG11 from "./image/IMG11.jpg"
import IMG12 from "./image/IMG12.jpg"
import { useState } from "react";

export function cls(...classname: string[]) {
  return classname.join(" ");
}

export default function App() {
  return (
    <div className="w-screen h-screen">
      <div className="mx-40 py-3 h-full overflow-hidden">
        <div className="w-full h-full border border-black grid grid-cols-2">
          <div className="border border-black mr-6 grid grid-cols-2">
            <div className="border border-black mr-4 flex flex-col pt-2">
              <span className="pl-3 text-black/70 text-xs mb-12">A1 OFFICE</span>
                <p className="pl-3 mt-2 w-48 text-xl font-light leading-6">
                  Complete office design, construction
and management.
                </p>
              <div className="mt-4 w-full h-44 grid grid-rows-6">
                <div className="bg-gray-200 border-t border-black"><span className="pl-3 text-black/70 text-xs mb-12">HOME</span></div>
                <div className="border-t border-black"><span className="pl-3 text-black/70 text-xs mb-12">SERVICES</span></div>
                <div className="border-t border-black"><span className="pl-3 text-black/70 text-xs mb-12">SPACES</span></div>
                <div className="border-t border-black"><span className="pl-3 text-black/70 text-xs mb-12">TEAM</span></div>
                <div className="border-t border-black"><span className="pl-3 text-black/70 text-xs mb-12">ADVICE</span></div>
                <div className="border-y border-black"><span className="pl-3 text-black/70 text-xs mb-12">CONTACT</span></div>
              </div>
              <div className="pl-3 text-black/70 text-xs mt-[4.4rem] mb-6 flex flex-col">
                <span>
                1300 726 566
                </span>
                <span>
sales@aloffice.com.au
                </span>
              </div>
              <div className="pl-3 text-black/70 text-xs mb-6 flex flex-col">
                <span className="font-bold">
                Melbourne
                </span>
                <span className="w-32">
1374 North Road
Huntingdale VIC 3166
                </span>
              </div>
               <div className="pl-3 text-black/70 text-xs mb-6 flex flex-col">
                <span className="font-bold">
                Sydney
                </span>
                <span className="w-32">
Level 32 101 Miller Street
North Sydney NSW 2060
                </span>
              </div>
              <span className="pl-3 text-black/70 text-xs mb-6">EN | KOR</span>
            </div>
            <div className="border-l border-black -ml-4 grid grid-rows-2">
              <div className="border-t border-b-2 border-l border-black -mb-52 flex flex-col pl-3 pt-2">
                <span className="text-black/70 text-xs mb-12">HOME</span>
                <p className="w-32 text-3xl font-light">
                  Think Inside the Square.
                </p>
                <p className="mt-5 text-black/70 text-xs">
                 At A1 Office, we design, construct, project manage, and maintain office spaces across a diverse range of industries.
                </p>
                <p className="mt-5 text-black/70 text-xs">
                We bring 25 years' experience in the industry to help you with every aspect of the office fit out--from design through to construction, and everything beyond.
                </p>
              </div>
              <div className="border-y border-l border-black mt-52 pl-3 pt-2">
                <span className="text-black/70 text-xs mb-12">SERVICES</span>
                <p className="mt-6 w-36 text-xl font-light leading-5">
                  Everything under one roof.
                </p>
              </div>
            </div>
          </div>
          <div className="border border-black -ml-6 grid grid-rows-2">
            <div className="border-b border-black -mb-52 grid grid-cols-2">
              <div className="border h-full w-full border-black relative">
                <img src={IMG6} className="h-full w-full" />
              </div>
              <div className="border-l border-black grid grid-rows-2">
                <div className="relative border border-black">
                <img src={IMG3} className="h-full w-full" />
                </div>
                <div className="grid grid-cols-2 grid-rows-2">
                  <div className="border-y-2 border-x relative border-black -mr-8">
                    <img src={IMG7} className="h-full w-full" />
                  </div>
                  <div className="border border-black ml-8 grid grid-rows-2">
                    <div className="border-y border-l border-black ">
                    <img src={IMG4} className="h-[3.98rem] w-full" />
                    </div>
                    <div className="border-t-2 border-b border-l border-black">
                      <img src={IMG9} className="h-[3.98rem] w-full" />
                    </div>
                  </div>
                  <div className="border-y border-l flex items-center justify-center relative border-r-2 border-black mr-8">
                    <img src={IMG11} className="h-[7rem] w-full" />
                  </div>
                  <div className="border border-black -ml-8">
                    <img src={IMG8} className="h-full w-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-52 grid grid-cols-2">
              <div className="border-l border-r-2 border-y border-black mr-24 grid grid-cols-2">
                <div className="border-r-2 border-black">
                  <img src={IMG2} className="h-full w-full" />
                </div>
                <div className="border-l border-black grid grid-rows-2">
                  <div className="border-b border-black">
                    <img src={IMG10} className="h-[3.88rem] w-full" />
                  </div>
                  <div className="border-t-2 border-black">
                  <img src={IMG1} className="h-[3.8rem] w-full" />
                  </div>
                </div>
              </div>
              <div className="z-10 border-y border-l border-r-4 border-black -ml-24 w-[25rem] relative flex items-center justify-center">
                <img src={IMG12} className="w-[70%] h-28 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
