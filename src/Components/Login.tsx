import React , { useState }  from 'react';
import logo from "../assets/images/logo.jpg";
import person from "../assets/images/person.jpg";
import axios from "axios";
import { Toaster , toast } from 'react-hot-toast';



type User = {
  email:string;
  password:string;
  agreed:boolean;
}

const Login: React.FC = () => {
  const [ formData , setformData ] = useState<User>({
    email:"",
    password:"",
    agreed:false
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const { value, name , checked , type} = e.target;
    setformData({
     ...formData,
      [name]:type === "checkbox" ? checked : value,
    })
  }

const handleSubmit = async(e:any)=>{
  try{
    e.preventDefault();
    const response = await axios.post("" , formData , { withCredentials: true });//insert backend url here
    if(response.data){
    toast.success("logged in sucessfully")
  }
  }catch(err:any){
    console.log(err);
  }
  
  
}

  return (
    <section className="w-full h-100vh flex justify-center items-center">
      <Toaster position='top-right'/>
      <div className="w-[60%] h-[80%] bg-white mt-40 flex justify-center items-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse">
        <div className='w-full bg-gray-200 h-[100%] p-4'>
            <h1 className='font-Poppins text-3xl font-bold text-center'>Sign in</h1>
            <form className="w-full h-full gap-2 p-3 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
                <div className="w-full h-[8%] flex justify-between items-center mb-4">
                    <label>Email</label>
                    <input type='email' value={formData.email} name="email" onChange={handleChange} placeholder="Type your email" className="w-[70%] p-4 font-Roboto focus:outline-none" required/>
                </div>
                <div className="w-full h-[10%] flex justify-between items-center mb-4">
                    <label>Password</label>
                    <input type='password' value={formData.password} name='password' onChange={handleChange} placeholder="Type your password" minLength={8} className="w-[70%] p-4 font-Roboto focus:outline-none" required/>
                </div>
                <div className="w-[60%] h-[8%] flex justify-between items-center mb-0 ">
                    <input type='checkbox' checked={formData.agreed} name="agreed" onChange={handleChange} placeholder="Type your password"  minLength={8} className="p-4 font-Roboto accent-black focus:outline-none" required/>
                    <label>Agree with terms and conditions</label>
                </div>
                <button type='submit' className='p-3 font-Poppins bg-black text-white rounded-md w-[30%]'>Log in</button>
            </form>
        </div>
        <div className='w-full h-[100%] relative'>
            <img src={person} alt="person" className="w-full h-full object-cover mix-blend-luminosity"/>
            <div className="w-full  absolute top-3 left-0 flex justify-center items-center h-[20%]">
                <img src={logo} alt="logo" className='w-[20%] h-[60%] rounded-full object-cover'/>
            </div>
            <div className='w-full flex justify-center items-center absolute bottom-0 left-0 h-[20%]'>
                <span className="font-Poppins text-3xl font-bold text-white text-center">Welcome back to Restart Digital</span>
            </div>
        </div>
    </div>
</section>
  );
}

export default Login;
