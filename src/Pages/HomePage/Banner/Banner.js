import React from 'react';
import banner from "../../../images/bannerbackground.png";
import "./Banner.css";

const Banner = () => {
    return (
        <div className='banner img-fluid' style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className='mt-3 text-success text-center'>
                <h1>Meet Your Meal</h1>
                <h1>Deal Your Bill</h1>
            </div>
            <div className='mt-3 text-success text-center'>
                <input className="search-input mt-3" type="text" name="search" id="" placeholder='Type here to Search' />
                <input className="search-btn mt-3" type="button" value="Search" />
            </div>
        </div>
    );
};

export default Banner;