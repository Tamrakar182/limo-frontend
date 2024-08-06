"use client"
import Link from "next/link"
import { IoMdArrowRoundForward } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
import { Map, HeadsetHelp, Clock } from "iconoir-react";

const footerNavigation = {
    ourCars: [
        { name: 'Mercedes', href: "#" },
        { name: 'Volkswagon', href: "#" },
        { name: 'Audi', href: "#" },
        { name: 'Ford', href: "#" },
        { name: 'Toyota', href: "#" },
    ],
    ourServices: [
        { name: 'Airport Transportation', href: "#" },
        { name: 'Group Transportation', href: "#" },
        { name: 'Corporate Transportation', href: "#" },
        { name: 'Sight Seeing and Tours', href: "#" },
        { name: 'Point-to-Point Service', href: "#" },
    ],
    contacts: {
        phone: "+977 000000",
        email: "email@example.com",
        location: "Some street, Bagbazar",
        locationCity: "Lalitpur 44600, Nepal"
    }
}

const Footer = () => {
    return (
        <div className=" border border-t flex flex-col gap-y-6 pt-8 pb-8">
            <div className="content-container flex justify-between flex-col lg:flex-row">
                <div className="flex py-4 flex-row cursor-pointer hover:text-gray-700 items-center gap-4">
                    <Map width={72} height={72} className="hover:text-gray-700" />
                    <div className="text-xl">
                        <p>
                            {footerNavigation.contacts.location}
                        </p>
                        <p>
                            {footerNavigation.contacts.locationCity}
                        </p>
                    </div>
                </div>
                <div className="flex py-4 flex-row items-center cursor-pointer hover:text-gray-700 gap-4">
                    <HeadsetHelp width={72} height={72} />
                    <div className="text-xl">
                        <p>
                            {footerNavigation.contacts.phone}
                        </p>
                        <p>
                            {footerNavigation.contacts.email}
                        </p>
                    </div>
                </div>
                <div className="flex py-4 flex-row items-center cursor-pointer hover:text-gray-700 gap-4">
                    <Clock width={72} height={72} />
                    <div className="text-xl">
                        Available 24 HR<br />
                        We Serve 365 Days
                    </div>
                </div>
            </div>
            <hr className="w-full" />
            <div className="grid content-container gap-y-2 lg:grid-cols-6 lg:gap-8">
                <div className="lg:col-span-2 flex justify-center lg:justify-start">
                    <span className="text-2xl font-bold">LOGO</span>
                </div>
                {footerNavigation.ourCars && (
                    <ul className="flex flex-col gap-4 lg:gap-0 lg:items-end lg:col-span-2">
                        <h1 className="text-center text-xl font-bold">Our Cars</h1>
                        {footerNavigation.ourCars.map((c) => (
                            <li key={c.name} className="text-lg justify-between py-2 uppercase flex flex-row gap-x-2 underline-animation items-center">
                                <Link href={c.href}>{c.name}</Link>
                                <IoMdArrowRoundForward />
                            </li>
                        ))}
                    </ul>
                )}
                {footerNavigation.ourServices && (
                    <ul className="flex flex-col gap-4 lg:gap-0 lg:items-end lg:col-span-2">
                        <h1 className="text-center text-xl font-bold">Our Services</h1>
                        {footerNavigation.ourServices.map((c) => (
                            <li key={c.name} className="text-lg justify-between py-2 uppercase flex flex-row gap-x-2 underline-animation items-center">
                                <Link href={c.href}>{c.name}</Link>
                                <IoMdArrowRoundForward />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <hr className="w-full" />
            <div className="flex content-container flex-col lg:flex-row text-xl items-center gap-y-4 justify-center">
                LIMO WEBSITE
                <span className="text-center">
                    &nbsp;© 2024&nbsp;
                    <Link href="/">MADE WITH ♥ IN KTM</Link>
                </span>
            </div>
        </div>
    )
}

export default Footer
