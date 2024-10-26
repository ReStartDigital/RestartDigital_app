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
        <section className='w-full h-100vh bg-red-500 flex justify-center items-center gap-4 flex-col p-4'>
            <div className='w-full h-full bg-green-500 mt-36 p-4'>
                <span className="text-5xl font-Poppins text-black">Popular Courses</span><br/>
                <span className="text-black font-RobotoCondensed">Enhance your knownledge & skills in tech.</span>
            </div>
            <div className='w-full h-full bg-green-500 p-4'>
                <span>Data</span>
            </div>
        </section>
    )
}

export default Course;