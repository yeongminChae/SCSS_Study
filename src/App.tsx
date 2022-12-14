import "./App.css";

export default function App() {
  return (
    <div className="flex flex-col ">
      <div className="flex w-[97.5vw] -ml-[57.8%] mt-5 justify-center h-[13vh] items-end bg-black">
        <h1 className="font-bold text-xl ml-3 h-14 w-1/3 mb-2 text-[#DDE1D4] ">
          upcoming <br/> all ages hardcore
        </h1>
        <h1 className="font-bold text-xl h-14 w-1/3 mb-2 -ml-36 text-[#DDE1D4] ">
          at the eagles <br/> lodge schenectady, new york
        </h1>
        <h1 className="font-bold text-xl h-14 w-1/3 mb-2 ml-44 text-[#DDE1D4] ">
          hope to see you there <br/> wednesday, june 27 1990
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5 w-[97.5vw] -ml-[57.8%]">
        <div className="bg-[#ff6347] h-[120vh] col-span-2 flex justify-start items-end">
          <span className="text-[400px] font-bold -mb-32" >bad</span>
        </div>
        <div className="bg-[#ff6347] h-[120vh] "></div>
        <div className="bg-[#ff6347] h-[100vh] w-[100vw] mb-4 flex flex-col ">
          <span className="text-[400px] ml-2 font-bold -mt-32" >religion</span>
          <span className="text-[#DDE1D4] ml-8 text-7xl font-bold -mb-32" >with <br/> jawbreaker & glee club</span>
        </div>
      </div>
    </div >
  );
}
