import "./App.css";
import image1 from "./image/grape2.jpeg";
import image2 from "./image/wine.jpeg";

export default function App() {
  return (
    <div>
      <div className="bg-black w-screen h-screen">
        <div className="flex justify-center items-center w-full h-full">
          <div className="h-[64.4%] w-full p-1.5 bg-yellow-300 " >
            <div className="border border-2 border-orange-500 w-full h-full p-4">
              <div className="w-full h-full border border-2 border-orange-500">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
