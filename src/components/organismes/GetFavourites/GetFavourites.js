import React, { useEffect, useRef } from 'react';
import { GetFavouritesContainer, GetFavouritesContent, GetFavouritesText, GetFavouritesTitle, GetFavouritesSubtitle, GetFavouritesButton, GetFavouritesImage } from './GetFavourites.elements';
import { gsap, Power1 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GetFavourites = () => {

    const t1 = gsap.timeline({ delay: 0.3 });
    const favouritesRef = useRef()

    useEffect(() => {
        t1.from(
            favouritesRef.current,
            { x: 15, opacity: 0, ease: Power1.easeOut, delay: 0.1 },
            ScrollTrigger.create({
                trigger: favouritesRef.current,
                animation: t1,
                toggleActions: "play pause resume reset"
            })

        )

    });

    return (
        <GetFavouritesContainer ref={favouritesRef}>
            <GetFavouritesContent>
                <GetFavouritesText>
                    <GetFavouritesTitle>Get your favourites plant on our shop now</GetFavouritesTitle>
                    <GetFavouritesSubtitle>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, ea?</GetFavouritesSubtitle>
                    <GetFavouritesButton primary to="/plants">Visit Shop</GetFavouritesButton>
                </GetFavouritesText>
                <GetFavouritesImage src={require("../../../assets/images/GetFavourites/image.png").default} alt="Get Favourites!" />
            </GetFavouritesContent>
        </GetFavouritesContainer>
    );
};

export default GetFavourites;