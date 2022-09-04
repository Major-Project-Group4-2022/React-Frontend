import './App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signup () {

    const [FirstName,setFirstName] = useState("");
    const [LastName,setLastName] = useState("");
    const [MobileNo,setMobile] = useState("");
    const [EmailId,setEmail] = useState("");
    const [UserName,setUsername] = useState("");
    const [Password,setPassword] = useState("")
    const navigate = useNavigate();
  
    async function register(){
      
      let userdata = {FirstName,LastName,MobileNo,EmailId,UserName,Password}
      //console.log(userdata);

      let result = await fetch("https://aqidjango.herokuapp.com/signup/",{
         
          method : 'POST',
          headers : {
            "Content-type" : "application/json",
            "Accept" : "application/json"
          },
          body : JSON.stringify(userdata)
      });
       
        result = await result.json();
        console.log("result",result)

        navigate('/login')

    }

      return (
          <>
          <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center items-center">
            <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
            <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
            
              <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
                <div  className= 'h-full flex flex-col justify-evenly items-center py-5'>
                <form className='h-full flex flex-col justify-evenly items-center'>
                  <div className='text-white font-poppins text-2xl tracking-widest'>SignUp</div>
                  <input type="text" value={FirstName} onChange={(e)=>setFirstName( e.target.value)} placeholder='First Name' className='input-text'/>
                  <input type="text" value={LastName} onChange={(e)=>setLastName( e.target.value)} placeholder='Last Name' className='input-text'/>
                  <input type="text" value={MobileNo} onChange={(e)=>setMobile( e.target.value)} placeholder='Mobile' className='input-text'/>
                  <input type="text" value={EmailId} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className='input-text'/>
                  <input type="text" value={UserName} onChange={(e)=>setUsername(e.target.value)} placeholder='username' className='input-text'/>
                  <input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' className='input-text'/>  
                </form>
                <button onClick={register} className='cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 '> Submit </button>
              </div>
              </div>
            
          </div>
          </>
         );  
  }


  export default Signup;
