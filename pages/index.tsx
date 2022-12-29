import Head from 'next/head';
import styles from '../styles/Home.module.css';
import path from 'path';
import { promises as fs } from "fs";
import { useState } from 'react';
import { GetStaticProps } from 'next';

export default function Home({random_quote}: {random_quote: string}) {
    const [quote, setQuote] = useState(random_quote);
    
    async function handleClick() {
        fetch('/api/random')
            .then((res) => res.json())
            .then((data) => {
                setQuote(data.quote)
            })
    }
    
    return (
        <>
            <Head>
                <title>🦉 drake.rest</title>
                <meta name="description" content="Drake as a Service" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                    <p>
                        🦉 drake.rest&nbsp;
                        <code className={styles.code}>(DaaS)</code>
                    </p>
                </div>

                {/* QUOTE BOX */}
                <div className="flex flex-col w-fit space-y-4">
                    <div className={styles.center} />
                    <span className="text-md">
                        {
                            '> A free REST API for random Drake quotes (Drake as a Service)'
                        }
                    </span>
                    <hr />
                    <div className={styles.thirteen}>
                        <p className="md:text-lg sm:text-md mb-4">"{quote}"</p>
                        <p className="text-xs absolute bottom-4 right-4 text-gray-400">
                            - Aubrey Graham, probably
                        </p>
                    </div>
                    <div className="flex flex-row justify-between space-x-4 text-xs mt-1 font-bold w-full px-2">
                        <p>localhost:3000</p>
                        <span className="flex flex-row space-x-4">
                            <p>💬 tweet</p>
                            <button onClick={handleClick}>🔀 shuffle</button>
                        </span>
                    </div>
                </div>

                <span className="text-xs font-extralight w-fit mx-auto">
                    made with 💛
                </span>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async() => {
    const jsonDir = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDir + '/quotes.json', 'utf8')
    var quotes_obj: { quotes: string[] } = JSON.parse(fileContents.toString());
    var random_quote = quotes_obj.quotes[Math.floor(Math.random()*quotes_obj.quotes.length)];
    
    return {
        props: { random_quote }
    }
}