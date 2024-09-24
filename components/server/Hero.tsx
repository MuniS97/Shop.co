import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';
import { Button } from '../ui/button';

interface Props {
    className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("w-full h-full min-h-[600px] bg-no-repeat bg-center bg-[url('/images/hero.png')]", className)}>
            <Container className='text-left pt-20'>
                <div className='max-w-[470px] flex flex-col gap-8'>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary-600">
                        FIND CLOTHES THAT MATCH YOUR STYLE
                    </h1>
                    <p className='text-base text-black/60 font-normal'>
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <Button className='rounded-full py-4 px-16'>
                        Shop Now
                    </Button>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center w-full whitespace-nowrap">
                        <div>
                            <h3 className="text-4xl md:text-5xl font-bold text-black">200+</h3>
                            <p className="mt-2 text-gray-600">International Brands</p>
                        </div>
                        <div>
                            <h3 className="text-4xl md:text-5xl font-bold text-black">2,000+</h3>
                            <p className="mt-2 text-gray-600">High-Quality Products</p>
                        </div>
                        <div>
                            <h3 className="text-4xl md:text-5xl font-bold text-black">3,000+</h3>
                            <p className="mt-2 text-gray-600">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};
