import React from 'react';
import styled from 'styled-components';
import { Container } from '../atoms';

const DoubleContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Right = styled.div`
    width: 50%
`;

const Left = styled.div`
    width: 50%
`;

const DoubleBlock = (right, left) => {
    return (
        <DoubleContainer>
            <Right>
                {right}
            </Right>
            <Left>
                {left}
            </Left>
        </DoubleContainer>
    );
};

export default DoubleBlock;