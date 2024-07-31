"use client"
import Link from "next/link"
import { IoMdArrowRoundForward } from "react-icons/io";

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
        location: "Bagbazar, Nepal"
    }
}

const Footer = () => {
    return (
        <div className="content-container border border-t flex flex-col gap-y-12 pt-8 pb-8">
            <div className="grid gap-y-6 lg:grid-cols-6 lg:gap-8">
                <div className="lg:col-span-2 flex justify-center lg:justify-start">
                    <span className="text-2xl font-bold">LOGO</span>
                </div>
                {footerNavigation.ourCars && (
                    <ul className="flex flex-col gap-4 lg:gap-0 lg:items-end lg:col-span-1">
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
                <div className="flex flex-col lg:items-end gap-y-2 lg:col-span-1">
                    <h1 className="text-center text-xl font-bold">Contact Us</h1>
                    <p className="text-large-regular py-2 lg:underline-animation">{footerNavigation.contacts.phone}</p>
                    <p className="text-large-regular py-2 lg:underline-animation">{footerNavigation.contacts.email}</p>
                    <p className="text-large-regular py-2 lg:underline-animation">{footerNavigation.contacts.location}</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row text-xl items-center gap-y-4 justify-center">
                LIMO WEBSITE
                <span>
                    &nbsp;© 2024&nbsp;
                    <Link href="/">MADE WITH ♥ IN KTM</Link>
                </span>
            </div>
        </div>
    )
}

export default Footer
