import React from 'react';
import { Link } from 'react-router-dom';
import HospitalBannerImage from '../../../images/Three-Musketeers.jpg';

const hospitalBanner = {
    background: `url(${HospitalBannerImage}) top left no-repeat`,
    minHeight: '500px',
    backgroundSize: 'cover'
}
const Banner = () => {
    return (
        <div className="">
            <div>
                <p className='text-2xl pt-5 text-center text-4xl font-bold text-purple-500'>About Us</p> <br />

                <p className='mx-10 text-2xl text-justify text-gray-500'><span className='text-red-500 text-3xl'><i>Safe Journey</i></span> is a travels or tour agency in Bangladesh. Extraordinary crimes against the people and the state had to be avenged by agents extraordinary. Two such people are John Steed, top professional; and his partner, Emma Peel, talented amateur… otherwi. Extraordinary crimes against the people and the state had to be avenged by agents extraordinary. Two such people are John Steed, top professional; and his partner, Emma Peel, talented amateur… otherwi. Extraordinary crimes against the people and the state had to be avenged by agents extraordinary. Two such people are John Steed, top professional; and his partner, Emma Peel, talented amateur… otherwi. Extraordinary crimes against the people and the state had to be avenged by agents extraordinary. Two such people are John Steed, top professional; and his partner, Emma Peel, talented amateur… otherwi. Extraordinary crimes against the people and the state had to be avenged by agents extraordinary. Two such people are John Steed, top professional; and his partner, Emma Peel, talented amateur… otherwi. Extraordinary crimes against the people and the state had to be avenged by agents extraordinary. Two such people are John Steed, top professional; and his partner, Emma Peel, talented amateur… otherwi</p>
            </div>
        </div>
    );
};

export default Banner;