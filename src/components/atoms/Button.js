import { Link } from 'react-router-dom'
import styled from 'styled-components';

export const Button = styled(Link)`

    //todo: theme
    background: ${({ primary }) => (primary ? `#156963` : `transparent`)} ;
    white-space: nowrap;
    outline: none;
    border: 1px solid ${props => props.theme.colors.primary} ;;
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