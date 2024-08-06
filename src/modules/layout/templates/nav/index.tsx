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
import Button from "@modules/common/components/button"
import { Phone, Facebook, Twitter, Instagram, Mail } from "iconoir-react"
import MobileMenu from "../mobile-menu"

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
      className={clsx("sticky top-0 inset-x-0 w-full z-40 group")}
    >
      <header
        className={clsx(
          "relative h-30 transition-colors flex flex-col bg-white duration-200",
          {
            "!bg-white !border-gray-200": !isHome || state || servicesDropdown || fleet,
          }
        )}
      >
        <nav className="bg-black hidden sm:flex flex-row justify-between py-4 px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-row gap-2 text-white cursor-pointer hover:text-gray-400">
              <Phone width={24} height={24} />
              <p>+977 98XXXXXX</p>
            </div>
            <div className="flex flex-row gap-2 text-white cursor-pointer hover:text-gray-400">
              <Mail width={24} height={24} />
              <p>info@mail.com</p>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <Facebook width={24} height={24} className=" text-white cursor-pointer hover:text-gray-400" />
            <Twitter width={24} height={24} className=" text-white cursor-pointer hover:text-gray-400" />
            <Instagram width={24} height={24} className=" text-white cursor-pointer hover:text-gray-400" />
          </div>
        </nav>
        <nav
          className={clsx(
            "text-gray-900 px-8 py-4 border-b flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200",
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
            <div className="ml-6 underline-animation cursor-pointer text-black text-xl ">
              About Us
            </div>
            <div className="ml-6 underline-animation cursor-pointer text-black text-xl ">
              Blogs
            </div>
          </div>


          <div className="hidden lg:flex items-center gap-x-6 h-full justify-end">
            <Button>Get a Quote</Button>
            <Button>Login/Register</Button>
          </div>
          <MobileMenu />
        </nav>
      </header>
    </div>
  )
}

export default NavBar