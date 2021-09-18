import React from 'react';
import GetFavourites from '../../organismes/GetFavourites/GetFavourites';
import Preferences from '../../organismes/Preferences';

const AboutPage = () => {
    return (
        <>
            <Preferences />
            <GetFavourites />
        </>
    );
};

export default AboutPage;