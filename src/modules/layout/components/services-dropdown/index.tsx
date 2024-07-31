import { PopoverButton, Popover, Transition } from "@headlessui/react"
import repeat from "@lib/util/repeat"
import clsx from "clsx"
import { chunk } from "lodash"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"
import { useDropdown } from "@lib/context/dropdown-context"

const ServicesDropdown = () => {
    const { servicesDropdown, handleServicesDropdown } = useDropdown()

    const { push } = useRouter()

    return (
        <div
            onMouseEnter={() => handleServicesDropdown(true)}
            onMouseLeave={() => handleServicesDropdown(false)}
            className="h-full"
        >
            <div className="flex items-center h-full">
                <Popover className="h-full flex">
                    <>
                        <Link href="/store" className="relative flex h-full" passHref>
                            <PopoverButton
                                className={clsx(
                                    "relative h-full flex text-black text-2xl items-center transition-all ease-out duration-200 focus:outline-none"
                                )}
                                onClick={() => push("/store")}
                            >
                                Our Services
                            </PopoverButton>
                        </Link>

                        <Transition
                            show={servicesDropdown}
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
                                                Services
                                            </h3>
                                            <div className="flex items-start">
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="grid grid-cols-3 gap-4">
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

export default ServicesDropdown
