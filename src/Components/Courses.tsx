import React , { useState , useEffect } from 'react';
import axios from "axios";




const Course:React.FunctionComponent = ()=>{
    const [ data , setData ] = useState<object[]>([])

    useEffect(()=>{
        async function fetchData(){
            console.log("Rendered");
            try{
                const response = await axios.get("/jsons/courses.json");
                console.log(response.data)
                setData(response.data);
            }catch(err: any){
                console.log(err)
            }  
        }

        fetchData();
    },[])



    return (
        <section className='w-full h-full bg-red-500 flex justify-center items-center gap-4 flex-col p-4'>
            <div className='w-full h-20vh bg-green-500 mt-36 p-4'>
                <span className="text-5xl font-Poppins text-black">Popular Courses</span><br/>
                <span className="text-black font-RobotoCondensed">Enhance your knownledge & skills in tech.</span>
            </div>
            <div className='w-[80%] h-[70%] bg-green-500 p-4 grid grid-flow-row 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4'>
                {
                  data.map((item: any)=>(
                    <div className='w-full h-full bg-blue-500 mt-0' key={item.id}>
                        <img src={item.image_path} alt="course images" className='w-full h-[60%] object-cover'/>
                        <span className='bg-slate-500'>{item.course_name}</span>
                    </div>
                  ))
                }
            </div>
        </section>
    )
}

export default Course;