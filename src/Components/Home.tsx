/* eslint-disable react/jsx-no-undef */
import React ,{ useEffect , useRef} from "react";
import Grid from "../Reusable/Grid";
import { Fade } from "react-awesome-reveal";
import Pic from "../assets/images/collaboration.jpg";
import Boy from "../assets/images/boy_code.jpg";
import learn from "../assets/images/learn.jpg";


const Home:React.FunctionComponent = ()=>{
    const carouselRef = useRef<HTMLDivElement | null>(null);
    

    useEffect(() => {
        const carousel = carouselRef.current;
    
        if (!carousel) return;
    
        // Duplicate items for infinite scrolling
        const scrollInterval = setInterval(() => {
          if (carousel) {
            const { scrollLeft, scrollWidth, clientWidth } = carousel;
    
            if (scrollLeft + clientWidth >= scrollWidth) {
              // Reset scroll to the start (to simulate infinite scroll)
              carousel.scrollTo({ left: 0, behavior: "smooth" });
            } else {
              // Scroll forward by the width of one item
              carousel.scrollBy({ left: 316, behavior: "smooth" }); // Adjust 316 to your item + margin width
            }
          }
        }, 3000);
    
        return () => clearInterval(scrollInterval);
      }, []);
    return (
        <section className="w-full h-full flex justify-start items-center flex-col">
            <div className="relative w-full 2xl:h-50vh xl:h-[50%] lg:h-[50%] md:h-[50%] sm:h-[50%] xs:h-[50%] justify-center items-center flex  ">
                <Grid/>
                    <div className="w-full p-3 2xl:h-[100%] xl:h-[100%] lg:h-[90%] md:h-full sm:h-full xs:h-full flex justify-center items-center absolute bottom-0 left-0 bg-gradient-to-t from-white to-white/25 gap-3">
                        <div className="w-full h-full flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col justify-center items-center">
                            <div className='w-full'>
                                <div className='2xL:w-[50%] xl:w-[50%] lg:w-[80%] md:w-full sm:w-full xs:w-full  border-2 border-black rounded-full flex justify-center items-center mb-4'>
                                    <span className='font-Poppins'>The place where newbie meets masters</span>
                                </div>
                                <div className='w-full'>
                                    <Fade className="w-full" direction='up' triggerOnce>
                                        <div className='w-full'>
                                            <span className='capitalize font-Poppins 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-4xl'>Transform your learning experience with restart digital🧐</span>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                            <div className='2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-full sm:w-full  xs:w-full flex justify-center items-center flex-col'>
                                <form className='w-full flex justify-center items-center flex-col p-3 gap-4'>
                                    <input type="text" placeholder='Search courses' className="font-Poppins p-2 w-[70%] xl:w-[70%] lg:w-[70%] md:w-full sm:w-full xs:w-full rounded-lg bg-gray-200"/>
                                    <button type='submit' className='font-Poppins bg-black text-white p-3 2xl:w-[70%] rounded-lg shadow-sm shadow-black xl:w-[70%] lg:w-[70%] md:w-full sm:w-full xs:w-full'>Search</button>
                                </form>
                                <div className='w-[70%] flex justify-center items-center gap-4'>
                                    <svg className="text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M10 17l-3.5-3.5l1.41-1.41L10 14.17L15.18 9l1.41 1.41z" />
                                    </svg>
                                    <span className='font-Poppins text-neutral-400'>Explore our well-structured IT courses.</span>
                                </div>
                            </div>
                        </div> 
                    </div>     
            </div>
            <div className="w-full h-40vh  flex justify-center items-center p-4">
                <div className='group w-full h-full  flex justify-center items-center gap-4 p-3 overflow-x-scroll scroll-smooth '>
                    <div className="flex justify-center items-center w-full animate-slide gap-4 h-full">
                        <div className="min-w-[300px] h-full bg-blue-500 flex space-x-4">
                            <img src={Pic} className='w-full h-full object-fill' alt=""/>
                        </div>
                        <div className="min-w-[300px] h-full bg-blue-500 flex space-x-4 p-2 justify-start items-center flex-col">
                            <div className="w-full bg-green-500">
                                <span>Person</span>
                            </div>
                            <span>
                                Outstanding service from start to finish! The team went above and beyond to ensure I was happy with the results. 
                                Highly recommended!
                            </span>
                        </div>
                        <div className="min-w-[300px] h-full bg-blue-500 flex space-x-4">
                            <img src={Pic} className='w-full h-full object-fill' alt=""/>
                        </div>
                        <div className="min-w-[300px] h-full bg-blue-500 flex justify-start items-center flex-col space-x-4 p-2">
                            <div className="w-full bg-green-500">
                                <span>Person</span>
                            </div>
                            <span className="font-Poppins">
                                I’ve never experienced such professionalism and attention to detail. 
                                Their dedication to excellence is unmatched!
                            </span>
                        </div>
                        <div className="min-w-[300px] h-full flex space-x-4">
                            <img src={Boy} className='w-full h-full object-fill rounded-md' alt=""/>
                        </div>
                        <div className="min-w-[300px] h-full  shadow-sm shadow-gray-300 rounded-md flex space-x-4 p-2 flex-col justify-start items-center">
                            <div className="w-full bg-green-500">
                                <span>Person</span>
                            </div>
                            <span className="font-Poppins text-sm">
                                Outstanding service from start to finish! I approached the team with a complex project, and they not only delivered but far exceeded my expectations.
                                Their professionalism, attention to detail, and commitment to ensuring customer satisfaction were evident at every step. 
                                
                            </span>
                        </div>
                        <div className="min-w-[300px] h-full flex space-x-4">
                            <img src={learn} className='w-full h-full object-fill' alt=""/>
                        </div>
                        <div className="min-w-[300px] h-full  shadow-sm shadow-gray-400 rounded-lg flex space-x-4 p-2 justify-start items-center flex-col">
                            <div className="w-full bg-green-500">
                                <span>Person</span>
                            </div>
                            <span>
                                Customer support is exceptional! They helped me set up in minutes and answered all my questions promptly.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second stage */}
            <div className='w-full h-60vh bg-red-500 flex justify-center items-center gap-4 p-4' >
                <div className='w-full h-full bg-green-500'>
                    
                </div>
                
                
            </div>

            
       </section>
    )
}

export default Home;