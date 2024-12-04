import React , { useEffect , useState } from "react";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import Team, { Teams } from "../Reusable/Team";

const About = ()=>{
    const [ data , setData ] = useState<Teams[]>([]);
    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await axios.get('/jsons/team.json');
                setData(response.data)
               
            }catch(error:any){
                console.log(error);
                return;
            }
            
        }

        fetchData();
    },[])

    return(
        <section className='w-full h-full flex justify-start items-start flex-col'> 
            <div className="w-full 2xl:h-50vh xl:h-50vh lg:h-50vh md:h-40vh sm:h-40vh xs:h-40vh flex justify-center items-center">
                <Fade className='w-full h-full flex justify-center items-center' direction='up' triggerOnce>
                    <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-full sm:w-full xs:w-full h-full flex justify-center items-center p-4 flex-col gap-4">
                        <span className='2xl:text-7xl xl:text-7xl lg:text-5xl md:text-5xl sm:text-3xl xs:text-4xl font-Lexend text-center'>We are the people who make up Restart Digital</span>
                        <span className='font-Poppins text-center 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-full sm:w-full xs:w-full'>
                            Our philossphy is simple, provide you with the applicable skills and give you the best resources and assist 
                            you on your journey.
                        </span>
                    </div>                  
                </Fade>
            </div>
            <div className='w-full p-4 flex justify-center items-center overflow-hidden mb-5'>
                <div className='container 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-full sm:w-full xs:w-full h-auto gap-4 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]  p-4'>
                    {
                        data.map((item)=>(
                            <Team 
                            name={item.name} 
                            image_path={item.image_path} 
                            position={item.position}
                            linkedin_account={item.linkedin_account}
                            info={item.info}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default About;