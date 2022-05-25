import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Main from "../components/main";
import Footer from "../components/footer";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Shortly</title>
                <meta name='description' content='Shorten your URLs' />
                <link rel='icon' href='/favicon-32x32.png' />
            </Head>
            <Navbar />
            <Hero />
            <Main />
            <Footer />
        </>
    );
};

export default Home;
