"use client"
import { useMobileMenu } from "@lib/context/mobile-menu-context"
// import Hamburger from "@modules/common/components/hamburger"
import ServicesDropdown from "@modules/layout/components/services-dropdown"
// import MobileMenu from "@modules/mobile-menu/templates"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import scrollTop from "@lib/util/scrollTop"
import Image from "next/image"
import { useDropdown } from "@lib/context/dropdown-context"
import FleetDropdown from "@modules/layout/components/fleet-dropdown"

const NavBar = () => {
  const pathname = usePathname()
  const [isHome, setIsHome] = useState(true)

  const { state, servicesDropdown, fleet } = useDropdown();

  useEffect(() => {
    scrollTop();
  }, []);

  useEffect(() => {
    pathname === "/" || pathname === "/about-us" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  return (
    <div
      className={clsx("top-0 inset-x-0 w-full z-50 group border border-b")}
    >
      <header
        className={clsx(
          "relative h-24 px-8 transition-colors bg-white hover:bg-transparent duration-200",
          {
            "!bg-white !border-gray-200": !isHome || state || servicesDropdown || fleet,
          }
        )}
      >
        <nav
          className={clsx(
            "text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200",
            {
              "text-white": isHome && !state && !servicesDropdown && !fleet,
            }
          )}
        >
          <Link className="text-4xl font-bold text-black" href="/">
            LOGO
          </Link>

          <div className="flex-1 basis-0 h-full hidden lg:flex justify-center items-center">
            <div className="h-full">
              <ServicesDropdown />
            </div>
            <div className="ml-6">
              <FleetDropdown />
            </div>
            <div className="ml-6 text-black text-2xl ">
                About Us
            </div>
            <div className="ml-6 text-black text-2xl ">
                Reservation Form
            </div>
          </div>


          <div className="flex items-center gap-x-6 h-full justify-end">
            <p className="text-black">Quote & Reserve</p>
          </div>
        </nav>
        {/* <MobileMenu /> */}
      </header>
    </div>
  )
}

export default NavBar