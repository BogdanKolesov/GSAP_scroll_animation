import React from 'react';
import Hero from '../../organismes/Hero/';
import Preferences from '../../organismes/Preferences';
import Featured from '../../organismes/Featured';
import Relax from '../../organismes/Relax';
import GetFavourites from '../../organismes/GetFavourites/GetFavourites';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Preferences />
            <Featured />
            <Relax />
            <GetFavourites />
        </>
    );
};

export default HomePage;