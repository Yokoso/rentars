import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Car } from '../../components/car';
import { ICar } from '../../../typings/car';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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

export function FeaturedCars() {
    const [current, setCurrent] = useState(0);

    // temporary static car list
    const testCar1: ICar = {
        name: 'Audi S3 Car',
        thumbnailSrc: 'https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg',
        dailyPrice: 70,
        monthlyPrice: 1600,
        mileage: 10,
        gearType: 'Automatic',
        gasType: 'Petrol'
    };
    const testCar2: ICar = {
        name: 'Honda City Car',
        thumbnailSrc: 'https://images.dealer.com/ddc/vehicles/2019/Honda/Civic/Sedan/trim_Sport_1ef4cc/color/Modern%20Steel%20Metallic-GY-64,63,63-640-en_US.jpg',
        dailyPrice: 50,
        monthlyPrice: 1500,
        mileage: 20,
        gearType: 'Manual',
        gasType: 'Petrol'
    };
    const testCar3: ICar = {
        name: 'Volvo XC60',
        thumbnailSrc: 'https://images.dealer.com/ddc/vehicles/2023/Volvo/XC60%20Recharge%20Plug-In%20Hybrid/SUV/trim_T8_Plus_Bright_Theme_fba6a0/color/Silver%20Dawn%20Metallic-735-148,149,156-640-en_US.jpg?impolicy=resize&w=640',
        dailyPrice: 100,
        monthlyPrice: 2400,
        mileage: 10,
        gearType: 'Automatic',
        gasType: 'Electric'
    };

    const cars = [
        <Car { ...testCar1 } availability={true} />,
        <Car { ...testCar2 } availability={true} />,
        <Car { ...testCar3 } availability={true} />,
        <Car { ...testCar3 } availability={true} />,
        <Car { ...testCar1 } availability={true} />,
        <Car { ...testCar2 } availability={true} />,
    ];


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
                                        numberOfSlides: 1
                                    }
                                },
                            ]
                        }
                    }}
                />
                <Dots value={ current } onChange={ setCurrent } number={ cars.length } />
            </CarsContainer>
        </FeaturedCarsContainer>
    );
}