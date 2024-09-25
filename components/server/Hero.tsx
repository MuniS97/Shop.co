import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';
import { Button } from '../ui/button';

interface Props {
    className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                "w-full h-full min-h-[600px] bg-no-repeat bg-center bg-[url('/images/hero.png')] md:bg-cover",
                className
            )}
        >
            <Container className="text-left pt-10 md:pt-20">
                <div className="max-w-[90%] md:max-w-[470px] flex flex-col gap-4 md:gap-8 sm:ml-0 mx-auto">
                    <h1 className="text-2xl md:text-5xl font-extrabold tracking-tight text-primary-600">
                        FIND CLOTHES THAT MATCH YOUR STYLE
                    </h1>
                    <p className="text-sm md:text-base text-black/60 font-normal">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <Button className="rounded-full py-3 px-8 md:py-4 md:px-10">
                        Shop Now
                    </Button>
                    <div className="flex flex-col sm:flex-row justify-start items-start md:items-center gap-4 md:gap-10 whitespace-nowrap">
                        <div>
                            <h3 className="text-2xl md:text-4xl font-bold text-black">200+</h3>
                            <p className="mt-1 md:mt-2 text-sm md:text-lg text-gray-600">
                                International Brands
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-4xl font-bold text-black">2,000+</h3>
                            <p className="mt-1 md:mt-2 text-sm md:text-lg text-gray-600">
                                High-Quality Products
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-4xl font-bold text-black">3,000+</h3>
                            <p className="mt-1 md:mt-2 text-sm md:text-lg text-gray-600">
                                Happy Customers
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

    );
};
