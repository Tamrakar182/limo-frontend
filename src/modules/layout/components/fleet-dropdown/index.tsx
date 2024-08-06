import { Popover, Transition, PopoverButton } from "@headlessui/react"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"
import { useDropdown } from "@lib/context/dropdown-context"

const FleetDropdown = () => {
    const { fleet, handleFleet } = useDropdown()

    const { push } = useRouter()

    return (
        <div
            onMouseEnter={() => handleFleet(true)}
            onMouseLeave={() => handleFleet(false)}
            className="h-full"
        >
            <div className="flex items-center h-full">
                <Popover className="h-full flex">
                    <>
                        <Link href="/about-us" className="relative flex h-full" passHref>
                            <PopoverButton
                                className={clsx(
                                    "relative h-full underline-animation flex text-black text-xl items-center transition-all ease-out duration-200 focus:outline-none"
                                )}
                                onClick={() => push("/fleet")}
                            >
                                Our Fleet
                            </PopoverButton>
                        </Link>

                        <Transition
                            show={fleet}
                            as={React.Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Popover.Panel
                                static
                                className="absolute top-full inset-x-0 text-sm text-gray-700 z-30 border-y border-gray-200"
                            >
                                <div className="relative bg-white py-8">
                                    <div className="flex items-start content-container">
                                        <div className="flex flex-col flex-1 max-w-[30%]">
                                            <h3 className="text-base-semi text-gray-900 mb-4">
                                                Fleet
                                            </h3>
                                            <div className="flex items-start">
                                                <ul
                                                    className="min-w-[152px] max-w-[200px] pr-4"
                                                >
                                                    <div
                                                        className="pb-3"
                                                    >
                                                        <Link
                                                            href={`/about-us`}
                                                            onClick={() => handleFleet(false)}
                                                        >
                                                            Car 1
                                                        </Link>
                                                    </div>

                                                    <div
                                                        className="pb-3"
                                                    >
                                                        <Link
                                                            // href={`/behind-the-brand`}
                                                            href="#"
                                                            onClick={() => handleFleet(false)}
                                                        >
                                                            Car 2
                                                        </Link>
                                                    </div>

                                                    <div
                                                        className="pb-3"
                                                    >
                                                        <Link
                                                            // href={`/pz-community`}
                                                            href="#"
                                                            onClick={() => handleFleet(false)}
                                                        >
                                                            Car 3
                                                        </Link>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                </Popover>
            </div>
        </div>
    )
}

export default FleetDropdown
