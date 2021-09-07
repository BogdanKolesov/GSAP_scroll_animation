import React from 'react';
import { GetFavouritesContainer, GetFavouritesContent, GetFavouritesText, GetFavouritesTitle, GetFavouritesSubtitle, GetFavouritesButton, GetFavouritesImage } from './GetFavourites.elements';

const GetFavourites = () => {
    return (
        <GetFavouritesContainer>
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