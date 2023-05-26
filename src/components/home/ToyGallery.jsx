import React from 'react';

const ToyGallery = () => {
    return (
        <div className='md:grid md:grid-cols-3 lg:grid-cols-5 my-container justify-center items-center p-4 gap-4'>
            <div className='md:text-center py-4'>
                <div className='category-image'>
                    <div className="category-cart">
                        <img className="hover:rotate-12 hover:transition-all hover:duration-500 transform rotate-0 transition-all duration-500"
                            src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop1/img/p/2/8/1/281-home_default.jpg" alt="" />
                    </div>
                </div>
                <h2 className='font-medium text-xl'>Sports Toy Car</h2>
            </div>
            <div className='md:text-center py-4'>
                <div className='category-image'>
                    <div className="category-cart">
                        <img className="hover:rotate-12 hover:transition-all hover:duration-500 transform rotate-0 transition-all duration-500"
                            src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop1/img/p/2/7/5/275-large_default.jpg" alt="" />
                    </div>
                </div>
                <h2 className='font-medium text-xl'>Fire Truck</h2>
            </div>
            <div className='md:text-center py-4'>
                <div className='category-image'>
                    <div className="category-cart">
                        <img className="hover:rotate-12 hover:transition-all hover:duration-500 transform rotate-0 transition-all duration-500"
                            src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop1/img/p/3/1/0/310-large_default.jpg" alt="" />
                    </div>
                </div>
                <h2 className='font-medium text-xl'>Premium Toy Car</h2>
            </div>
            <div className='md:text-center py-4'>
                <div className='category-image'>
                    <div className="category-cart">
                        <img className="hover:rotate-12 hover:transition-all hover:duration-500 transform rotate-0 transition-all duration-500"
                            src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop1/img/p/2/6/2/262-large_default.jpg" alt="" />
                    </div>
                </div>
                <h2 className='font-medium text-xl'>Mini Toy Car</h2>
            </div><div className='md:text-center py-4'>
                <div className='category-image'>
                    <div className="category-cart">
                        <img className="hover:rotate-12 hover:transition-all hover:duration-500 transform rotate-0 transition-all duration-500"
                            src="https://static-01.daraz.com.bd/p/03c648d75ec58a6eb4ef2e16bbbecec0.jpg" alt="" />
                    </div>
                </div>
                <h2 className='font-medium text-xl'>Ambulance Toy Car</h2>
            </div>
        </div>
    );
};

export default ToyGallery;