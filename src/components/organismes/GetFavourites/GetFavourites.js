import React from 'react';
import { GetFavouritesContainer, GetFavouritesContent, GetFavouritesText, GetFavouritesTitle, GetFavouritesSubtitle, GetFavouritesImage } from './GetFavourites.elements';

const GetFavourites = () => {
    return (
        <GetFavouritesContainer src={require("../../../assets/images/GetFavourites/").default} alt="Get Favourites!">
            <GetFavouritesContent>
                <GetFavouritesText>
                    <GetFavouritesTitle>Text</GetFavouritesTitle>
                    <GetFavouritesSubtitle>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, ea?</GetFavouritesSubtitle>
                </GetFavouritesText>
                <GetFavouritesImage src={require("../../../assets/images/GetFavourites/image.png").default} alt="Get Favourites!" />
            </GetFavouritesContent>
        </GetFavouritesContainer>
    );
};

export default GetFavourites;