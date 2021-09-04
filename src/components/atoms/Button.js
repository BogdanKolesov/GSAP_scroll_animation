import { Link } from 'react-router-dom'
import styled from 'styled-components';

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? `${props => props.theme.colors.primary}` : `${props => props.theme.colors.primary}`)} ;
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ big }) => (big ? '16px' : '14px')};
    color: ${props => props.theme.colors.accentText};
    font-size: ${({ big }) => (big ? '20px' : '14px')};
    margin: 10px;

    &:hover{
        transform: translateY(-2px);
    }
`;