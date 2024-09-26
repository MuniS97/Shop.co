"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

interface Review {
    name: string;
    rating: number;
    text: string;
}

const reviews: Review[] = [
    {
        name: "Sarah M.",
        rating: 5,
        text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
        name: "Alex K.",
        rating: 5,
        text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
        name: "James L.",
        rating: 5,
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
];

const CustomerReviewsCarousel: React.FC = () => {
    return <div></div>
};

export default CustomerReviewsCarousel;
