import React from 'react';
import { HeaderContainer, HeaderContent, HeaderLinks, HeaderLink, HeaderButtons, HeaderLogo } from './Header.elements';
import { Button } from '../../atoms';
import { headerData } from '../../../data/HeaderData';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLogo>Plants</HeaderLogo>
            <HeaderContent>
                {headerData.map((item, index) => (
                    <HeaderLinks>
                        <HeaderLink to={item.path} key={index}>{item.label}</HeaderLink>
                    </HeaderLinks>
                ))}

                <HeaderButtons>
                    <Button>
                        View plants
                    </Button>
                    <Button primary>
                        Just do it!
                    </Button>
                </HeaderButtons>
            </HeaderContent>
        </HeaderContainer >
    );
};

export default Header;