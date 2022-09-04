import React ,{ useEffect, useState} from "react"; 
import aqi from "../images/aqi.png";
import humidity from "../images/humidity.png";
import temp from "../images/temp.png";
import wind from "../images/wind.png";


function Body (props) {
    let url = `http://127.0.0.1:8000/data/${props.City}`
    if (url === 'http://127.0.0.1:8000/data/undefined'){
        url="http://127.0.0.1:8000/data/sambalpur"
    }
       
        console.log(url)
        const [data,setData] = useState([])
     useEffect(() =>{
        fetch(url).then((result)=>{
            result.json().then((resp)=>{
                setData(resp)
            })
        })
     },[])
     console.warn(data)
    

    return(
            <>
                <div className=" bg-gray-900 h-screen relative   px-10 py-10 rounded-lg">
                    
                    <div className="flex justify-center ">
                    {data.map((item)=>
                    <div className="container h-32 w-3/6  relative mx-8 my-10">
                        <div className="flex justify-center ">
                        <div className=" px-2 py-1.5">
                            <img src={aqi} alt="Humidity" className=" h-28 w-28 " />
                        </div> 
                        <div>
                        <h1 className="font-bold text-blue-300 pl-2  font-poppins text-2xl"> Today's Air Quality</h1>
                        <h1 className=" text-white pl-10 text-5xl  font-poppins pt-2"> {item.PM25} </h1>
                        <h1 className=" text-white pl-5  font-poppins pt-2"> The Air Pollutant is PM 2.5  </h1>
                        </div>
                    </div>
                    </div>
                    )}
                    </div>
                    {data.map((items)=>
                    <div className="flex justify-center ">
                        
                    <div className="container h-72 w-44 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm mx-8 my-10">
                        <div className=' text-white '>
                            <h1 className="font-bold text-center  font-poppins text-blue-300 text-xl"> Temperature</h1>
                            <div className=" px-12 pt-2">
                            <img src={temp} alt="Temperature" className=" h-20 w-20 " />
                            </div> 
                            <h1 className=" text-center  font-poppins pt-4 text-4xl">{items.Max_temp} °C</h1>
                            <h1 className=" text-center  font-poppins pt-1 "> Maximum</h1>
                            <h1 className=" text-center  font-poppins text-4xl pt-1"> {items.Min_temp} °C</h1>
                            <h1 className=" text-center  font-poppins pt-1"> Minimum</h1>
                        </div>
                    </div>
                    <div className="container h-72 w-44 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm mx-8 my-10">
                        <div className='text-white'>
                            <h1 className="font-bold text-center text-blue-300  font-poppins "> Humidity</h1>
                            <div className=" px-12 pt-2">
                            <img src={humidity} alt="Humidity" className=" h-20 w-20 " />
                            </div>
                            <div className=" flex justify-center pt-5 ">
                            <h1 className="  font-poppins text-4xl">{items.Humidity}</h1>
                            <h1 className="  font-poppins pl-3 pt-1 text-2xl"> %</h1>
                            </div>
                            <h1 className=" text-center  font-poppins mx-2 px-3 pt-2 "> Humidity above 60 % affects our health</h1>
                        </div>
                    </div>
                    <div className="container h-72 w-44 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative  border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm mx-8 my-10">
                        <div className='text-white '>
                            <h1 className="font-bold text-center text-blue-300  font-poppins "> Wind Speed</h1>
                            <div className=" px-12 pt-2">
                            <img src={wind} alt="Wind Speed" className=" h-20 w-20 " />
                            </div>
                            <div className=" flex justify-center pt-3 ">
                            <h1 className="  font-poppins text-4xl">{items.Wind_speed}</h1>
                            <h1 className="  font-poppins pl-3 pt-2"> km/h</h1>
                            </div>
                            <h1 className=" text-center  font-poppins "> Normal</h1>
                            <div className=" flex justify-center pt-1 ">
                            <h1 className="  font-poppins text-4xl">{items.Suspended_windspeed}</h1>
                            <h1 className="  font-poppins pl-3 pt-2"> km/h</h1>
                            </div>
                            
                            <h1 className=" text-center  font-poppins"> Suspended wind speed</h1>
                    
                        </div>

                    </div>
                    </div>
                    )} 
                </div>
                
            </>

    )

}

export default Body