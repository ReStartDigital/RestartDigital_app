import React  from 'react';
import Backend from "../assets/images/backend.jpg";

const Course:React.FunctionComponent = ()=>{
    
    return (
       <section className='w-full h-80vh flex justify-center items-center p-4'>
            <div className='w-full h-full flex justify-center items-center gap-4'>
                <div className='w-full h-full bg-blue-500 flex justify-center items-center p-4 gap-4'>
                    <div className='w-[80%] h-full bg-gray-200 rounded-xl flex justify-start itetms-center flex-col -rotate-6'>
                        <div className='w-full h-[40%] rounded-t-xl'>
                            <img src={Backend} className='w-full h-full object-cover rounded-t-xl' alt=''/>
                        </div>
                        <div className='w-full flex justify-center items-center p-2'>
                            <span className='font-Poppins text-xl text-center font-bold capitalize'>Build a secure backend application tailored to real world software principles</span>
                        </div>
                        <div className='w-full flex justify-center items-center p-2'>
                            <span className='font-Poppins text-xs text-center capitalize'>
                                Build a secure backend application tailored to real world software principles.
                                Implementing micro-services to impove tthe functionality of servers and making servers 
                                more performant.
                            </span>
                        </div>
                        
                    </div>
                    <div className='w-full h-full bg-gray-200'>
                        <span>Hello world</span>
                    </div>
                </div>
                <div className='w-[80%] h-full flex justify-start items-start flex-col p-5 gap-6'>
                    <div className='w-[40%] border-2 border-black rounded-3xl p-2 flex justify-center items-center'>
                        <span className='font-Poppins'>Why you need restart digital</span>
                    </div>
                    <div className='w-full'>
                        <span className='font-Lexend text-4xl'>Courses and bootcamps are available in restart digital, choose what you like</span>
                    </div>
                    <div className='w-full'>
                        <span className='font-Poppins text-black'>
                            Explore wide range of courses and boatcamps on Restart Digital. Whatever you are looking to develop now skills or advance your career,we have something for everyone.
                            choose what you like and start learning to do.

                        </span>
                    </div>
                    <div className='w-full'>
                        <div className='w-full flex justify-start gap-2 items-start'>
                            <svg className='text-green-500' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5zm12.78-8.82a.75.75 0 0 0-1.06-1.06L9.162 9.177L7.289 7.241a.75.75 0 1 0-1.078 1.043l2.403 2.484a.75.75 0 0 0 1.07.01z" clipRule="evenodd"/>
                            </svg>
                            <span className='font-Poppins'>100+ Courses Categories (Design ,Coding, etc)</span>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='w-full flex justify-start gap-2 items-start'>
                            <svg className='text-green-500' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5zm12.78-8.82a.75.75 0 0 0-1.06-1.06L9.162 9.177L7.289 7.241a.75.75 0 1 0-1.078 1.043l2.403 2.484a.75.75 0 0 0 1.07.01z" clipRule="evenodd"/>
                            </svg>
                            <span className='font-Poppins'>Online or Offline Event you can join</span>
                        </div>
                    </div>
                    <div>
                        <button className='font-Poppins p-4 rounded-2xl text-white bg-black'>Explore restart</button>
                    </div>
                </div>
               
            </div>
       </section>
    )
}

export default Course;