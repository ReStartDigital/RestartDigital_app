import React from "react";
import background from "../assets/images/background.jpg";
import girl from "../assets/images/girl.png";
import restart from "../assets/images/restartlogo.jpg";

const Home:React.FunctionComponent = ()=>{
    return (
        <section className="w-full h-full mt-50 flex justify-center items-center flex-col">
            <section className="relative w-full 2xl:h-80vh xl:h-80vh lg:h-100vh md:h-100vh sm:h-100vh xs:h-100vh mt-50 flex justify-center items-center">
                    <img className="w-full h-full object-cover" src={background} alt="background-image"/>
                    <div className="absolute top-0 2xl:w-[90%] xl:w-[90%] lg:w-full md:w-full sm:w-full xs:w-full h-full 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse flex justify-center items-center p-4 2xl:gap-4 xl:gap-4 lg:gap-3 md:gap-3 sm:gap-2 xs:gap-2">
                        <div className="w-full 2xl:h-[60%] xl:h-[70%] lg:h-[80%] md:h-[70%] sm:h-full xs:h-full flex 2xl:items-center xl:items-center lg:items-center md:items-center  sm:items-start xs:items-start  2xl:justify-center xl:justify-center lg:justify-center md:jusisty-center  sm:justify-start xs:justify-start  2xl:gap-1 xl:gap-2 lg:gap-3 md:gap-2 sm:gap-2 xs:gap-1 flex-col 2xl:p-2 xl:p-4 lg:p-3 md:p-1 sm:p-0 xs:p-0">
                            <div className="w-full 2xl:h-[50%] xl:h-[50%] lg:h-[60%] md:h-[50%] sm:h-[50%] xs:h-[50%] flex justify-start items-center 2xl:p-4 xl:p-3 lg:p-0 md:p-1 sm:p-0 xs:p-0">
                                <span className="text-white font-Poppins">E-LEARNING PLATFORM</span>
                            </div>
                            <div className=" w-full h-full 2xl:p-4 xl:p-2 lg:p-3 md:p-1 sm:p-0 xs:p-0">
                                <span className="font-Roboto text-white 2xl:text-5xl xl:text-4xl lg:text-5xl md:text-3xl sm:text-md xs:text-xl">Best Platform for Personal and Online Private Tutor</span>
                            </div>
                            <div className="w-full h-full 2xl:p-4 xl:p-2 lg:p-3 md:p-1 sm:p-0 xs:p-0">
                                <span className="text-neutral-200 2xl:text-lg xl:text-lg lg:text-3xl md:text-md sm:text-md xs:text-sm">We are a non-profit platform dedicated to offering free tech courses to students worldwide who are eagerto pursue tech careers and enhance their skills</span>
                            </div>
                            <div className="w-full h-full flex justify-center items-center">
                                <form className="w-[95%] 2xl:h-full xl:h-[80%] lg:h-[60%] md:h-[60%] sm:h-[70%] xs:h-[80%] flex justify-center items-center">
                                    <input className="p-4 w-full h-full font-RobotoCondensed rounded-none focus:outline-none focus:rounded-none" type="text" placeholder="Search for your interests"/>
                                    <button className="p-3 bg-blue-600 w-[40%] h-full font-Roboto text-white flex justify-center items-center">Search Courses</button>
                                </form>
                            </div>
                            <div className="w-full h-full flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-start sm:justify-between xs:justify-between items-start 2xl:p-4 xl:p-2 lg:p-3 md:p-1 sm:p-0 xs:p-0">
                                <div className="w-[40%] h-full flex justify-start items-center 2xl:p-0 xl:p-0 lg:p-0 md:p-1 sm:p-0 xs:p-2">
                                    <button className="font-Roboto 2xl:w-[50%] xl:w-[40%] lg:w-[50%]  md:w-[60%] sm:w-[80%] xs:w-[90%] 2xl:h-full xl:h-[80%] lg:h-[80%]  md:h-[60%] sm:h-[80%] xs:h-[70%] bg-white flex justify-center items-center p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                        <path fill="currentColor" fillRule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M10.783 7.99l5.644 3.136a1 1 0 0 1 0 1.748l-5.644 3.136A1.2 1.2 0 0 1 9 14.96V9.04a1.2 1.2 0 0 1 1.783-1.05" clipRule="evenodd" />
                                    </svg>
                                        Watch
                                    </button>
                                </div>
                                <div className="2xl:w-[20%] xl:w-[20%] lg:w-[30%] md:w-[30%] sm:w-[40%] xs:w-[40%] underline h-full flex justify-center items-center">
                                    <a className="text-white font-RobotoCondensed" href="/learn">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full 2xl:h-full xl:h-full lg:h-full md:h-[50%] sm:h-50vh xs:h-40vh 2xl:mt-10 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-30 xs:mt-30 flex justify-center items-center">
                            <div className="relative 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-full sm:w-full xs:w-full 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 xs:mt-0 2xl:h-full xl:h-full lg:h-[80%] md:h-[80%] sm:h-full xs:h-full">
                                <img className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-full sm:w-full xs:w-full 2xl:h-full xl:h-full lg:h-full md:h-full sm:h-full xs:h-full object-cover" src={girl} alt="girl-image"/> 
                                <div className="w-[40%] h-8vh bg-white absolute 2xl:bottom-80 xl:bottom-70 lg:bottom-50 md:bottom-20 sm:bottom-10 xs:bottom-5 2xl:right-14 xl:right-14 lg:right-9 md:right-8 sm:right-6 xs:right-4 rounded-lg flex justify-center items-center p-3 gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 64 64">
                                        <path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z" />
                                    </svg>
                                    <div className="w-full h-full flex justify-center items-center">
                                        <span className="text-sm">80.9%<br/> tutoring accuracy</span>
                                    </div>  
                                </div>
                                <div className="w-[40%] h-8vh bg-white absolute bottom-10  left-4 rounded-lg 2xl:flex xl:flex lg:hidden md:hidden sm:hidden xs:hidden justify-center items-center p-3 gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 64 64">
                                        <path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z" />
                                    </svg>
                                    <div className="w-full h-full flex justify-center items-center z-20">
                                        <span className="text-sm">80.9%<br/> tutoring accuracy</span>
                                    </div>    
                                </div>     
                            </div>    
                        </div>
                    </div>
            </section>
            <div className="bg-black w-full 2xl:h-20vh xl:h-20vh lg:h-10vh md:h-10vh sm:h-10vh xs:h-10vh xx:h-10vh">
               
            </div>
            <div className="flex justify-center items-center flex-col  gap-4 antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 w-full h-full">
               <div className="w-[70%] h-[80%] flex justify-center items-start gap-4 p-4  2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col ">
                    <div className="w-full h-full">
                        <img src={restart} alt="restart-logo" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-full h-full flex justify-center items-center flex-col">
                        <h2 className="text-white font-Poppins ">Company Links</h2>
                        <ul className='w-full flex justify-center items-center p-4 flex-col'>
                            <li><a href="/" className='m-4 font-Roboto active:text-orange-400 active:underline text-sm'>Home</a></li>
                            <li><a href="/courses" className='m-4 font-RobotoCondensed text-sm'>Courses</a></li>
                            <li><a href="#about" className='m-4 font-RobotoCondensed text-sm'>About Us</a></li>
                            <li><a href="/blog" className='m-4 font-RobotoCondensed text-sm'>Blog</a></li>
                        </ul>
                    </div>
                    <div className="w-full h-full flex justify-center items-center flex-col">
                        <h2 className="text-white font-Poppins ">Contact Us</h2>
                        <span>programs.restartdigital09@gmail.com</span>
                    </div>
                    <div className="w-full h-full flex justify-center items-center flex-col">
                        <h2 className="text-white font-Poppins ">Services</h2>
                        <span>Programming</span>
                        <span>Cyber Security</span>
                        <span>Development</span>
                        <span>Design</span> 
                    </div>
                    <div className="w-full h-full flex justify-center items-center flex-col">
                        <h2 className="text-white font-Poppins ">Links</h2>
                        <div className="flex justify-center items-center w-full">
                            <a href="/linkedin" className="font-Roboto text-stone-400 flex justify-center items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="2em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                                </svg>LinkedIn
                            </a>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <a href="/twitter" className="font-Roboto text-stone-400 flex justify-center items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="2em" viewBox="0 0 24 24">
                                    <g fill="currentColor">
                                        <path d="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z">
                                            <animate fill="freeze" attributeName="d" dur="0.4s" values="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z" />
                                        </path>
                                        <path d="M3 2h5v0h-5zM16 22h5v0h-5z">
                                            <animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M3 2h5v0h-5zM16 22h5v0h-5z;M3 2h5v2h-5zM16 22h5v-2h-5z" />
                                        </path>
                                        <path d="M18.5 2h3.5L22 2h-3.5z">
                                            <animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z" />
                                        </path>
                                    </g>
                                </svg>
                                Twitter
                            </a>
                        </div>
                        <div></div>
                        <div></div>

                    </div>
                </div>
                <hr className="w-full bg-slate-800"/> 
            </div>
       </section>
    )
}

export default Home;