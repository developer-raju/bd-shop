import React from 'react';
import { Link } from 'react-router-dom';
const bannerStyle = {
    background: 'url(https://i.ibb.co/Vq53JB5/teemu-paananen-OOE4x-An-Bh-Ko-unsplash11.jpg) no-repeat top center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
}
const Banner = () => {
    return (
        <div style={bannerStyle} className="min-h-screen text-center flex items-center justify-center">
            <div>
                  <h1  className="text-white text-4xl lg:text-6xl capitalize font-bold animate__animated animate__zoomInDown">Your Travels <br /> is our Priority</h1>
                  <Link to="/" className="uppercase transition-all duration-300 ease-linear mt-5 no-underline py-2 px-8 text-xl text-gray-100 hover:text-gray-700 hover:bg-yellow-200 border-2 border-white inline-block">Read more <i class="fas fa-angle-right"></i></Link>
            </div>
        </div>
    );
};

export default Banner;