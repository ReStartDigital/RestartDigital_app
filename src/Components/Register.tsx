import React , { useState } from 'react';
import person from "../assets/images/person.jpg";
import logo from "../assets/images/logo.jpg";
import axios from "axios";
import { Toaster , toast } from "react-hot-toast";


interface User {
    firstName:string;
    middleName:string;
    lastName:string;
    email:string;
    telephoneNumber:string;
    dateOfBirth:string;
    password:string;
    confirmPassword?:string;
    agreed:boolean;
}

const Register:React.FunctionComponent = ()=>{
    const [ formData , setFormData ] = useState<User>(
        {
            firstName:"", // minimum of 3 and maximum of 20 required
            middleName:"", // optional
            lastName:"",// minimum of 3 and maximum of 20 required
            email:"", 
            telephoneNumber:"", //max of 13 and min of 10
            dateOfBirth:"",
            password:"",
            confirmPassword:"",
            agreed:false,
        }
    )

   
    const len = 8;
    const handleSubmit = async(e:any)=>{
        e.preventDefault();
        try{
            if (formData.password !== formData.confirmPassword){
                toast.error("Passwords do not match");
            }else{
                const response = await axios.post("" , formData,{ withCredentials: true }) //insert backend url here
                console.log(response.data);
                toast.success("Registered successfully");
            }
        }catch(err:any){
            console.log(err);
        }
 
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value, 
        });
       
      };
  


    return(
        
        <section className="w-full h-full flex justify-center items-center p-5">
            <Toaster position="top-right"/>
            <div className="2xl:w-[75%] xl:w-[75%] lg:w-[80%] md:w-full sm:w-full xs:w-full h-full bg-white mt-32 flex justify-center items-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse">
                <div className='w-full bg-gray-200 h-full 2xl:p-4 xl:p-4 lg:p-4 md:p-6 sm:p-8 xs:p-8'>
                  
                    <form className="w-full h-full gap-2 p-3 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
                        <h1 className='font-Poppins text-3xl font-bold text-center pt-4 '>Register Account</h1>
                        <div className="w-full h-[8%] flex justify-between items-center mb-4">
                            <label className='font-Poppins'>First Name:</label>
                            <input type='text' value={formData.firstName} name="fullName" onChange={handleChange} placeholder="Type your first name" className="w-[70%] p-4 font-Poppins focus:outline-none" required/>
                        </div>
                        <div className="w-full h-[8%] flex justify-between items-center mb-4">
                            <label className='font-Poppins'>Middle Name:</label>
                            <input type='text' value={formData.firstName} name="middleName" onChange={handleChange} placeholder="Type your middle name" className="w-[70%] p-4 font-Poppins focus:outline-none"/>
                        </div>
                        <div className="w-full h-[8%] flex justify-between items-center mb-4">
                            <label className='font-Poppins'>Last Name:</label>
                            <input type='text' value={formData.firstName} name="lastName" onChange={handleChange} placeholder="Type your last name" className="w-[70%] p-4 font-Poppins focus:outline-none" required/>
                        </div>
                        <div className="w-full h-[8%] flex justify-between items-center mb-4">
                            <label className='font-Poppins'>Email:</label>
                            <input type='email' value={formData.email} name="email" placeholder="Type your email" onChange={handleChange} className="w-[70%] p-4 font-Poppins focus:outline-none" required/>
                        </div>
                        <div className="w-full h-[8%] flex justify-between items-center mb-4">
                            <label className='font-Poppins'>Telephone number:</label>
                            <input type='tel' value={formData.telephoneNumber} onChange={handleChange} name="telephoneNumber" placeholder="Type your telephone number" minLength={10} maxLength={13} className="w-[70%] p-4 focus:outline-none font-Poppins" required/>
                        </div>
                        <div className="w-full h-[8%] flex justify-between items-center mb-4">
                            <label className='font-Poppins'>Date of birth:</label>
                            <input type="date" value={formData.dateOfBirth} name="dateOfBirth" onChange={handleChange} className="w-[70%] p-4 font-Poppins text-white bg-black"  />
                        </div>
                        <div className="w-full h-[10%] flex justify-between items-center mb-4">
                            <label className='font-Poppins'>Password:</label>
                            <input type='password' value={formData.password} name="password" minLength={len}  onChange={handleChange} placeholder="Type your password"  className="w-[70%] p-4 font-Poppins" required/>
                        </div>
                        <div className="w-full h-[10%] flex justify-between items-center mb-4">
                            <label className='font-Poppins'>Confirm Password:</label>
                            <input type='password' value={formData.confirmPassword}  onChange={handleChange} name="confirmPassword" placeholder="Re-Type your password" minLength={8} className="w-[70%] p-4 font-Poppins" required/>
                        </div>
                        <div className="2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[50%] sm:w-[45%] xs:w-[80%] h-[8%] flex justify-between items-center mb-0 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-3 sm:gap-4 xs:gap-4">
                            <input type='checkbox' checked={formData.agreed} name="agreed"  onChange={handleChange} placeholder="Type your password"  minLength={8} className="p-2 font-Roboto accent-black" required/>
                            <label className="font-Poppins 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-sm xs:text-xs">Agree with terms and conditions</label>
                        </div>
                        <button type='submit' className='p-3 font-Poppins bg-black text-white rounded-md w-[40%]'>Register</button>
                    </form>
                </div>
                <div className='w-full 2xl:h-full xl:h-full lg:h-full md:h-[80%] sm:h-[80%] xs:h-[80%] relative'>
                    <img src={person} alt="person" className="w-full h-full object-cover mix-blend-luminosity"/>
                    <div className='w-full flex justify-center items-center absolute bottom-0 left-0 h-[20%]'>
                        <span className="font-Poppins text-3xl font-bold text-white text-center">Welcome to Restart Digital</span>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Register;