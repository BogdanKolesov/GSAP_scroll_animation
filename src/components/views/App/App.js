import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalTheme, GreenTheme } from '../../themes/';
import Header from '../../organismes/Header/';
import Hero from '../../organismes/Hero/';
import Preferences from '../../organismes/Preferences';
import Featured from '../../organismes/Featured';
import Relax from '../../organismes/Relax';


function App() {
    return (
        <ThemeProvider theme={GreenTheme}>
            <GlobalTheme />
            <Header />
            <Hero />
            <Preferences />
            <Featured />
            <Relax />
        </ThemeProvider>
    );
}

export default App;
