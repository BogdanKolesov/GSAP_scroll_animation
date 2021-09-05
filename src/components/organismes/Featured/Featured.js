import React from 'react';
import { FeaturedData } from '../../../data/FeaturedData';
import { FeaturedContainer, FeaturedHeaders, FeaturedTitle, FeaturedItems, FeaturedItem, FeaturedItemImg, FeaturedItemTitle, FeaturedItemPrice } from './Featured.elements';
import { Line } from '../../atoms';


const Featured = () => {
    return (
        <FeaturedContainer>
            <FeaturedHeaders>
                <FeaturedTitle>Featured Plants</FeaturedTitle>
                <Line />
            </FeaturedHeaders>
            <FeaturedItems>
                {FeaturedData.map((item, index) => (
                    <FeaturedItem key={index}>
                        <FeaturedItemImg src={item.image} alt={item.alt} />
                        <FeaturedItemTitle>{item.title}</FeaturedItemTitle>
                        <FeaturedItemPrice>{item.price}</FeaturedItemPrice>
                    </FeaturedItem>
                ))}
            </FeaturedItems>
        </FeaturedContainer>
    );
};

export default Featured;