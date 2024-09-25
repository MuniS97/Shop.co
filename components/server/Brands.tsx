import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Props {
    className?: string;
}

export const Brands: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("flex justify-center items-center gap-5 sm:gap-8 md:gap-10 lg:gap-24 w-full bg-black py-11 overflow-x-hidden", className)}>
            <Image src={'/images/brand_1.png'} width={150} height={40} alt={'brand'} />
            <Image src={'/images/brand_5.png'} width={150} height={40} alt={'brand'} />
            <Image src={'/images/brand_4.png'} width={150} height={40} alt={'brand'} />
            <Image src={'/images/brand_3.png'} width={150} height={40} alt={'brand'} />
            <Image src={'/images/brand_1.png'} width={150} height={40} alt={'brand'} />
            <Image src={'/images/brand_5.png'} width={150} height={40} alt={'brand'} />
            <Image src={'/images/brand_1.png'} width={150} height={40} alt={'brand'} />
            <Image src={'/images/brand_4.png'} width={150} height={40} alt={'brand'} />
        </div>
    );
};