import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalTheme, GreenTheme } from '../../themes/';
import Header from '../../organismes/Header/';
import Hero from '../../organismes/Hero/';


function App() {
    return (
        <ThemeProvider theme={GreenTheme}>
            <GlobalTheme />
            <Header />
            <Hero />
        </ThemeProvider>
    );
}

export default App;
