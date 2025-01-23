import React , { useState } from 'react';
import { Prop } from './Popup';
import axios from "axios";
import LoadingSpinner from '../Reusable/LoadingSpinner';


const Community: React.FunctionComponent<Prop> = ({ initial }) => {
    const [formData, setFormData] = useState({
        link: "",
        message: "",
        email: "",
      });
      const [ loaded , setLoaded ] = useState(false);
    
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try{
            setLoaded(true)
            e.preventDefault();
            console.log(formData);
            const response = await axios.post("http://localhost:4000/user/join/community" , formData , { withCredentials: true } )
            if(response.data){
                console.log("Form Data Submitted:", response.data);
                setSubmitted(true);
                setLoaded(true);
                
                
                setTimeout(()=>(
                    initial(false)
                ),3000)
            
            }
        }catch(err: unknown){
            console.log(err);
        }
        
    }
  return (
    <div className="w-[40%] mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
    <h2 className="text-2xl font-Lexend text-gray-700 text-center mb-4">
      Community Registration
    </h2>
    {submitted ? (
      <div className="text-center text-green-600">
        <p className='font-Lexend'>Thank you for registering! 🎉</p>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Link Input */}
        <div>
          <label htmlFor="link" className="block text-sm font-Poppins text-gray-700">
            Link
          </label>
          <input
            type="url"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="https://your-link.com"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            required
          />
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-sm font-Poppins text-gray-700">
            Brief Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write a brief message information about your community..."
            className="w-full resize-none mt-1 px-3 py-2 font-Poppins border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            rows={4}
            required
          ></textarea>
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-Poppins text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full mt-1 px-3 py-2 font-Poppins border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-black text-white font-Lexend px-6 py-2 rounded-lg hover:bg-gradient-to-r hover:from-gray-500 hover:to-black transition duration-300"
          >
            {
                loaded ? <LoadingSpinner/> : "Submit"
            }
          </button>
        </div>
      </form>
    )}
  </div>
  );
}

export default Community;


