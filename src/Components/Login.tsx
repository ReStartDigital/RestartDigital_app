import React , { useState }  from 'react';
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
  const [ state , setState ] = useState<boolean>(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const { value, name , checked , type} = e.target;
    setformData({
     ...formData,
      [name]:type === "checkbox" ? checked : value,
    })
    if (checked && name && value){
      setState(false);
    }

    if (formData.email && formData.password.length >= 8 && formData.agreed) {
      setState(false); // Enable the button
    } else {
      setState(true); // Keep button disabled
    }
  }

const handleSubmit = async(e:any)=>{
  try{
    e.preventDefault();
    const response = await axios.post("" , formData , { withCredentials: true });//insert backend url here
    if(response.data){
    toast.success("logged in sucessfully");
  }
  }catch(err:any){
    console.log(err);
  }
  
  
}

  return (
    <section className="w-full h-90vh flex justify-center items-center">
      <Toaster position='top-right'/>
      <div className="2xl:w-[75%] bg-white xl:w-[75%] lg:w-[80%] md:w-full sm:w-full xs:w-full h-[70%] mt-32 flex justify-center items-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse">
        <div className='w-full bg-gray-200 h-full p-4'>
            
            <form className="w-full h-full gap-2 p-3 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
              <h1 className='font-Poppins text-3xl font-bold text-center mb-4'>Sign in</h1>
                <div className="w-full h-[10%] flex justify-between items-center 2xl:mb-4 xl:mb-4 lg:mb-8 md:mb-10 sm:mb-10 xs:mb-10">
                    <label className='font-Poppins'>Email:</label>
                    <input type='email' value={formData.email} name="email" onChange={handleChange} placeholder="Type your email" className="w-[70%] 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3 xs:p-3 font-Poppins focus:outline-none" required/>
                </div>
                <div className="w-full h-[10%] flex justify-between items-center mb-4">
                    <label className='font-Poppins'>Password:</label>
                    <input type='password' value={formData.password} name='password' onChange={handleChange} placeholder="Type your password" minLength={8}  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters" className="w-[70%] 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3 xs:p-3 font-Poppins focus:outline-none" required/>
                </div>
                
                <button disabled={state} type='submit' className={`p-3 font-Poppins ${state ? 'bg-black' : 'bg-stone-300'} text-white rounded-md w-[30%]`}>Log in</button>
            </form>
        </div>
        <div className='w-full 2xl:h-full xl:h-full lg:h-full md:h-[80%] sm:h-[80%] xs:h-[80%] h-[100%] relative'>
            <img src={person} alt="person" className="w-full h-full object-cover mix-blend-luminosity"/>
            <div className='w-full flex justify-center items-center absolute bottom-0 left-0 h-[20%]'>
                <span className="font-Poppins text-3xl font-bold text-white text-center">Welcome back to Restart Digital</span>
            </div>
        </div>
      </div>
</section>
  );
}

export default Login;
