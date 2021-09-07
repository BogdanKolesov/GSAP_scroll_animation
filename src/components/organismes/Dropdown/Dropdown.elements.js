import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Button } from '../../atoms';


export const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.primary};
    display: grid;
    align-items: center;
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const CloseIcon = styled(FaTimes)`
    color: ${props => props.theme.colors.accentText};
`;

export const DropdownWrapper = styled.div`

`;

export const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4, 60px);

    }
`;

export const DropdownLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    color: #fff;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        color: #000d1a;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const DropdownButton = styled(Button)`
    background: ${({ primary }) => (primary ? `#fff` : `transparent`)} ;
    color: ${props => props.theme.colors.text};
    &:hover{
        background-color: ${props => props.theme.colors.boder};
    }
`;