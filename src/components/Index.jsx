// import React, {useEffect} from 'react'
import MainImage from '../assets/main.jpeg'
import '../assets/main.css'


const Index = () => {
    // useEffect(()=> {
    //     // setTimeout
    // },[])

    return (

        <div className="main-container m-auto">
            <div className="section-1 ">
                <div className="image-wrapper">
                    <img src={MainImage} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Index