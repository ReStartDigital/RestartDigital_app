import React , { useState } from 'react';
import person from "../assets/images/person.jpg";
import logo from "../assets/images/logo.jpg";
import axios from "axios";
import { Toaster , toast } from "react-hot-toast";


interface User {
    fullName:string;
    email:string;
    institutionName:string;
    dateOfBirth:string;
    password:string;
    confirmPassword?:string;
    agreed:boolean;
}

const Register:React.FunctionComponent = ()=>{
    const [ formData , setFormData ] = useState<User>(
        {
            fullName:"",
            email:"",
            institutionName:"",
            dateOfBirth:"",
            password:"",
            confirmPassword:"",
            agreed:false,
        }
    )

    const handleSubmit = async()=>{
        const response = await axios.post("" , formData,{ withCredentials: true }) //insert backend url here
        if(response.data){
            toast.success("Registered successfully");
        }
        console.log(response.data)
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value, 
        });
        console.log(formData);
      };
  


    return(
        
        <section className="w-full h-100vh flex justify-center items-center">
            <Toaster position="top-right"/>
            <div className="w-[60%] h-full bg-white mt-40 flex justify-center items-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse">
                <div className='w-full bg-gray-200 h-[100%] p-4'>
                    <h1 className='font-Poppins text-3xl font-bold text-center pt-4'>Register Account</h1>
                    <form className="w-full h-full gap-2 p-3 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
                        <div className="w-full h-[8%] flex justify-between items-center mb-4">
                            <label>Full Name</label>
                            <input type='text' value={formData.fullName} name="fullName" onChange={handleChange} placeholder="Type your first name" className="w-[70%] p-4 font-Roboto focus:outline-none" required/>
                        </div>
                        <div className="w-full h-[8%] flex justify-between items-center mb-4">
                            <label>Email</label>
                            <input type='email' value={formData.email} name="email" placeholder="Type your email" onChange={handleChange} className="w-[70%] p-4 font-Roboto focus:outline-none" required/>
                        </div>
                        <div className="w-full h-[8%] flex justify-between items-center mb-4">
                            <label>Institution name</label>
                            <input type='text' value={formData.institutionName} onChange={handleChange} name="institutionName" placeholder="Type your name" className="w-[70%] p-4 font-Roboto focus:outline-none" required/>
                        </div>
                        <div className="w-full h-[8%] flex justify-between items-center mb-4">
                            <label>Date of birth</label>
                            <input type="date" value={formData.dateOfBirth} name="dateOfBirth" onChange={handleChange} className="w-[70%] p-4 font-Roboto"  />
                        </div>
                        <div className="w-full h-[10%] flex justify-between items-center mb-4">
                            <label>Password</label>
                            <input type='password' value={formData.password} name="password"  onChange={handleChange} placeholder="Type your password" minLength={8} className="w-[70%] p-4 font-Roboto" required/>
                        </div>
                        <div className="w-full h-[10%] flex justify-between items-center mb-4">
                            <label>Confirm Password</label>
                            <input type='password' value={formData.confirmPassword}  onChange={handleChange} name="confirmPassword" placeholder="Type your password" minLength={8} className="w-[70%] p-4 font-Roboto" required/>
                        </div>
                        <div className="w-[60%] h-[8%] flex justify-between items-center mb-0 ">
                            <input type='checkbox' checked={formData.agreed} name="agreed"  onChange={handleChange} placeholder="Type your password"  minLength={8} className="p-4 font-Roboto accent-black" required/>
                            <label>Agree with terms and conditions</label>
                        </div>
                        <button type='submit' className='p-3 font-Poppins bg-black text-white rounded-md w-[40%]'>Register</button>
                    </form>
                </div>
                <div className='w-full h-[100%] relative'>
                    <img src={person} alt="person" className="w-full h-full object-cover mix-blend-luminosity"/>
                    <div className="w-full  absolute top-3 left-0 flex justify-center items-center h-[20%]">
                        <img src={logo} alt="logo" className='w-[20%] h-[60%] rounded-full object-cover'/>
                    </div>
                    <div className='w-full flex justify-center items-center absolute bottom-0 left-0 h-[20%]'>
                        <span className="font-Poppins text-3xl font-bold text-white text-center">Welcome to Restart Digital</span>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Register;