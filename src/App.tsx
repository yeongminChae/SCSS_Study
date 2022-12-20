import "./App.css";
import image1 from "./image/grape2.jpeg";
import image2 from "./image/wine.jpeg";

export default function App() {
  return (
    <div>
      <div className="bg-black w-screen h-screen">
        <div className="flex justify-center items-center w-full h-full">
          <div className="h-[64.4%] w-full p-1.5 bg-yellow-300 ">
            <div className=" border-2 border-orange-500 w-full h-full ">
              <div className="bg-white w-full h-[1rem]"></div>
              <div className="flex w-full h-[25.1rem] border-orange-500 " >
                <div className="w-5 h-full border-y-2 border-orange-500 grid grid-rows-3">
                  <div className="bg-orange-500 h-[14.15rem] "></div>
                  <div className="bg-white h-[8.7rem] mt-[5.85rem] border-t-2 border-orange-500">
                  </div>
                  <div className="bg-white mt-[6.3rem] border-t-2 border-orange-500 flex flex-col items-center justify-around ">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="12" height="12"
  stroke="orange" stroke-width="2" fill="#ea580c"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="12" height="12"  stroke="orange" stroke-width="2" fill="#f97316"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                  </div>
                </div>
                <div className="w-full border-2 border-orange-500">
                <div className="absolute z-10 flex flex-col justify-center items-center left-[12.5rem] top-[18rem]">
                  <span className="text-center text-white font-semibold text-4xl">
                    Form 
                  </span>
                  <span className="text-center text-white font-bold text-5xl h-20 w-[20rem] leading-2 flex justify-center items-center bg-pink-900 border border-2 border-pink-700 shadow-lg">
                    <span>
                    GRAPE
                    WINE
                    </span>
                  </span>
                </div>
                <div className="grid grid-cols-2">
                <div className="bg-orange-200 relative">
                  <img src={image1} className="w-full h-[24.85rem] object-cover" />
                </div>
                <div className="bg-orange-300 relative">
                  <img src={image2} className="w-full h-[24.85rem] object-cover" />
                </div>
                </div>
              </div>
                <div className="w-5 h-full border-y-2 border-orange-500 grid grid-rows-2">
                  <div className="text-white flex flex-col items-center justify-around bg-green-500 overflow-hidden">
                    <span>
                    ⭐️
                    </span>
                    <span className="flex justify-center items-center text-[0.5px] leading-[0.65rem] font-semibold italic text-center">
                      O<br/>
                      R<br/>
                      D<br/>
                      E<br/>
                      R<br/>
                      <br/>T<br/>
                      ㅡ<br/>
                      A
                    </span>
                    <span>
                    ⭐️
                    </span>
                  </div>
                  <div className="text-white flex flex-col items-center justify-around bg-green-500 overflow-hidden border-t-2 border-orange-500">
                    <span>
                    ⚡️
                    </span>
                    <span className="flex justify-center items-center text-[0.5px] leading-[0.65rem] font-semibold text-center italic	">
                      R<br/>
                      E<br/>
                      S<br/>
                      E<br/>
                      R<br/>
                      V<br/>
                      A<br/>
                      T<br/>
                      I<br/>
                      O<br/>
                      N
                    </span>
                    <span>
                    ⚡️
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white w-full h-[1rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
