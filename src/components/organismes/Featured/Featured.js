import React, { useEffect, useRef } from 'react';
import { FeaturedData } from '../../../data/FeaturedData';
import { FeaturedContainer, FeaturedHeaders, FeaturedTitle, FeaturedItems, FeaturedItem, FeaturedItemImg, FeaturedItemTitle, FeaturedItemPrice } from './Featured.elements';
import { Line } from '../../atoms';
import { gsap, Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline({ delay: 0.3 });


const Featured = () => {
    const featuredRef = useRef()

    useEffect(() => {
        t1.from(featuredRef.current,
            { y: 15, opacity: 0, ease: Power4.easeOut, delay: 0.1 },
            ScrollTrigger.create({
                trigger: featuredRef.current,
                animation: t1,
                toggleActions: "restart"

            })
        );
    });
    return (
        <FeaturedContainer ref={featuredRef}>
            <FeaturedHeaders>
                <FeaturedTitle>Featured Plants</FeaturedTitle>
                <Line />
            </FeaturedHeaders>
            <FeaturedItems>
                {FeaturedData.map((item, index) => (
                    <FeaturedItem key={index}>
                        <FeaturedItemImg src={item.image} alt={item.alt} />
                        <FeaturedItemTitle to={item.link}>{item.title}</FeaturedItemTitle>
                        <FeaturedItemPrice>{item.price}</FeaturedItemPrice>
                    </FeaturedItem>
                ))}
            </FeaturedItems>
        </FeaturedContainer>
    );
};

export default Featured;