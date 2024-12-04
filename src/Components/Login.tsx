import React , { useState }  from 'react';
import axios from "axios";




type User = {
  email:string;
  password:string;
  agreed:boolean;
}

const Login: React.FC = () => {
  const [ status , setStatus ] = useState<string>("")
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
      setState(true);
    } else {
      setState(false); 
    }
  }

const handleSubmit = async(e:any)=>{
  try{
    e.preventDefault();
    const response = await axios.post("" , formData , { withCredentials: true });//insert backend url here
    if(response.data){
    setStatus(response.data.message);
  }
  }catch(err:any){
    console.log(err);
  }
  
  
}

  return (
    <section className="w-full h-80vh flex justify-center items-center">
      <div className="2xl:w-[45%] xl:w-[45%] lg:w-[40%] md:w-full sm:w-full xs:w-full h-[80%] flex justify-center items-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse">
        <div className='w-full bg-gray-50 h-full p-4 rounded-lg'>
            
            <form className="w-full h-full gap-4 p-3 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
              <h1 className='font-Poppins text-3xl'>Sign in</h1>
              <span className='font-Poppins'>Explore all what Restart Digital has to offer by signing in to our services.</span>
              <div>
                <span className='text-red-500 font-Poppins'>{status}</span>
              </div>
                <div className="w-full h-full flex-col flex justify-start items-center 2xl:mb-4 xl:mb-4 lg:mb-8 md:mb-10 sm:mb-10 xs:mb-10">
                    <label className='font-Poppins'>Email:</label>
                    <input type='email' value={formData.email} name="email" onChange={handleChange} placeholder="Type your email" className="w-[70%] 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3 xs:p-3 font-Poppins focus:outline-none" required/>
                </div>
                <div className="w-full h-full flex-col flex justify-start items-center">
                    <label className='font-Poppins'>Password:</label>
                    <input type='password' value={formData.password} name='password' onChange={handleChange} placeholder="Type your password" minLength={8}  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters" className="w-[70%] 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3 xs:p-3 font-Poppins focus:outline-none" required/>
                </div>
                
                <button disabled={state} type='submit' className={`p-3 font-Poppins ${state ? 'bg-black' : 'bg-stone-300'} text-white rounded-md w-[30%]`}>Log in</button>
            </form>
        </div>
        
      </div>
</section>
  );
}

export default Login;
