import "./App.css";
import { useState } from "react";

export function cls(...classname: string[]) {
  return classname.join(" ");
}

export default function App() {
  const [isHover1, setIsHover1] = useState(false)
  const [isHover2, setIsHover2] = useState(false)
  const [isHover3, setIsHover3] = useState(false)
  const [isHover4, setIsHover4] = useState(false)
  const [isHover5, setIsHover5] = useState(false)
  const [isHover6, setIsHover6] = useState(false)
  const [isClick1, setIsClick1] = useState(true)
  const [isClick2, setIsClick2] = useState(false)
  const [isClick3, setIsClick3] = useState(false)
  const click1Func = () => {
    setIsClick1(prev => !prev)
    setIsClick2(false)
    setIsClick3(false)
  }
  const click2Func = () => {
    setIsClick2(prev => !prev)
    setIsClick1(false)
    setIsClick3(false)
  }
  const click3Func = () => {
    setIsClick3(prev => !prev)
    setIsClick2(false)
    setIsClick1(false)
  }
  return (
    <div className="w-full h-screen">
      <div className="mx-3 h-full flex overflow-y-hidden" >
        <div className="w-[60.2%] cursor-pointer h-full bg-[#FF7400] grid grid-rows-6 p-3 ">
          <div onMouseEnter={() => setIsHover1(true)} onMouseLeave={() => setIsHover1(false)} className={cls("flex border border-[#FF0300] ", isHover1 === false ? "border-[#FF0300]" : "border-b-2 border-white")}>
            <div className={cls("w-12 h-full border-r-2 border-t border-l border-[#FF0300]", isHover1 === false ? "border-[#FF0300]" : " border-white")}>
              <span className={cls("text-[#FF0300] flex items-center justify-center w-full h-full [writing-mode:vertical-rl] font-semibold rotate-180 text-center ")} >E-Commerce</span>
            </div>
            <span className={cls("w-full h-full border-r-2 border-t border-[#FF0300] pl-3 flex items-center text-8xl tracking-tighter text-[#FF0300] ", isHover1 === false ? "border-[#FF0300]" : "border-white")}>UNIF</span>
            <div className="w-[16rem] h-full grid grid-rows-2 ">
              <div className={cls("border-t border-r border-[#FF0300] flex items-center text-center justify-center text-xs text-[#FF0300] font-bold ", isHover1 === false ? "border-[#FF0300]" : "border-white")}>Design & Development</div>
              <div className={cls("border-t-2 border-r border-[#FF0300] flex items-center justify-center", isHover1 === false ? "border-[#FF0300]" : "border-white")}><button className="bg-[#FF0300] w-[93%] h-8 rounded-full text-[#FF7400] text-xs ">2014 -> Present </button> </div>
            </div>
          </div>

          <div onMouseEnter={() => setIsHover2(true)} onMouseLeave={() => setIsHover2(false)} className={cls("flex border-x border-[#FF0300] ", isHover2 === false ? "border-[#FF0300]" : "border-y-2 border-white")}>
            <div className={cls("w-12 h-full border-r-2 border-t border-l border-[#FF0300] ", isHover2 === false ? "border-[#FF0300]" : "border-white")}>
              <span className="text-[#FF0300] flex items-center justify-center w-full h-full [writing-mode:vertical-rl] font-semibold rotate-180 text-center " >Event</span>
            </div>
            <span className={cls("w-full h-full border-r-2 border-t border-[#FF0300] pl-2 pr-3 flex items-center text-8xl tracking-tighter text-[#FF0300] ", isHover2 === false ? "border-[#FF0300]" : "border-white")}>Venuve Clicquot</span>
            <div className="w-[16rem] h-full grid grid-rows-2">
              <div className={cls("border-t border-r border-[#FF0300] flex items-center text-center justify-center text-xs text-[#FF0300] font-bold ", isHover2 === false ? "border-[#FF0300]" : "border-white")}>Website, Initiative Identities</div>
              <div className={cls("border-t-2 border-r border-[#FF0300] flex items-center justify-center", isHover2 === false ? "border-[#FF0300]" : "border-white")}><button className="bg-[#FF0300] w-[93%] h-8 rounded-full text-[#FF7400] text-xs ">2015 -> Present </button> </div>
            </div>
          </div>

          <div onMouseEnter={() => setIsHover3(true)} onMouseLeave={() => setIsHover3(false)} className={cls("flex border-x border-t border-[#FF0300] ", isHover3 === false ? "border-[#FF0300]" : "border-y-2 border-white")}>
            <div className={cls("w-12 h-full border-r-2 border-t border-l border-[#FF0300] ", isHover3 === false ? "border-[#FF0300]" : "border-white")}>
              <span className={cls("text-[#FF0300] flex items-center justify-center w-full h-full [writing-mode:vertical-rl] font-semibold rotate-180 text-center ", isHover3 === false ? "border-[#FF0300]" : "border-white")} >Artist</span>
            </div>
            <span className={cls("w-full h-full border-r-2 border-t border-[#FF0300] pl-3 flex items-center text-8xl tracking-tighter text-[#FF0300] ", isHover3 === false ? "border-[#FF0300]" : "border-white")}>HAIM</span>
            <div className="w-[16rem] h-full grid grid-rows-2">
              <div className={cls("border-t border-r border-[#FF0300] flex items-center text-center justify-center text-xs text-[#FF0300] font-bold ", isHover3 === false ? "border-[#FF0300]" : "border-white")}>Visual Identity, Digital Strategy, <br /> Design & Development </div>
              <div className={cls("border-t-2 border-r border-[#FF0300] flex items-center justify-center", isHover3 === false ? "border-[#FF0300]" : "border-white")}><button className="bg-[#FF0300] w-[93%] h-8 rounded-full text-[#FF7400] text-xs ">2014 -> Forever </button> </div>
            </div>
          </div>

          <div onMouseEnter={() => setIsHover4(true)} onMouseLeave={() => setIsHover4(false)} className={cls("flex border-x border-t border-[#FF0300] ", isHover4 === false ? "border-[#FF0300]" : "border-y-2 border-white")}>
            <div className={cls("w-12 h-full border-r-2 border-t border-l border-[#FF0300] ",isHover4 === false ? "border-[#FF0300]" : "border-white")}>
              <span className={cls("text-[#FF0300] flex items-center justify-center w-full h-full [writing-mode:vertical-rl] font-semibold rotate-180 text-center ", isHover4 === false ? "border-[#FF0300]" : "border-white")} >Institutional</span>
            </div>
            <span className={cls("w-full h-full border-r-2 border-t border-[#FF0300] pl-3 flex items-center text-8xl tracking-tighter text-[#FF0300] ", isHover4 === false ? "border-[#FF0300]" : "border-white")}>MOCA</span>
            <div className="w-[16rem] h-full grid grid-rows-2">
              <div className={cls("border-t border-r border-[#FF0300] flex items-center text-center justify-center text-xs text-[#FF0300] font-bold ", isHover4 === false ? "border-[#FF0300]" : "border-white")}>Streaming Platform</div>
              <div className={cls("border-t-2 border-r border-[#FF0300] flex items-center justify-center", isHover4 === false ? "border-[#FF0300]" : "border-white")}><button className="bg-[#FF0300] w-[93%] h-8 rounded-full text-[#FF7400] text-xs ">2016</button> </div>
            </div>
          </div>

          <div onMouseEnter={() => setIsHover5(true)} onMouseLeave={() => setIsHover5(false)} className={cls("flex border-x border-t border-[#FF0300] ",isHover5 === false ? "border-[#FF0300]" : "border-b-2 border-white")}>
            <div className={cls("w-12 h-full border-r-2 border-t border-l border-[#FF0300] ",isHover5 === false ? "border-[#FF0300]" : "border-white")}>
              <span className="text-[#FF0300] flex items-center justify-center w-full h-full [writing-mode:vertical-rl] font-semibold rotate-180 text-center " >Studio Project</span>
            </div>
            <span className={cls("w-full h-full border-r-2 border-t border-[#FF0300] pl-3 flex items-center text-8xl tracking-tighter text-[#FF0300] ",isHover5 === false ? "border-[#FF0300]" : "border-white")}>Public Access</span>
            <div className="w-[16rem] h-full grid grid-rows-2">
              <div className={cls("border-t border-r border-[#FF0300] flex items-center text-center justify-center text-xs text-[#FF0300] font-bold ",isHover5 === false ? "border-[#FF0300]" : "border-white")}>Website, Streaming Platform, Programming</div>
              <div className={cls("border-t-2 border-r border-[#FF0300] flex items-center justify-center",isHover5 === false ? "border-[#FF0300]" : "border-white")}><button className="bg-[#FF0300] w-[93%] h-8 rounded-full text-[#FF7400] text-xs ">2015 -> Forever </button> </div>
            </div>
          </div>

          <div onMouseEnter={() => setIsHover6(true)} onMouseLeave={() => setIsHover6(false)} className={cls("flex border-x border-t border-b-2 border-[#FF0300] ",isHover6 === false ? "border-[#FF0300]" : "border-white")}>
            <div className={cls("w-12 h-full border-r-2 border-t border-l border-[#FF0300] ",isHover6 === false ? "border-[#FF0300]" : "border-white")}>
              <span className="text-[#FF0300] flex items-center justify-center w-full h-full [writing-mode:vertical-rl] font-semibold rotate-180 text-center " >Musician</span>
            </div>
            <span className={cls("w-full h-full border-r-2 border-t border-[#FF0300] pl-3 flex items-center text-8xl tracking-tighter text-[#FF0300] ",isHover6 === false ? "border-[#FF0300]" : "border-white")}>Kelela</span>
            <div className="w-[16rem] h-full grid grid-rows-2">
              <div className={cls("border-t border-r border-[#FF0300] flex items-center text-center justify-center text-xs text-[#FF0300] font-bold ",isHover6 === false ? "border-[#FF0300]" : "border-white")}>Interactive Microsite</div>
              <div className={cls("border-t-2 border-r border-[#FF0300] flex items-center justify-center",isHover6 === false ? "border-[#FF0300]" : "border-white")}><button className="bg-[#FF0300] w-[93%] h-8 rounded-full text-[#FF7400] text-xs ">2015 </button> </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-12 h-full grid ">
          <div className="h-[21.25rem] bg-[#FF00FF] ">
            <span className="[writing-mode:vertical-rl] mt-3 -ml-0.5 w-full h-full text-2xl font-semibold flex items-center justify-start text-center">Special - Offer, Inc.</span>
          </div>
          <div className="-mt-3 flex justify-center items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={0.5} stroke="white" className="w-full h-full bg-gradient-to-b from-[#FF00FF] to-[#1900FF] ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
            </svg>
          </div>
          <div className="h-[21.25rem] bg-[#1900FF] ">
            <span className="[writing-mode:vertical-rl] mb-3 -ml-0.5 w-full h-full text-2xl font-semibold flex items-center justify-start text-center rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" className="mt-7 mb-1 rotate-90 w-5 h-5" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM255.1 176C255.1 176 255.1 176 255.1 176c21.06 0 40.92 8.312 55.83 23.38c9.375 9.344 24.53 9.5 33.97 .1562c9.406-9.344 9.469-24.53 .1562-33.97c-24-24.22-55.95-37.56-89.95-37.56c0 0 .0313 0 0 0c-33.97 0-65.95 13.34-89.95 37.56c-49.44 49.88-49.44 131 0 180.9c24 24.22 55.98 37.56 89.95 37.56c.0313 0 0 0 0 0c34 0 65.95-13.34 89.95-37.56c9.312-9.438 9.25-24.62-.1562-33.97c-9.438-9.312-24.59-9.219-33.97 .1562c-14.91 15.06-34.77 23.38-55.83 23.38c0 0 .0313 0 0 0c-21.09 0-40.95-8.312-55.89-23.38c-30.94-31.22-30.94-82.03 0-113.3C214.2 184.3 234 176 255.1 176z" /></svg>
            2014 -> Forever</span>
          </div>
        </div>
        <div className="h-full w-[36.5%] bg-[#FF0300] ">
          <div className="flex justify-around items-center text-center text-2xl my-3">
            <span onClick={click1Func} className="cursor-pointer"><button className={cls("w-5 h-5 mr-1 rounded-full border-2 border-black " , isClick1 === true ? "bg-black" : "bg-transparent" )} />Information</span>
            <span onClick={click2Func} className="cursor-pointer"><button className={cls("w-5 h-5 mr-1 rounded-full border-2 border-black ", isClick2 === true ? "bg-black" : "bg-transparent" )}/>Team</span>
            <span onClick={click3Func} className="cursor-pointer"><button className={cls("w-5 h-5 mr-1 rounded-full border-2 border-black ", isClick3 === true ? "bg-black" : "bg-transparent" )}/>Press</span>
          </div>
          <div className="w-full h-[95%] grid grid-cols-2 grid-rows-6 ">
            <div className="flex flex-col border-t-2 border-black ml-4 ">
              <span className="text-xl font-semibold mt-2" >Art News</span>
              <span className="text-xs font-bold tracking-tight	leading-2
">
                Perfoma Launches Online Platform for Streaming New and Archived Works
              </span>
            </div>
            <div className="flex flex-col border-t-2 border-black ml-4 ">
              <span className="text-xl font-semibold mt-2" > The Guardian</span>
              <span className="text-xs font-bold tracking-tight	leading-2
">
                Masked balsand A26 Version_Cure Maps is a guide to'
                history
              </span>
            </div>
            <div className="flex flex-col border-t-2 border-black ml-4 ">
              <span className="text-xl font-semibold mt-2" > Frieze</span>
              <span className="text-xs font-bold tracking-tight	leading-2
">
                Distributed DISsent - How dis.art blurs
                the lines between education,
                entertainment and commerce

              </span>
            </div>
            <div className="flex flex-col border-t-2 border-black ml-4 ">
              <span className="text-xl font-semibold mt-2" > It's Nice That </span>
              <span className="text-xs font-bold tracking-tight	leading-2
">
                Dis.art turns "leaming into a Netflix-like
                experience"
              </span>
            </div>
            <div className="flex flex-col border-t-2 border-black ml-4 ">
              <span className="text-xl font-semibold mt-2" >   WWD</span>
              <span className="text-xs font-bold tracking-tight	leading-2
">
                Art Collective Dis Releases Progressive
                Video Platform
              </span>
            </div>
            <div className="flex flex-col border-t-2 border-black ml-4 ">
              <span className="text-xl font-semibold mt-2" >Art Net</span>
              <span className="text-xs font-bold tracking-tight	leading-2
">
                DIS Magazine, New Yors's Hippest Art Media Oulet, is Launching a "PBS for gen Z"
              </span>
            </div>
            <div className="flex flex-col border-t-2 border-black ml-4 ">
              <span className="text-xl font-semibold mt-2" > The New Yorker</span>
              <span className="text-xs font-bold tracking-tight	leading-2
">
                How to be a Successful Black Woman
              </span>
            </div>
            <div className="flex flex-col border-t-2 border-black ml-4 ">
              <span className="text-xl font-semibold mt-2" > Village Voice</span>
              <span className="text-xs font-bold tracking-tight	leading-2
">
                Martine Syms's Interactive MoMA Installation Explores The Tvrannv of
                Screens
              </span>
            </div>
            <div className="flex flex-col border-t-2 border-black ml-4 ">
              <span className="text-xl font-semibold mt-2" > Kaleidoscope Magazine</span>
              <span className="text-xs font-bold tracking-tight	leading-2
">
                Martine Syms & Carhartt WIP
              </span>
            </div>
            <div className="flex flex-col border-t-2 border-black ml-4 ">
              <span className="text-xl font-semibold mt-2" > Dazed Magazine</span>
              <span className="text-xs font-bold tracking-tight	leading-2
">
                Dazed Summer 2017
              </span>
            </div>
            <div className="flex flex-col border-t-2 border-black ml-4 ">
              <span className="text-xl font-semibold mt-2" >Art Forum</span>
              <span className="text-xs font-bold tracking-tight	leading-2
">
                Martinionarindingusses her Projects Exhibition at MoMA
              </span>
            </div>
            <div className="flex flex-col border-t-2 border-black ml-4 ">
              <span className="text-xl font-semibold mt-2" >   Culture Type</span>
              <span className="text-xs font-bold tracking-tight	leading-2
">

                Public Access
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
