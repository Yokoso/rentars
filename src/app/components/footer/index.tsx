import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';

const FooterContainer = styled.div`
    min-height: 20em;
    background-color: #1d2124;
    ${tw`
        flex
        min-w-full
        pt-4
        md:pt-12
        pb-1
        items-center
        justify-center
    `};
`;

const InnerContainer = styled.div`
    ${tw`
        flex
        w-full
        h-full
        max-w-screen-2xl
        lg:pl-12
        lg:pr-12
    `};
`;

const AboutContainer = styled.div`
    ${tw`
        flex
        flex-col
        mr-2
        md:mr-16
    `};
`;

const AboutText = styled.p`
    ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5
        mt-2
    `};
`;

const SectionContainer = styled.div`
    ${tw`
        flex
        flex-col
        mr-2
        md:mr-16
    `};
`;

const LinksList = styled.ul`
    ${tw`
        outline-none
        list-none
        flex
        flex-col
    `};
`;

const ListItem = styled.li`
    ${tw`
        mb-3
    `};

    & > a {
        ${tw`
            text-sm
            text-white
            transition-all
            hover:text-gray-400
        `};
    }
`;

const HeaderTitle = styled.h3`
    ${tw`
        text-2xl
        text-white
        font-bold
        mb-3
    `};
`;

const HorizontalContainer = styled.div`
    ${tw`
        flex
        items-center
    `};
`;

const RedIcon = styled.span`
    ${tw`
        w-9
        h-9
        rounded-full
        bg-red-500
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
    `};
`;

const SmallText = styled.h6`
    ${tw`
        text-white
        text-sm
    `};
`;

export function Footer() {
    return (
        <FooterContainer>
            <InnerContainer>
                <AboutContainer>
                    <Logo color='white' bgColor='dark' />
                    <AboutText>
                        Rentars is a Car renting and selling company located in many countries across the world which has high quality cars and top rated services.
                    </AboutText>
                </AboutContainer>

                <SectionContainer>
                    <HeaderTitle>Our links</HeaderTitle>
                    <LinksList>
                        <ListItem><a href="#">Home</a></ListItem>
                        <ListItem><a href="#">About us</a></ListItem>
                        <ListItem><a href="#">Services</a></ListItem>
                        <ListItem><a href="#">Models</a></ListItem>
                        <ListItem><a href="#">Blog</a></ListItem>
                    </LinksList>
                </SectionContainer>

                <SectionContainer>
                    <HeaderTitle>Our links</HeaderTitle>
                    <LinksList>
                        <ListItem><a href="#">FAQ</a></ListItem>
                        <ListItem><a href="#">Contact us</a></ListItem>
                        <ListItem><a href="#">Support</a></ListItem>
                        <ListItem><a href="#">Privacy Policy</a></ListItem>
                        <ListItem><a href="#">Terms &amp; conditions</a></ListItem>
                    </LinksList>
                </SectionContainer>

                <SectionContainer>
                    <HeaderTitle>Call now</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </RedIcon>
                        <SmallText>+48 876 362 746</SmallText>
                    </HorizontalContainer>
                </SectionContainer>

                <SectionContainer>
                    <HeaderTitle>Mail</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </RedIcon>
                        <SmallText>info@rentars.com</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
            </InnerContainer>
        </FooterContainer>
    );
}