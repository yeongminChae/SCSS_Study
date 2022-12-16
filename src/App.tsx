import "./App.css";
import photo1 from "./image/photo1.png"
import photo2 from "./image/photo2.png"
import photo3 from "./image/photo3.png"
import photo4 from "./image/photo4.png"

export default function App() {
  return (
    <div className="flex flex-col min-w-full max-w-full mt-20 flex justify-center items-center">
      <span className="font-semibold text-4xl">
        Foreword, Contributors
      </span>
      <div className="grid grid-cols-3 md:grid-cols-6 w-[95%] sm:w-[85%] md:w-[93vw] lg:w-[90vw] xl:w-[85vw] h-full mt-5 ">
        <div className="w-full h-56 flex flex-col items-center bg-[#C7BCA1] " >
          <span className="text-sm mt-3 w-[80%] text-center ">
            Tools for Slowing Down
          </span>
          <span className="text-xs text-center relative -bottom-32">
            Chloe Geogheaan & Chloe Reith
          </span>
        </div>
        <div className="w-full h-56 flex flex-col bg-[#] " >
          <img src={photo1} className="h-56" />
        </div>
        <div className="w-full h-56 flex flex-col items-center bg-[#FF6D28] " >
          <span className="text-sm mt-3 w-[80%] text-center ">
            The (Old) New Spirit of Curating and Mvths of Nomadism
          </span>
          <span className="text-xs text-center relative -bottom-24">
            Tim Gentles
          </span></div>
        <div className="w-full h-56 flex flex-col bg-[#] " >
           <img src={photo2} />
        </div>
        <div className="w-full h-56 flex flex-col items-center bg-[#6B728E] " >
          <span className="text-sm mt-3 w-[80%] text-center ">
            Pressing Singularities
          </span>
          <span className="text-xs text-center relative -bottom-32">
            Tendai John Mutambu AKobvn Maree Pickens
          </span></div>
        <div className="w-full h-56 flex flex-col items-center bg-[#B3FFAE] " >
          <span className="text-sm mt-3 w-[80%] text-center ">
            We're in This Together
          </span>
          <span className="text-xs text-center relative -bottom-36">
            Vera Mey
          </span></div>
        <div className="w-full h-56 flex flex-col items-center bg-[#A62349] " >
          <span className="text-sm mt-3 w-[80%] text-center ">
            The Curatorial as a Liveable Subject Position: Hospitality and Differential Consciousness
          </span>
          <span className="text-xs text-center relative -bottom-[3.5rem] ">
            Danny Butt
          </span></div>
        <div className="w-full h-56 flex flex-col items-center bg-[#82C3EC] " >
          <span className="text-sm mt-3 w-[80%] text-center ">
            Community, Community Art, Communitv Art in Howick
          </span>
          <span className="text-xs text-center relative -bottom-24">
            Balamohan Shingade
          </span></div>
        <div className="w-full h-56 flex flex-col bg-[#] " >
           <img src={photo3} className="h-56" />
        </div>
        <div className="w-full h-56 flex flex-col items-center bg-[#5F8D4E] " >
          <span className="text-sm mt-3 w-[80%] text-center ">
            Feeling Welcome?
          </span>
          <span className="text-xs text-center relative -bottom-36">
            Louisa Afoa & loana Gordon-Smith
          </span></div>
        <div className="w-full h-56 relative flex flex-col bg-[#] " >
           <img src={photo4} className="object-cover h-56 " />
        </div>
        <div className="w-full h-56 flex flex-col items-center bg-[#F3CCFF] " >
          <span className="text-sm mt-3 w-[80%] text-center ">
            On Friendship
          </span>
          <span className="text-xs text-center relative -bottom-40">
            Rebecca Boswell
          </span></div>
      </div>
    </div>
  );
}
