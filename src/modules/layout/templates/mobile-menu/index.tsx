import { useState } from 'react';
import { Menu } from 'iconoir-react';
import Button from '@/modules/common/components/button';

import Link from 'next/link';
import MobileMenuOverlay from '../../components/mobile-menu-overlay';
import MobileFooter from '../mobile-footer';

export const mobileNavLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "Collections", link: "/collections" },
    { id: 4, name: "Story", link: "/story" },
    { id: 5, name: "Blog", link: "/blog" },
    { id: 6, name: "Account", link: "/login" },
];


const MobileMenu = () => {
    const [open, setOpen] = useState(false);

    const handleClose = (value: boolean) => {
        setOpen(value);
    };

    return (
        <div className="lg:hidden flex">
            <div onClick={() => handleClose(true)} className="p-1 hover:button-hover border text-black transition-shadow duration-300 border-black group bg-white">
                <Menu className="w-6 h-6" />
            </div>
            <MobileMenuOverlay state={open} handleClose={handleClose} />
        </div>
    );
};

export default MobileMenu;
