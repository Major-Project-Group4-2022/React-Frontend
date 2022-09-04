import React from "react";
import './App.css';
import Nav from './components/Navbar';
import Body from "./components/Body";
import { useParams } from 'react-router-dom';

function Home() {
    const {City} = useParams();

    return(
            <>

            <Nav/>
            <Body City={City}/>  
            </>


        )

}

export default Home