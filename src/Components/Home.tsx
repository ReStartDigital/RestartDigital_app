/* eslint-disable react/jsx-no-undef */
import React from "react";
import Grid from "../Reusable/Grid";


const Home:React.FunctionComponent = ()=>{
    return (
        <section className="w-full h-full flex justify-center items-center flex-col">
            <div className="relative w-full h-40vh ">
                <Grid/>
                <div className="w-full h-[70%] absolute bottom-0 left-0 bg-gradient-to-t from-white to-white/25 p-3 gap-3">
                    <div className='w-[25%] border-2 border-black rounded-full flex justify-center items-center mb-4'>
                        <span className='font-Poppins'>The place where newbie meets masters</span>
                    </div>
                    <div className='w-[60%]'>
                        <span className='capitalize font-Poppins text-6xl'>Transform your learning experience with restart digital🧐</span>
                    </div>
                </div>
            </div>
       </section>
    )
}

export default Home;