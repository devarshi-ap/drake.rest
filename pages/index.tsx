import Head from 'next/head';
import styles from '../styles/Home.module.css';
import path from 'path';
import { promises as fs } from 'fs';
import { useState } from 'react';
import { GetStaticProps } from 'next';
import Footer from '../components/Footer';
import QuoteBox from '../components/QuoteBox';
import About from '../components/About';
import HeadCard from '../components/HeadCard';
import Tweet from '../components/Tweet';
import { motion } from 'framer-motion'

export default function Home({ random_quote }: { random_quote: string }) {
    const [quote, setQuote] = useState(random_quote);

    async function handleClick() {
        fetch('/api/quotes/random')
            .then((res) => res.json())
            .then((data) => {
                setQuote(data.quote);
            });
    }

    return (
        <motion.div
            initial={{ y:"10%", opacity: 0.1, scale: 1 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{duration: 0.4, ease: 'easeIn'}}
            exit={{ opacity: 0 }}
            className="flex flex-grow border-[#000] items-center"
        >
            <Head>
                <title>drake.rest</title>
                <meta
                    name="description"
                    content="A free, public REST API for random Drake quotes & lyrics (Drake as a Service)"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="author" content="Devarshi Patel" />
                <meta
                    name="keywords"
                    content="Drake, API, REST, REST-API, Quotes, Random, Quote, Aubrey Graham, Champagne Papi, Quote Generator, Twitter, Dev, Devarshi, Devarshi Patel"
                />
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦉</text></svg>"
                />
            </Head>

            <main className={styles.main}>
                <HeadCard />

                <div className="flex flex-col w-fit space-y-6">
                    <div className={styles.center} />

                    <About />

                    <hr />

                    <QuoteBox quote={quote}/>

                    <div className="flex flex-row justify-between space-x-4 text-xs mt-1 font-bold w-full px-2">
                        <p>don't quote me on this</p>
                        <span className="flex flex-row space-x-3">
                            <button onClick={handleClick}>🔀 Shuffle</button>
                            <Tweet quote={quote}/>
                        </span>
                    </div>
                </div>

                <Footer />
            </main>
        </motion.div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const jsonDir = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDir + '/quotes.json', 'utf8');
    var quotes_obj: { quotes: string[] } = JSON.parse(fileContents.toString());
    var random_quote =
        quotes_obj.quotes[Math.floor(Math.random() * quotes_obj.quotes.length)];
    return {
        props: { random_quote },
    };
};
