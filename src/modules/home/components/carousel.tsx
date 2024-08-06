"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full content-container py-20">
            <h2 className="max-w-7xl pl-4 mx-auto font-bold text-xl md:text-5xl text-neutral-800 dark:text-neutral-200">
                Our Available Services
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            <div
                className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
            >
                <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    Get From Point A to Point B Quickest from Here
                </p>
                <Image
                    src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Test"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                />
            </div>
        </>
    );
};

const data = [
    {
        category: "Airport Transportation",
        title: "Picking you up at the Airport",
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
    {
        category: "Group Transportation",
        title: "Picking up a group",
        src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
    {
        category: "Corporate Transportation",
        title: "Corporate Business Trips",
        src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },

    {
        category: "Sight Seeing & Tours",
        title: "Go Sight seeing anywhere in Nepal",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
    {
        category: "Point-to-Point Service",
        title: "Get from Point A to Point B",
        src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },

];
