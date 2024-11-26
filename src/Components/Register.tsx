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
            firstName:"",
            middleName:"",
            lastName:"",
            email:"",
            telephoneNumber:"",
            dateOfBirth:"",
            password:"",
            confirmPassword:"",
            agreed:false,
        }
    )

    const handleSubmit = async(e:any)=>{
        try{
            const response = await axios.post("" , formData,{ withCredentials: true }) //insert backend url here
            if(response.data){
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
        
        <section className="w-full h-100vh flex justify-center items-center">
            <Toaster position="top-right"/>
<<<<<<< HEAD
            <div className="w-[60%] h-full bg-white mt-40 flex justify-center items-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse">
                <div className='w-full bg-gray-200 h-[100%] p-4'>
                    <h1 className='font-Poppins text-3xl font-bold text-center h-[15%] gap-2 p-3 flex justify-center pt-4'>Register Account</h1>
                    <form className="w-full h-full gap-2 p-3 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
                        <div className="w-full h-[8%] flex justify-between items-center mb-4">
                            <label>First Name</label>
                            <input type='text' value={formData.firstName} name="fullName" onChange={handleChange} placeholder="Type your first name" className="w-[70%] p-4 font-Roboto focus:outline-none" required/>
                        </div>
                        <div className="w-full h-[8%] flex justify-between items-center mb-4">
                            <label>Middle Name</label>
                            <input type='text' value={formData.middleName} name="fullName" onChange={handleChange} placeholder="Type your middle name" className="w-[70%] p-4 font-Roboto focus:outline-none"/>
                        </div>
                        <div className="w-full h-[8%] flex justify-between items-center mb-4">
                            <label>Last Name</label>
                            <input type='text' value={formData.lastName} name="fullName" onChange={handleChange} placeholder="Type your last name" className="w-[70%] p-4 font-Roboto focus:outline-none" required/>
=======
            <div className="2xl:w-[60%] xl:w-[60%] lg:w-[80%] md:w-full sm:w-full xs:w-full h-full bg-white mt-40 flex justify-center items-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse">
                <div className='w-full bg-gray-200 h-full 2xl:p-4 xl:p-4 lg:p-4 md:p-6 sm:p-8 xs:p-8'>
                    <h1 className='font-Poppins text-3xl font-bold text-center pt-4'>Register Account</h1>
                    <form className="w-full h-full gap-2 p-3 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
                        <div className="w-full h-[8%] flex justify-between items-center mb-4">
                            <label className='font-Poppins'>Full Name:</label>
                            <input type='text' value={formData.fullName} name="fullName" onChange={handleChange} placeholder="Type your first name" className="w-[70%] p-4 font-Poppins focus:outline-none" required/>
>>>>>>> 2a2ee6038236c6e581818f3a1c56622e20bd6e36
                        </div>
                        <div className="w-full h-[8%] flex justify-between items-center mb-4">
                            <label className='font-Poppins'>Email:</label>
                            <input type='email' value={formData.email} name="email" placeholder="Type your email" onChange={handleChange} className="w-[70%] p-4 font-Poppins focus:outline-none" required/>
                        </div>
                        <div className="w-full h-[8%] flex justify-between items-center mb-4">
<<<<<<< HEAD
                            <label>Telephone number</label>
                            <input type='tel' value={formData.telephoneNumber} onChange={handleChange} name="telephoneNumber" placeholder="Type your name" className="w-[70%] p-4 font-Roboto focus:outline-none" required/>
=======
                            <label className='font-Poppins'>Telephone number:</label>
                            <input type='tel' value={formData.telephoneNumber} onChange={handleChange} name="telephoneNumber" placeholder="Type your telephone number" maxLength={10} className="w-[70%] p-4 focus:outline-none font-Poppins" required/>
>>>>>>> 2a2ee6038236c6e581818f3a1c56622e20bd6e36
                        </div>
                        <div className="w-full h-[8%] flex justify-between items-center mb-4">
                            <label className='font-Poppins'>Date of birth:</label>
                            <input type="date" value={formData.dateOfBirth} name="dateOfBirth" onChange={handleChange} className="w-[70%] p-4 font-Poppins text-white bg-black"  />
                        </div>
                        <div className="w-full h-[10%] flex justify-between items-center mb-4">
                            <label className='font-Poppins'>Password:</label>
                            <input type='password' value={formData.password} name="password"  onChange={handleChange} placeholder="Type your password" minLength={8} className="w-[70%] p-4 font-Poppins" required/>
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
                <div className='w-full 2xl:h-[100%] xl:h-full lg:h-full md:h-[80%] sm:h-[80%] xs:h-[80%] relative'>
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