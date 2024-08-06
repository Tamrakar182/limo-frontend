import { Fragment } from 'react'
import { Dialog, Transition, TransitionChild, DialogPanel } from '@headlessui/react'
import { Xmark } from 'iconoir-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

interface Props {
    state: boolean;
    handleClose: (value: boolean) => void
}
export default function MobileMenuOverlay({ state, handleClose }: Props) {
    const pathname = usePathname();
    return (
        <Transition show={state} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={handleClose}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex w-full">
                            <TransitionChild
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <DialogPanel className="pointer-events-auto w-screen">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        onClick={() => handleClose(false)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <Xmark className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative flex mt-6 flex-1 flex-col justify-center items-center px-4 sm:px-6">
                                            <div className="p-4 text-2xl" onClick={() => handleClose(false)}>
                                                <Link href="/" className={clsx({ "font-bold": pathname === "/" })}>Home</Link>
                                            </div>
                                            <div className="p-4 text-2xl" onClick={() => handleClose(false)}>
                                                <Link href="/services" className={clsx({ "font-bold": pathname === "/services" })}>Services</Link>
                                            </div>
                                            <div className="p-4 text-2xl" onClick={() => handleClose(false)}>
                                                <Link href="/fleet" className={clsx({ "font-bold": pathname === "/fleet" })}>Fleet</Link>
                                            </div>
                                            <div className="p-4 text-2xl" onClick={() => handleClose(false)}>
                                                <Link href="/aboutus" className={clsx({ "font-bold": pathname === "/aboutus" })}>About Us</Link>
                                            </div>
                                            <div className="p-4 text-2xl" onClick={() => handleClose(false)}>
                                                <Link href="/login" className={clsx({ "font-bold": pathname === "/login" })}>Account</Link>
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
