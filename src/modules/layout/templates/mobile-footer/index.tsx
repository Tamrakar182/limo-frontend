import { Phone, Mail, Globe } from 'iconoir-react';

const MobileFooter = () => {
    return (
        <div className="flex sticky bottom-0 z-50 w-full sm:hidden justify-around bg-black py-2">
            <div className="flex flex-col items-center text-white hover:text-gray-500 underline-animation gap-2">
                <Phone className="w-6 h-6" />
                <span className="text-sm underline-animation">Call Us</span>
            </div>
            <div className="flex flex-col items-center text-white hover:text-gray-500 underline-animation justify-between">
                <Mail className="w-6 h-6" />
                <span className="text-sm underline-animation">Email Us</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-gray-500 underline-animation text-white gap-2">
                <Globe className="w-6 h-6" />
                <span className="text-sm">Book Online</span>
            </div>
        </div>
    );
};

export default MobileFooter;
