import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const FooterContainer = styled.div`
    min-height: 30em;
    ${tw`
        flex
        flex-wrap
        min-w-full
        bg-red-400
        pt-7
        pb-1
    `};
`;


export function Footer() {
    return (
        <FooterContainer>
            Footeer Container
        </FooterContainer>
    );
}