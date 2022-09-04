import '../App.css';
import React , { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
 

function Nav  ({setData}) {
    let [open,setOpen]=useState(false);
    const [City,setCity] = useState("");
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    
    function logout(){
        localStorage.clear();
        navigate('/login')
    }

     function Submit() {

        let citydata = {City}
         
          navigate('/Home/'+citydata.City)
          window.location.reload(false)
         
      }

  return (
    <>
    <div className='px-4 py-4 bg-gray-900 text-white flex justify-between border pr-1 rounded-lg'>
        <div className='md:flex font-bold text-3xl cursor-pointer flex items-center font-[Poppins] text-white'>
        <h1 className='pl-14 text-xl  hover:text-gray-400'>Weather App</h1>
        </div>
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
        < div className={`md:flex md:items-center mr-10 md:pb-0 pb-8 pt-3 absolute mt-0 md:static bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
            <ul className='md:flex'>
                <li className='mr-5 px-4 py-1 hover:text-gray-400 duration-500 cursor-pointer'>
                    Home
                </li>
                <li className='mr-5 px-4 py-1 hover:text-gray-400 duration-500 cursor-pointer'>
                    About
                </li>
                <li className='mr-5 px-4 py-1 hover:text-gray-400 duration-500 cursor-pointer'>
                    Contact
                </li>
                <li className='mr-5 px-4 py-1 hover:text-gray-400 duration-500 cursor-pointer'>
                    { auth ? <button onClick={logout}> Logout </button> : navigate('/login')}
                
                </li>
            </ul>
    
        
            <input type='Text' value={City} onChange={(e)=>setCity(e.target.value)} placeholder='Search city....' className='text-black border rounded-full px-7 py-1 '/>
            <button onClick={Submit} className=' rounded-full ml-2 px-3 py-1'>
            <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
            </button>
        
        </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default Nav
