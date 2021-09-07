import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Wrapper } from '../../atoms';
import { FaBars, FaCross } from 'react-icons/fa';

export const HeaderContainer = styled(Container)`
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    background: rgba(10, 110, 47, 0.8);
    padding-left: 15px;
    padding-right: 15px;
`;

export const HeaderLogo = styled.h2`
    font-size: 2rem;
    color: ${props => props.theme.colors.accentText};
`;

export const HeaderContent = styled(Wrapper)`
    width: auto;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const HeaderLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;

export const HeaderLink = styled(Link)`
    color: ${props => props.theme.colors.accentText};
    margin: 5px;
`;

export const HeaderButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
        Button{
            margin: 15px;
        }
`;

export const MenuBars = styled(FaBars)`
    display: none;
    color: ${props => props.theme.colors.accentText};

    @media screen and (max-width: 768px){
        display: block;
        box-sizing: contain;
        height: 30px;
        width: 30px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 50%);
    }
`;