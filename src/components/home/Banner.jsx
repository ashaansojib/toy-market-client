import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="hero max-h-screen lg:h-[450px] md:flex" style={{ backgroundImage: "url('/banner.jpg')" }}>
            <div className="my-container">
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className=' text-neutral-content md:w-[350px] p-4 bg-slate-950 text-center'>
                    <h1 className="text-5xl font-bold">NEW ARRIVAL</h1>
                    <p className="py-6">Get Up To 50% Off *Only</p>
                    <button className="my-btn ">Buy Now!</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;