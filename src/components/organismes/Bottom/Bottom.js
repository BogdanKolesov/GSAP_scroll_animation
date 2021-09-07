import React from 'react';
import { BottomContainer, BottomContent, BottomAdress, BottomLogo, BottomAdressText, BottomAdressTextTitle, BottomAdressTextDiscription, BottomLinks, BottomLinksCol, BottomLinkColTitle, BottomLinksItems, BottomLink, BottomForm, BottomFormTitle, BottomFormInput, BottomFormButton } from './Bottom.elements';

const Bottom = () => {
    return (
        <BottomContainer>
            <BottomContent>
                <BottomAdress>
                    <BottomLogo>
                        plantku
                    </BottomLogo>
                    <BottomAdressText>
                        <BottomAdressTextTitle>
                            Plantku House
                        </BottomAdressTextTitle>
                        <BottomAdressTextDiscription>
                            Russia, Saint-Petersburg, Borovaya st., 9, 30
                        </BottomAdressTextDiscription>
                    </BottomAdressText>
                </BottomAdress>
                <BottomLinks>
                    <BottomLinksCol>
                        <BottomLinkColTitle>
                            Perusahaan
                        </BottomLinkColTitle>
                        <BottomLinksItems>
                            <BottomLink to="/">Tentang Kami</BottomLink>
                            <BottomLink to="/">Hubungi Kami</BottomLink>
                        </BottomLinksItems>
                    </BottomLinksCol>
                    <BottomLinksCol>
                        <BottomLinkColTitle>
                            Produk
                        </BottomLinkColTitle>
                        <BottomLinksItems>
                            <BottomLink to="/">Tanaman</BottomLink>
                            <BottomLink to="/">Tanaman Lain</BottomLink>
                        </BottomLinksItems>
                    </BottomLinksCol>
                </BottomLinks>
                <BottomForm>
                    <BottomFormTitle>Berlangganan Email Kami</BottomFormTitle>
                    <BottomFormInput type="text" placeholder="Masukan Alamat Email" />
                    <BottomFormButton primary type="submit">Sublit</BottomFormButton>
                </BottomForm>
            </BottomContent>
        </BottomContainer>
    );
};

export default Bottom;