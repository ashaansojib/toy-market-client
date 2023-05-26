import React from 'react';
import Banner from './Banner';
import ShopCategory from './ShopCategory';
import ToyGallery from './ToyGallery';
import About from './About';
import AllCategory from './AllCategory';
import useTitle from '../../hooks/Title';

const Home = () => {
    useTitle("Home")
    return (
        <>
        <Banner></Banner>
        <ToyGallery></ToyGallery>
        <ShopCategory></ShopCategory>
        <About></About>
        <AllCategory></AllCategory>
        </>
    );
};

export default Home;