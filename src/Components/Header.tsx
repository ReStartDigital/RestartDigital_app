import React from 'react';
import logo from "../assets/images/logo.jpg";

const Header:React.FunctionComponent = ()=>{
     const registerHandler = ()=>{
        window.location.href="http://localhost:3001/register/user"
     }

    return (
        <section className='fixed w-full h-10vh bg-white flex 2xl:justify-center xl:justify-center lg:justify-center  md:justify-between xs:justify-between  items-center gap-5 z-10 p-1'>
            <div className="w-[40%] h-full flex justify-center items-center">
                <img className='w-[30%] h-full rounded-full' src={logo} alt="logo-picture"/>
            </div>
            <div className="w-full h-full 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden justify-center items-center">
                <ul className='w-full h-full flex justify-center items-center p-4'>
                    <li><a href="/" className='p-4 font-Roboto font-bold active:text-orange-400 active:underline '>Home</a></li>
                    <li><a href="/courses" className='p-4 font-RobotoCondensed font-bold'>Courses</a></li>
                    <li><a href="#about" className='p-4 font-RobotoCondensed font-bold'>About Us</a></li>
                    <li><a href="/blog" className='p-4 font-RobotoCondensed font-bold'>Blog</a></li>
                    <li><a href="/login/user" className='p-4 font-RobotoCondensed font-bold'>Log in</a></li>
                </ul>
            </div>
            <div className="w-[50%] h-full flex justify-center items-center p-4">
                <div className='w-full h-full flex justify-center items-center'>
                    <button className='bg-blue-500 2xl:p-3 xl:p-3 lg:p-3 md:p-3 sm:p-3 xs:p-1  2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[70%] sm:w-[70%] xs:w-[100%]  ml-4 rounded-xl flex justify-center items-center text-white' onClick={registerHandler}>Register Now
                        <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" viewBox="0 0 64 64">
                            <path fill="currentColor" d="M53.213 10.786c-11.715-11.715-30.711-11.715-42.426 0c-11.716 11.717-11.716 30.711 0 42.428c11.715 11.715 30.711 11.715 42.426 0c11.716-11.717 11.716-30.711 0-42.428M45 41.132l-7.585-7.414l-13.458 13.281L17 39.954l13.218-13.391l-7.343-7.564H45z" />
                        </svg>
                    </button>
                </div>     
            </div>
        </section>
    )
}

export default Header;