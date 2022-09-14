// import React, {useEffect} from 'react'
import MainImage from '../assets/main.jpeg'
import '../assets/main.css'
import {Helmet} from "react-helmet";


const Index = () => {
    // useEffect(()=> {
    //     // setTimeout
    // },[])

    return (

        <div className="main-container m-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Come Social</title>
                <link rel="canonical" href="https://www.comesocial.app" />
            </Helmet>
            <div className="section-1 ">
                <div className="image-wrapper">
                    <img src={MainImage} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Index