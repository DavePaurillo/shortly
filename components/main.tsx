import { useState, useEffect } from "react";
import Image from "next/image";
import shorten from "../public/bg-shorten-desktop.svg";
import br from "../public/icon-brand-recognition.svg";
import dr from "../public/icon-detailed-records.svg";
import fc from "../public/icon-fully-customizable.svg";
import { nanoid } from "nanoid";

const Main = () => {
    const [inputValue, setInputValue] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);
    const [links, setLinks] = useState([]);

    useEffect(() => {
        let keys = Object.keys(localStorage);
        let values: any = [];

        for (let x = 0; x < keys.length; x++) {
            const shortenedLink = JSON.parse(localStorage.getItem(keys[x]) || "");
            if (shortenedLink.shortLink != null) {
                values.push(shortenedLink);
            }
        }
        setLinks(values);
    }, []);

    const handleClick = (id: string, shortLink: string) => {
        navigator.clipboard.writeText(shortLink);
        setLinks((prevLink): any => {
            return prevLink.map((link: { id: string }) => {
                if (link.id === id) {
                    return {
                        ...link,
                        copy: true,
                    };
                }
                return link;
            });
        });
    };

    const handleMouseLeave = (id: string) => {
        setLinks((prevLink): any => {
            return prevLink.map((link: { id: string }) => {
                if (link.id === id) {
                    return {
                        ...link,
                        copy: false,
                    };
                }
                return link;
            });
        });
    };

    const fetchShortenedLinks = links.map(
        (link: { originalLink: string; shortLink: string; copy: boolean; id: string }, index) => {
            return (
                <div
                    onMouseLeave={() => handleMouseLeave(link.id)}
                    key={index}
                    className='bg-white rounded-lg py-5 px-12 my-4 flex items-center gap-8'
                >
                    <h1 className='mr-auto font-bold tracking-wide'>{link.originalLink}</h1>
                    <p className='font-bold text-primary-cyan'>{link.shortLink}</p>
                    <button
                        onClick={() => handleClick(link.id, link.shortLink)}
                        className={`py-2 px-6 rounded-lg ${
                            link.copy ? "bg-primary-dark-violet" : "bg-primary-cyan"
                        } text-white font-bold hover:cursor-pointer hover:opacity-70`}
                    >
                        {link.copy ? "Copied" : "Copy"}
                    </button>
                </div>
            );
        }
    );

    const shortenURL = async () => {
        if (inputValue === "") {
            setIsInvalid(true);
            alert("invalid url");
            return;
        }

        setIsInvalid(false);
        const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
        const data = await result.json();
        const linkObj = {
            id: nanoid(),
            originalLink: data.result.original_link,
            shortLink: data.result.short_link,
            copy: false,
        };
        localStorage.setItem(nanoid(), JSON.stringify(linkObj));
        setLinks((prevLinks): any => {
            return [...prevLinks, linkObj];
        });
    };

    return (
        <div className='relative'>
            <div className='relative top-24 max-w-[1440px] mx-auto bg-primary-dark-violet rounded-2xl overflow-hidden'>
                <Image src={shorten} layout='fill' objectFit='cover' />
                <div className='relative h-48 flex items-center justify-center gap-8 px-32 border'>
                    <input
                        type='text'
                        className={`flex-1 h-12 rounded-lg indent-6  placeholder:font-semibold placeholder:tracking-wide ${
                            isInvalid ? "border border-red-500" : ""
                        }`}
                        placeholder='Shorten a link here...'
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                    />
                    <button
                        className='py-3 px-16 rounded-lg bg-primary-cyan text-white font-bold tracking-wide hover:opacity-80'
                        onClick={async () => shortenURL()}
                    >
                        Shorten it!
                    </button>
                </div>
            </div>

            {/* 1st layer wrap for full bg */}
            <div className='bg-gray-100'>
                {/* 2nd layer wrap -- normal wrap for everything */}
                <div className='max-w-[1440px] mx-auto py-24'>
                    {/* add previous shorten links here */}
                    <div className='my-6'>{fetchShortenedLinks}</div>

                    <div className='my-24 flex flex-col items-center justify-center'>
                        <h1 className='text-4xl font-bold'>Advanced Statistics</h1>
                        <p className='p-4 w-1/3 text-neutral-gray font-semibold text-center text-md tracking-wide'>
                            Track how your links are performing across the web with our advanced statistics dashboard.
                        </p>
                    </div>

                    <div className='flex gap-8'>
                        <div className='relative -top-10 p-8 rounded-r-md bg-white'>
                            <div className='absolute -top-10 px-5 py-4 rounded-full text-center bg-primary-dark-violet'>
                                <Image src={br} />
                            </div>

                            <h1 className='my-8 text-2xl font-bold tracking-tight'>Brand Recognition</h1>
                            <p className='text-neutral-gray font-semibold'>
                                Boost your brand recognition with each click. Generic links don't mean a thing. Branded
                                links help instill confidence in your content.
                            </p>
                        </div>

                        <div
                            className='relative p-8 rounded-r-md bg-white 
                            before:absolute before:w-8 before:h-2 before:bg-primary-cyan before:block before:-left-8 before:top-2/4
                            after:absolute after:w-8 after:h-2 after:bg-primary-cyan after:block after:-right-8 after:top-2/4'
                        >
                            <div className='absolute -top-10 px-5 py-4 rounded-full text-center bg-primary-dark-violet'>
                                <Image src={dr} />
                            </div>
                            <h1 className='my-8 text-2xl font-bold tracking-tight'>Detailed Records</h1>
                            <p className='text-neutral-gray font-semibold'>
                                Gain insights into who is clicking your links. Knowing when and where people engage with
                                your content helps inform better decisions.
                            </p>
                        </div>

                        <div className='relative top-10 p-8 rounded-r-md bg-white'>
                            <div className='absolute -top-10 px-5 py-4 rounded-full text-center bg-primary-dark-violet'>
                                <Image src={fc} />
                            </div>
                            <h1 className='my-8 text-2xl font-bold tracking-tight'>Fully Customizable</h1>
                            <p className='text-neutral-gray font-semibold'>
                                Improve brand awareness and content discoverability through customizable links.
                                supercharging audience engagement.
                            </p>
                        </div>
                    </div>

                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Main;
