import "./App.css";
import image1 from "./image/grape2.jpeg";
import image2 from "./image/wine.jpeg";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div>
      <div className="bg-black w-screen h-screen">
        <div className="flex justify-center items-center w-full h-full">
          <div className="h-[64.4%] w-full p-1.5 bg-yellow-300 xl:w-[80%] xl:h-full ">
            <div className=" border-x-2 border-y-2 border-orange-500 w-full h-full ">
              <div className="bg-white w-full h-[1rem]">
                <span className="text-orange-500 text-[0.1rem] italic flex justify-center items-center font-semibold">
                  GRAPE WINE! GRAPE WINE! FLEMINGTON & NORTHCOTE! NUMBER ONE BEST QUALITY! ALOCHOLS. GRAPE WINE! GRAPE WINE!
                </span>
              </div>
              <div className="flex w-full h-[25.1rem] border-orange-500 xl:h-[35rem]" >
                <div className="w-5 h-full border-y-2 border-orange-500 grid grid-rows-3 ">
                  <div className="bg-orange-500 border-r-2 border-orange-500 w-5 h-[14.15rem] flex items-center justify-center xl:h-[23rem] xl:absolute ">
                    <span className="flex h-[12.5rem] w-full text-white justify-center items-center text-[0.05rem] leading-[0.6rem] font-semibold italic text-center">
                      L<br />
                      O<br />
                      C<br />
                      A<br />
                      T<br />
                      I<br />
                      O<br />
                      N<br />
                      S<br />
                      <br />*<br />
                      <br />M<br />
                      E<br />
                      N<br />
                      U<br />
                      <br />*<br />
                      <br />S<br />
                      H<br />
                      O<br />
                      P<br />
                    </span>
                  </div>
                  <div className="bg-white h-[8.7rem] mt-[5.85rem] border-t-2 border-r-2 border-orange-500 flex flex-col justify-center items-start xl:mt-0 xl:h-[15rem] xl:bottom-[4rem]  xl:absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="12" height="12"
                      stroke="orange" stroke-width="2" fill="#ea580c"
                      className="w-5 flex justify-center mt-1"><path d="M352 124.5l-51.9-13c-6.5-1.6-11.3-7.1-12-13.8s2.8-13.1 8.7-16.1l40.8-20.4L294.4 28.8c-5.5-4.1-7.8-11.3-5.6-17.9S297.1 0 304 0H416h32 16c30.2 0 58.7 14.2 76.8 38.4l57.6 76.8c6.2 8.3 9.6 18.4 9.6 28.8c0 26.5-21.5 48-48 48H538.5c-17 0-33.3-6.7-45.3-18.7L480 160H448v21.5c0 24.8 12.8 47.9 33.8 61.1l106.6 66.6c32.1 20.1 51.6 55.2 51.6 93.1C640 462.9 590.9 512 530.2 512H496 432 32.3c-3.3 0-6.6-.4-9.6-1.4C13.5 507.8 6 501 2.4 492.1C1 488.7 .2 485.2 0 481.4c-.2-3.7 .3-7.3 1.3-10.7c2.8-9.2 9.6-16.7 18.6-20.4c3-1.2 6.2-2 9.5-2.2L433.3 412c8.3-.7 14.7-7.7 14.7-16.1c0-4.3-1.7-8.4-4.7-11.4l-44.4-44.4c-30-30-46.9-70.7-46.9-113.1V181.5v-57zM512 72.3c0-.1 0-.2 0-.3s0-.2 0-.3v.6zm-1.3 7.4L464.3 68.1c-.2 1.3-.3 2.6-.3 3.9c0 13.3 10.7 24 24 24c10.6 0 19.5-6.8 22.7-16.3zM130.9 116.5c16.3-14.5 40.4-16.2 58.5-4.1l130.6 87V227c0 32.8 8.4 64.8 24 93H112c-6.7 0-12.7-4.2-15-10.4s-.5-13.3 4.6-17.7L171 232.3 18.4 255.8c-7 1.1-13.9-2.6-16.9-9s-1.5-14.1 3.8-18.8L130.9 116.5z" /></svg>
                    <span className="flex items-center justify-center w-5 italic font-bold text-center text-[0.1rem] z-10 h-full [writing-mode:vertical-rl] rotate-180 text-orange-600 leading-3">
                      DRUNK NEWSLETTER
                    </span>
                  </div>
                  <div className="bg-white mt-[6.3rem] border-t-2 border-r-2 border-orange-500 flex flex-col items-start justify-around xl:bottom-[1.75rem] xl:h-[3rem] xl:mt-0 xl:absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="12" height="12"
                      stroke="orange" stroke-width="2" fill="#ea580c"
                      className="w-5 flex justify-start"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="12" height="12" stroke="orange" stroke-width="2" fill="#f97316" className="w-5 flex justify-start"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                  </div>
                </div>
                <div className="w-full border-y-2 border-orange-500">
                  <div className="absolute z-10 flex flex-col justify-center items-center left-[12.5rem] top-[18rem] xl:left-[30rem] ">
                    <span className="text-center text-white font-semibold text-4xl">
                      Form
                    </span>
                    <span className="text-center text-white font-bold text-5xl h-20 w-[20rem] xl:w-[30rem] leading-2 flex justify-center items-center bg-pink-900 border border-2 border-pink-700 shadow-lg ">
                      <span>
                        GRAPE
                        WINE
                      </span>
                    </span>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="relative border-l-2 border-orange-500">
                      <img src={image1} className="w-full h-[24.85rem] xl:h-[40.3rem] object-cover" />
                    </div>
                    <div className="relative">
                      <img src={image2} className="w-full h-[24.85rem] 
