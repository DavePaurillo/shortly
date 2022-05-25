import Image from "next/image";

import logo from "../public/logo.svg";

const Navbar = () => {
    const navList = ["Features", "Pricing", "Resources", "Login", "Sign up"];
    const navMap = navList.map((navItem, index) => {
        if (navItem === "Login") {
            return (
                <li key={index} className='ml-auto text-neutral-gray font-bold hover:text-black hover:cursor-pointer'>
                    {navItem}
                </li>
            );
        }

        if (navItem === "Sign up") {
            return (
                <li
                    key={index}
                    className='py-2 px-6 rounded-3xl bg-primary-cyan text-white font-bold hover:opacity-50 hover:cursor-pointer'
                >
                    {navItem}
                </li>
            );
        }

        return (
            <li key={index} className='text-neutral-gray font-bold hover:text-black hover:cursor-pointer'>
                {navItem}
            </li>
        );
    });

    return (
        <nav className='max-w-[1440px] mx-auto my-16 flex gap-20'>
            <div className='mt-2'>
                <Image src={logo} alt='logo' />
            </div>

            <ul className='w-full flex items-center gap-12'>{navMap}</ul>
        </nav>
    );
};

export default Navbar;
