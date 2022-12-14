import "./App.css";

export default function App() {
  return (
    <div className="flex flex-col ">
      <div className="flex xl:w-[97.5vw] xl:-ml-[57.8%] mt-5 justify-center  h-[20vh] xl:h-[20vh] items-end bg-black">
        <h1 className="font-bold xl:text-xl ml-3 h-14 w-[30%] mb-2 text-[#DDE1D4] ">
          upcoming <br/> all ages hardcore
        </h1>
        <h1 className="font-bold xl:text-xl h-14 w-[37.5%] mb-2 -ml-10 xl:-ml-36 text-[#DDE1D4] ">
          at the eagles <br/> lodge schenectady, new york
        </h1>
        <h1 className="font-bold xl:text-xl h-14 w-1/3 mb-2 ml-12 xl:ml-24 text-[#DDE1D4] ">
          hope to see you there <br/> wednesday, june 27 1990
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5 xl:w-[97.5vw] xl:-ml-[57.8%]">
        <div className="bg-[#ff6347] h-[70vh] xl:h-[120vh] col-span-2 flex justify-start items-end">
          <span className="xl:text-[400px] text-[200px] font-bold -mb-16 xl:-mb-32" >bad</span>
        </div>
        <div className="bg-[#ff6347] xl:h-[120vh] "></div>
        <div className="bg-[#ff6347] h-[55vh] w-[92vw] xl:h-[100vh] xl:w-[100vw] mb-4 flex flex-col ">
          <span className="xl:text-[400px] text-[185px] ml-3 xl:ml-2 font-bold -mt-14 xl:-mt-32" >religion</span>
          <span className="text-[#DDE1D4] ml-8 xl:text-7xl text-3xl font-bold -mt-5 xl:-mb-32" >with <br/> jawbreaker & glee club</span>
        </div>
      </div>
    </div >
  );
}
