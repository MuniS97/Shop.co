import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Props {
    className?: string;
    title: string;
    rating: number;
    price: {
        new: number;
        old: number;
    };
    image: string;
}

export const ProductItem: React.FC<Props> = ({ className, image, price, rating, title }) => {
    return (
        <div className={cn("flex justify-start items-start flex-col gap-1 text-left w-full", className)}>
            <div className="w-full bg-[#f0eeed] rounded-3xl h-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
                <div className="relative w-full h-0 pb-[100%]">
                    <img
                        src={image}
                        alt={"product"}
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    />
                </div>
            </div>
            <h3 className="text-base sm:text-lg font-bold uppercase">{title}</h3>
            <div className="flex justify-start items-center gap-2 sm:gap-4">
                <p className="text-yellow-500">★★★★</p>
                <p className="text-sm sm:text-base">{rating}/<span className="text-black/60">5</span></p>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl">
                {price.new}$
                <span className="text-black/40 line-through ml-2 text-sm sm:text-base md:text-lg">{price.old}$</span>
            </p>
        </div>

    );
};