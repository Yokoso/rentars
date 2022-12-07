import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../components/responsive';

import JeepImg from '../../../assets/images/jeep.png';

const AboutUsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        2xl:justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
        bg-white

    `};
`;

const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -30px;

    img {
        width: auto;
        height: 100%;
    }

    @media (min-height: ${SCREENS.md}) {
        height: 28em;
    }
    @media (min-height: ${SCREENS.lg}) {
        height: 30em;
    }
    @media (min-height: ${SCREENS["2xl"]}) {
        height: 35em;
        margin-left: 0;
    }

    ${tw`

    `};
`;

const InfoContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `};
`;

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `};
`;

const InfoText = styled.p`
    ${tw`
        max-w-2xl
        text-xs
        md:text-base
        text-gray-500
        font-normal
        mt-4
    `};
`;

export function AboutUs() {
    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={JeepImg} alt="jeep" />
            </CarContainer>
            <InfoContainer>
                <Title>Feel The Best Experience With Our Rentars Deals.</Title>
                <InfoText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at scelerisque ante. Duis eu lorem viverra, eleifend sem maximus, vulputate lectus. Maecenas lobortis tellus et tellus lobortis, eget bibendum enim ultrices. Aliquam vitae orci sed dui ultrices consectetur. Maecenas et lectus eget neque tincidunt sagittis. Maecenas a auctor velit, nec egestas risus. Nulla molestie bibendum quam et aliquam. Nulla cursus cursus tristique. Quisque ut risus aliquet, sollicitudin nisl sed, finibus purus. Mauris odio odio, accumsan in urna sit amet, interdum interdum libero. Nunc iaculis tristique nisl, sit amet molestie turpis tincidunt in. Nunc a ex pretium, pellentesque tortor pharetra, tempor odio.
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    );
}