xl:h-[40.3rem] object-cover" />
                    </div>
                  </div>
                </div>
                <div className="w-5 h-full xl:h-[40.5rem] border-y-2 border-l-2 border-orange-500 grid grid-rows-2">
                  <div className="text-white flex flex-col items-center justify-around bg-green-500 overflow-hidden">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-3 h-3 flex items-center justify-center">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                    </span>
                    <span className="flex justify-center items-center text-[0.5px] leading-[0.65rem] font-semibold italic text-center">
                      O<br />
                      R<br />
                      D<br />
                      E<br />
                      R<br />
                      <br />T<br />
                      ㅡ<br />
                      A
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-3 h-3 flex items-center justify-center">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                    </span>
                  </div>
                  <div className="text-white flex flex-col items-center justify-around bg-green-500 overflow-hidden border-t-2 border-orange-500">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                      </svg>
                    </span>
                    <span className="flex justify-center items-center text-[0.5px] leading-[0.65rem] font-semibold text-center italic">
                      R<br />
                      E<br />
                      S<br />
                      E<br />
                      R<br />
                      V<br />
                      A<br />
                      T<br />
                      I<br />
                      O<br />
                      N
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <motion.div
                whileHover={{
                  scale: 1.15,
                }}
                className="fixed w-[1rem] h-[1rem] xl:w-[1.6rem] xl:h-[1.65rem] rounded-sm bottom-[8.75rem] right-[1.3rem] shadow-lg bg-orange-500 flex items-center justify-center hover:bg-orange-700 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" strokeWidth={1.5} stroke="white" className="w-[0.8rem] h-[0.9rem] "><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" /></svg>
              </motion.div>
              <div className="bg-white border-b-2 xl:border-b-1 xl:border-t-2 border-orange-500 w-full h-[1.2rem] xl:mt-[5.5rem]" >
                <span className="text-orange-500 text-[0.1rem] italic flex justify-center items-center font-semibold ">
                  BEST QUALITY!
                  STAY DRUNK - NUMBER ONE BEST QUALITY! EVERY DAY OPEN! FLEMINGTON & NORTHCOTE! HOME DELIVERY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
