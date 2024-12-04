import React , { useEffect } from "react";
import axios from "axios";
import { Fade } from "react-awesome-reveal";

const About = ()=>{

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await axios.get('/jsons/team.json');
                console.log(response.data);
            }catch(error:any){
                console.log(error);
                return;
            }
            
        }

        fetchData();
    },[])

    return(
        <section className='w-full h-screen flex justify-start items-start'> 
            <div className="w-full h-40vh flex justify-center items-center">
                <Fade className='w-full h-full flex justify-center items-center' direction='up' triggerOnce>
                    <div className="w-[80%] h-full flex justify-center items-center p-4">
                        <span className='text-7xl font-Lexend text-center'>We are the people who make up Restart Digital</span>
                    </div>                  
                </Fade>

            </div>
        </section>
    )
}

export default About;