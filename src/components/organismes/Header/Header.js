import React from 'react';
import { HeaderContainer, HeaderContent, HeaderLinks, HeaderLink, HeaderButtons, HeaderLogo, MenuBars } from './Header.elements';
import { Button } from '../../atoms';
import { headerData } from '../../../data/HeaderData';

const Header = ({ toggle }) => {
    return (
        <HeaderContainer>
            <HeaderLogo>Plants</HeaderLogo>
            <MenuBars onClick={toggle} />
            <HeaderContent >
                {headerData.map((item, index) => (
                    <HeaderLinks>
                        <HeaderLink to={item.path} key={index}>{item.label}</HeaderLink>
                    </HeaderLinks>
                ))}

                <HeaderButtons>
                    <Button to="/flovers">
                        View plants
                    </Button>
                    <Button to="contacts" primary>
                        Just do it!
                    </Button>
                </HeaderButtons>
            </HeaderContent>
        </HeaderContainer >
    );
};

export default Header;