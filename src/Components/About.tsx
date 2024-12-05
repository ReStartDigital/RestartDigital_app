import React , { useEffect , useState } from "react";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import Team, { Teams } from "../Reusable/Team";
import Person1 from "../assets/images/group2.jpg";
import Person2 from "../assets/images/group3.jpg";
import Person4 from "../assets/images/group4.jpg";

const About:React.FC = ()=>{
    const [ data , setData ] = useState<Teams[]>([]);
    const style: React.CSSProperties = {
        clipPath: 'polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%)',
      };
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
            <div className="w-full h-30vh flex justify-center items-center  p-4">
                    <div className='w-full h-full flex justify-start items-center'>
                        <span className='text-7xl font-Lexend capitalize'>Previous years of restart digital</span>
                    </div>
            </div>
            <div className='w-full h-full flex justify-center items-center p-4 gap-4- bg-gray-100'>
                <div className="w-[80%] h-full  rounded-lg flex justify-center items-center flex-col p-4">
                    <div className='w-full flex justify-start items-center p-4'>
                        <span className='font-Poppins font-bold text-2xl'>Restart Digital events in the years</span>
                    </div>
                    <div className='w-full flex justify-start items-center p-4'>
                        <span className='font-Poppins text-sm'>
                            The TECH Event, hosted by Restart Digital last year, was a groundbreaking gathering of technology enthusiasts, industry leaders, and innovators. 
                            Focused on fostering collaboration and knowledge sharing, the event featured interactive workshops, panel discussions, and keynote speeches by renowned tech pioneers. 
                            Attendees explored cutting-edge trends in AI, blockchain, and software development, gaining insights into future technological advancements. 
                            Networking sessions provided a platform to connect with like-minded professionals and forge valuable partnerships.
                            Restart Digital’s commitment to innovation shone through its seamless organization and vibrant atmosphere. 
                            The TECH Event not only inspired participants but also strengthened the company’s reputation as a digital leader.
                        </span>
                    </div>
                </div>
                <div className="w-full h-full  rounded-lg flex justify-center items-center gap-4 p-3">
                    <div className="w-full h-full rounded-lg" style={style}>
                        <img src={Person1} alt="" className='w-full h-full object-cover relative rounded-lg'/>
                    </div>
                    <div className='w-full h-full flex justify-center items-center flex-col gap-4'>
                        <div className="w-full h-full rounded-lg" style={style}>
                            <img src={Person2} alt="" className='w-full h-full object-cover relative rounded-lg'/>
                        </div>
                        <div className="w-full h-full rounded-lg" style={style}>
                            <img src={Person4} alt="" className='w-full h-full object-cover relative rounded-lg'/>
                        </div>
                    </div>
                    
                </div>  
            </div>
        </section>
    )
}

export default About;