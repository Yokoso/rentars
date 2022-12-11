import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BookCard } from '../../components/bookCard';
import { Footer } from '../../components/footer';
import { Marginer } from '../../components/marginer';
import { Navbar } from '../../components/navbar';
import { AboutUs } from './aboutUs';
import { BookingSteps } from './bookingSteps';
import { FeaturedCars } from './featuredCars';
import { TopSection } from './topSection';

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function HomePage(){
    return <PageContainer>
        <Navbar />
        <TopSection />
        <Marginer margin="4em" direction="vertical" />
        <BookCard />
        <Marginer margin="10em" direction="vertical" />
        <BookingSteps />
        <Marginer margin="8em" direction='vertical' />
        <AboutUs />
        <Marginer margin="8em" direction='vertical' />
        <FeaturedCars />
        <Footer />
    </PageContainer>
}