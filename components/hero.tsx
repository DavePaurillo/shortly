import Image from "next/image";

import hero from "../public/illustration-working.svg";

const Hero = () => {
    return (
        <section className='max-w-[1440px] mx-auto flex items-center gap-16'>
            <div>
                <h1 className='text-8xl font-bold tracking-tight'>More than just shorter links</h1>
                <p className='my-2 text-neutral-gray font-semibold text-2xl leading-tight tracking-wider'>
                    Build your brand&apos;s recognition and get detailed insights on how your links are performing.
                </p>
                <button className='py-3 px-8 mt-8 rounded-full bg-primary-cyan text-xl text-white font-bold hover:opacity-50 hover:cursor-pointer'>
                    Get Started
                </button>
            </div>

            <div className='h-auto min-w-[733px]'>
                <Image src={hero} alt='hero image' />
            </div>
        </section>
    );
};

export default Hero;
