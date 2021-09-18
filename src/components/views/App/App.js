import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalTheme, GreenTheme } from '../../themes/';
import Header from '../../organismes/Header/';
import Bottom from '../../organismes/Bottom/Bottom';
import Dropdown from '../../organismes/Dropdown';
import Copyright from '../../organismes/Copyright';
import HomePage from '../HomePage';
import ContactsPage from '../ContactsPage';
import FloversPage from '../FloversPage';
import AboutPage from '../AboutPage';
import PhotoPage from '../PhotoPage';



function App() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Router>
            <ThemeProvider theme={GreenTheme}>
                <GlobalTheme />
                <Header toggle={toggle} />
                <Dropdown isOpen={isOpen} toggle={toggle} />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/photo" exact component={PhotoPage} />
                    <Route path="/flovers" exact component={FloversPage} />
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/contacts" exact component={ContactsPage} />
                </Switch>
                <Bottom />
                <Copyright />
            </ThemeProvider>
        </Router>
    );
}

export default App;
