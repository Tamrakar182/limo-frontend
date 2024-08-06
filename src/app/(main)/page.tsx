import { AppleCardsCarouselDemo } from "@/modules/home/components/carousel";
import { InfiniteMovingCardsDemo } from "@/modules/home/components/infiniteCards";
import { Metadata } from "next";
import { BentoGridThirdDemo } from "@/modules/home/components/Bento";
import HeroSection from "@/modules/home/components/Hero";

export const metadata: Metadata = {
    title: "Limo Website",
    description:
        "Limo Website",
}

export default function Home() {
    return (
        <main>
            <HeroSection />
            <AppleCardsCarouselDemo />
            <p className="content-container text-2xl font-bold py-2">Why Choose Us for Your Travel Needs?</p>
            <BentoGridThirdDemo />
            <InfiniteMovingCardsDemo />
        </main>
    );
}
