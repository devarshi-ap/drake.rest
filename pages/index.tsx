import Head from 'next/head';
import styles from '../styles/Home.module.css';
import path from 'path';
import { promises as fs } from 'fs';
import { useState } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import {TwitterShareButton} from 'react-twitter-embed'
// import { useRouter } from 'next/router';

export default function Home({ random_quote }: { random_quote: string }) {
    const [quote, setQuote] = useState(random_quote);
    // const router = useRouter();

    async function handleClick() {
        fetch('/api/random')
            .then((res) => res.json())
            .then((data) => {
                setQuote(data.quote);
            });
    }

    return (
        <>
            <Head>
                <title>drake.rest</title>
                <meta name="description" content="Drake as a Service" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦉</text></svg>"
                />
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                    <p>
                        🦉 drake.rest&nbsp;
                        <code className={styles.code}>(DaaS)</code>
                    </p>
                </div>

                <div className="flex flex-col w-fit space-y-6">
                    <div className={styles.center} />
                    <div className="text-md flex flex-col">
                        <span>
                            {
                                '> A free REST API for random Drake quotes (Drake as a Service)'
                            }
                        </span>
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                                GET:
                            </h2>
                            <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
                                <li>
                                    <Link
                                        href={`/api/random`}
                                        className="font-semibold text-gray-800 dark:text-gray-300 underline decoration-green-500"
                                    >
                                        /api/random
                                    </Link>{' '}
                                    ~ get JSON random quote
                                </li>
                                <li>
                                    <Link
                                        href={`/api/all`}
                                        className="font-semibold underline text-gray-800 dark:text-gray-300 decoration-red-500"
                                    >
                                        /api/all
                                    </Link>{' '}
                                    ~ get JSON of all quotes
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr />

                    <div className={styles.thirteen}>
                        <p className="md:text-lg sm:text-md mb-4">"{quote}"</p>
                        <p className="text-xs absolute bottom-4 right-4 text-gray-500 dark:text-gray-400">
                            - Aubrey Graham, probably
                        </p>
                    </div>
                    <div className="flex flex-row justify-between space-x-4 text-xs mt-1 font-bold w-full px-2">
                        <p>don't quote me on this</p>
                        <span className="flex flex-row space-x-4">
                            <TwitterShareButton
                                url={'https://drake-rest.vercel.app/'}
                                options={{ text: 'drake.rest is an awesome api for drake quotes! #6ix', via: 'thefirstdev' }}
                            />
                            <button onClick={handleClick}>🔀 shuffle</button>
                        </span>
                    </div>
                </div>

                <span className="text-xs font-extralight w-fit mx-auto flex flex-col text-center">
                    <span>
                        made with 💛 by{' '}
                        <a
                            href="https://github.com/devarshi-ap"
                            className="font-medium underline decoration-blue-500"
                        >
                            @devarshi-ap
                        </a>
                    </span>
                    <Link href="https://github.com/devarshi-ap/drake.rest" className='underline decoration-yellow-500'>
                        source
                    </Link>
                </span>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const jsonDir = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDir + '/quotes.json', 'utf8');
    var quotes_obj: { quotes: string[] } = JSON.parse(fileContents.toString());
    var random_quote =
        quotes_obj.quotes[Math.floor(Math.random() * quotes_obj.quotes.length)];
    return {
        props: { random_quote },
    };
};
