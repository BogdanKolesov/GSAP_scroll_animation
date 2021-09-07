import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalTheme, GreenTheme } from '../../themes/';
import Header from '../../organismes/Header/';
import Hero from '../../organismes/Hero/';
import Preferences from '../../organismes/Preferences';
import Featured from '../../organismes/Featured';
import Relax from '../../organismes/Relax';
import GetFavourites from '../../organismes/GetFavourites/GetFavourites';
import Bottom from '../../organismes/Bottom/Bottom';


function App() {
    return (
        <ThemeProvider theme={GreenTheme}>
            <GlobalTheme />
            <Header />
            <Hero />
            <Preferences />
            <Featured />
            <Relax />
            <GetFavourites />
            <Bottom />
        </ThemeProvider>
    );
}

export default App;
