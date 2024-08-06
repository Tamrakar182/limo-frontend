"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { carLogos } from "@/components/assets/static";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[20rem] justify-center pt-4 flex flex-col antialiased relative overflow-hidden">
            <p className="text-black content-container text-3xl font-bold">Luxury Card Brands</p>
            <InfiniteMovingCards
                items={carLogos}
                direction="right"
                speed="slow"
                pauseOnHover={false}
            />
        </div>
    );
}
