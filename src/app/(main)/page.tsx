import { GlobeDemo } from "@/modules/home/components/globe";
import { AppleCardsCarouselDemo } from "@/modules/home/components/carousel";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Limo Website",
    description:
        "Limo Website",
}

export default function Home() {
    return (
        <main className="">
            <GlobeDemo />
            <AppleCardsCarouselDemo />
        </main>
    );
}
