import React from 'react';
import { DropdownContainer, Icon, CloseIcon, DropdownWrapper, DropdownLink, DropdownMenu, BtnWrap, DropdownButton } from './Dropdown.elements';
import { headerData } from '../../../data/HeaderData';
import { Button } from '../../atoms';

const Dropdown = ({ toggle, isOpen }) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClock={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {headerData.map((item, index) => {
                        return (
                            <DropdownLink to={item.path} key={index}>
                                {item.label}
                            </DropdownLink>
                        )
                    })}
                </DropdownMenu>
                <BtnWrap>
                    <DropdownButton primary big to='/contact'>
                        Contact us!
                    </DropdownButton>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    );
};

export default Dropdown;