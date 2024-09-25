import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';
import { ProductItem } from '../client/ProductItem';
import { Button } from '../ui/button';
import Link from 'next/link';

interface Props {
    className?: string;
    title: string;
    buttonText?: string
}

const products = [
    {
        id: 1,
        title: "Modern jeans for men",
        rating: 3,
        price: {
            new: 149,
            old: 199
        },
        images: [
            "/images/t_shirt.png",
            "/images/t_shirt_1.png",
            "/images/t_shirt_2.png"
        ],
        description: "High quality jeans for men made with cotton and polyester by Levis"
    },
    {
        id: 3,
        title: "Casual dress for women",
        rating: 4.2,
        price: {
            new: 129,
            old: 179
        },
        images: [
            "/images/t_shirt_1.png",
            "/images/t_shirt.png",
            "/images/t_shirt_2.png"
        ],
        description: "High quality casual dress for women made with cotton and synthetic materials by Zara"
    }
    ,
    {
        id: 2,
        title: "Sporty sneakers for men",
        rating: 4.5,
        price: {
            new: 99,
            old: 149
        },
        images: [
            "/images/t_shirt_2.png",
            "/images/t_shirt_1.png",
            "/images/t_shirt.png",
        ],
        description: "High quality sneakers for men made with leather and synthetic materials by Adidas"
    },
    {
        id: 3,
        title: "Casual dress for women",
        rating: 4.2,
        price: {
            new: 129,
            old: 179
        },
        images: [
            "/images/t_shirt_1.png",
            "/images/t_shirt.png",
            "/images/t_shirt_2.png"
        ],
        description: "High quality casual dress for women made with cotton and synthetic materials by Zara"
    }
]


export const Products: React.FC<Props> = ({ className, title, buttonText }) => {
    return (
        <Container className="w-full my-10 md:my-20 flex flex-col justify-center items-center gap-8 sm:gap-12 md:gap-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h2>
            <div className={cn("w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-5", className)}>
                {products.map((product) => (
                    <ProductItem key={product.id} title={product.title} price={product.price} rating={product.rating} image={product.images[0]} />
                ))}
            </div>
            <Link href={"/"}>
                <Button variant="outline" className="text-sm sm:text-base font-normal py-3 sm:py-4 px-12 sm:px-20 rounded-full">
                    {buttonText || "View All"}
                </Button>
            </Link>
        </Container>
    );
};