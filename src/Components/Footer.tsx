import React from "react";
import Logo from "../assets/images/logo.jpg";

const Footer:React.FC = ()=>{
    const date = new Date();
    return(
        <section className='w-full h-full flex justify-center items-center p-4 mb-2'>
            <div className='w-full h-full flex justify-center items-center flex-col p-3 gap-4'>
                <div className="w-full h-full flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-between items-center p-4 gap-4 border-b-2 border-gray-300">
                    <div className='2xl:w-[50%] xl:w-[50%] lg:w-[40%] md:w-[80%] sm:w-full xs:w-full h-full flex justify-center items-center p-4'>
                        <div className='w-[30%] h-full flex justify-center items-center bg-white'>
                            <img src={Logo} alt="" className='w-[80%] h-full mix-blend-luminosity rounded-full'/>
                        </div>
                        <div className='w-full h-full flex justify-center items-center'>
                            <span className='capitalize font-Poppins'>restart digital inco.</span>
                        </div>
                    </div>
                    <div className='w-full h-full flex justify-end items-center p-4 gap-4'>
                        <span className="font-Poppins capitalize">terms & conditions</span>
                        <span className="font-Poppins capitalize">Privacy Policy</span>
                        <span className="font-Poppins capitalize">License</span>
                    </div>
                </div>
                <div className='w-full h-full  flex justify-center items-center gap-4 p-3'>
                    <div className="w-full h-full flex justify-start items-center p-4">
                        <span className='font-Poppins text-black'>Copyright &copy; Restart Digital {date.getFullYear()}</span>
                    </div>
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="w-full h-full flex justify-end p-4 gap-4 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd">
                                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                                <path fill="currentColor" d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM8 10a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1m3-1a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-3.66c.305-.344.82-.748 1.393-.993c.333-.142.834-.2 1.182-.09a.55.55 0 0 1 .293.188c.052.07.132.226.132.555v4a1 1 0 0 0 2 0v-4c0-.67-.17-1.266-.524-1.744a2.54 2.54 0 0 0-1.301-.907c-.902-.283-1.901-.126-2.568.16a6 6 0 0 0-.623.312A1 1 0 0 0 11 9M8 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/>
                                </g>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                <g fill="none"><g clipPath="url(#primeTwitter0)">
                                    <path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"/>
                                    </g><defs><clipPath id="primeTwitter0"><path fill="#fff" d="M0 0h14v14H0z"/></clipPath></defs></g>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"/>
                                <path fill="currentColor" fillRule="evenodd" d="M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" clipRule="evenodd"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;