import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Car } from '../../components/car';
import { ICar } from '../../../typings/car';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../components/responsive';
import carServices from '../../services/carServices';
import { Dispatch } from '@reduxjs/toolkit';
import { GetCars_cars } from '../../services/carServices/__generated__/GetCars';
import { setFeaturedCars } from './slice';
import { useDispatch } from 'react-redux';

const FeaturedCarsContainer = styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pr-0
        md:pl-0
        mb-10
    `};
`;

const Title = styled.h2`
    ${tw`
        text-3xl
        lg:text-5xl
        text-black
        font-extrabold
    `};
`;

const CarsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `};
`;

const actionDispatch = (dispatch: Dispatch) => ({
    setFeaturedCars: (cars: GetCars_cars[]) => dispatch(setFeaturedCars(cars)),
});

export function FeaturedCars() {
    const [current, setCurrent] = useState(0);

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

    const { setFeaturedCars } = actionDispatch(useDispatch());

    const fetchFeaturedCars = async () => {
        const cars = await carServices.getCars().catch(err => {
            console.log("Error: ", err);
        })

        console.log("Cars: ", cars);
    };


    useEffect(() => {
        fetchFeaturedCars();
    }, []);

    const cars = [
        <Car 
            availability={false} 
            thumbnailSrc={''} 
            name={''} mileage={0} 
            gearType={''} dailyPrice={0} 
            monthlyPrice={0} gasType={''} 
        />,
    ];

    const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

    return (
        <FeaturedCarsContainer>
            <Title>Explore Our Top Deals</Title>
            <CarsContainer>
                <Carousel value={ current } onChange={ setCurrent } 
                    slides={ cars }
                    plugins={[
                        "clickToChange",
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3,
                            },
                        },
                    ]}
                    breakpoints={{
                        640: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                },
                            ]
                        },
                        900: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 2
                                    }
                                },
                            ]
                        }
                    }}
                />
                <Dots value={ current } onChange={ setCurrent } 
                    number={ numberOfDots } />
            </CarsContainer>
        </FeaturedCarsContainer>
    );
}