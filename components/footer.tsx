import Image from "next/image";
import boost from "../public/bg-boost-desktop.svg";
import logo from "../public/logo-white.svg";
import fb from "../public/icon-facebook.svg";
import ig from "../public/icon-instagram.svg";
import twt from "../public/icon-twitter.svg";
import pin from "../public/icon-pinterest.svg";

const Footer = () => {
    return (
        <div>
            <div className='relative bg-primary-dark-violet'>
                <Image src={boost} alt='boostbg' layout='fill' objectFit='cover' />
                <div className='p-24 flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-bold text-white'>Boost your links today</h1>
                    <button className='m-4 py-3 px-8 rounded-full bg-primary-cyan text-white font-bold z-10 hover:cursor-pointer hover:opacity-80'>
                        Get Started
                    </button>
                </div>
            </div>

            <footer className='p-16 bg-neutral-very-dark-blue'>
                <div className='max-w-[1440px] mx-auto flex gap-8'>
                    <div className='mr-auto'>
                        <Image src={logo} alt='logo' />
                    </div>

                    <div className='px-8'>
                        <h1 className='font-bold text-white mb-4'>Features</h1>
                        <ul>
                            <li className='text-neutral-gray font-semibold hover:cursor-pointer hover:text-primary-cyan'>
                                Link Shortening
                            </li>
                            <li className='text-neutral-gray font-semibold hover:cursor-pointer hover:text-primary-cyan'>
                                Branded Links
                            </li>
                            <li className='text-neutral-gray font-semibold hover:cursor-pointer hover:text-primary-cyan'>
                                Analytics
                            </li>
                        </ul>
                    </div>

                    <div className='px-8'>
                        <h1 className='font-bold text-white mb-4'>Resources</h1>
                        <ul>
                            <li className='text-neutral-gray font-semibold hover:cursor-pointer hover:text-primary-cyan'>
                                Blog
                            </li>
                            <li className='text-neutral-gray font-semibold hover:cursor-pointer hover:text-primary-cyan'>
                                Developers
                            </li>
                            <li className='text-neutral-gray font-semibold hover:cursor-pointer hover:text-primary-cyan'>
                                Support
                            </li>
                        </ul>
                    </div>

                    <div className='px-8'>
                        <h1 className='font-bold text-white mb-4'>Company</h1>
                        <ul>
                            <li className='text-neutral-gray font-semibold hover:cursor-pointer hover:text-primary-cyan'>
                                About
                            </li>
                            <li className='text-neutral-gray font-semibold hover:cursor-pointer hover:text-primary-cyan'>
                                Our team
                            </li>
                            <li className='text-neutral-gray font-semibold hover:cursor-pointer hover:text-primary-cyan'>
                                Careers
                            </li>
                            <li className='text-neutral-gray font-semibold hover:cursor-pointer hover:text-primary-cyan'>
                                Contact
                            </li>
                        </ul>
                    </div>

                    <ul className='flex gap-4 ml-auto'>
                        <li>
                            <Image src={fb} alt='fb' />
                        </li>
                        <li>
                            <Image src={twt} alt='twt' />
                        </li>
                        <li>
                            <Image src={pin} alt='pin' />
                        </li>
                        <li>
                            <Image src={ig} alt='ig' />
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
