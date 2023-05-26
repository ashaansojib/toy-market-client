import React from 'react';

const About = () => {
    return (
        <div className='my-container'>
            <div className='lg:grid grid-cols-2 items-center gap-10 p-4'>
                <div className='relative'>
                    <img src="https://live.themewild.com/motex/assets/img/about/01.png" alt="" />
                    <div className='absolute top-0 left-0 w-48 bg-gray-900 text-white p-2 rounded-md'>
                        <h2>10 Years Of Free Service</h2>
                    </div>
                </div>
                <div className='lg:space-y-4'>
                    <p className='text-xl font-medium'>ABOUT US</p>
                    <h1 className='text-6xl font-bold'>World Largest <span className='text-[#ef1d26]'>Car Dealer</span> Marketplace.</h1>
                    <p className='text-gray-800'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                    <div>
                        <p>At vero eos et accusamus et iusto odio.</p>
                        <p>Established fact that a reader will be distracted.</p>
                        <p>Sed ut perspiciatis unde omnis iste natus sit.</p>
                    </div>
                    <button className='active'>Discover More</button>
                </div>
            </div>
        </div>
    );
};

export default About;