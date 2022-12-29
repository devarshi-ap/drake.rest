import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>🦉 drake.rest</title>
                <meta
                    name="description"
                    content="Drake as a Service"
                />
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
                <div className='flex flex-col w-fit space-y-4'>
                    <div className={styles.center}/>
                    <span className='text-md'>{"> A free REST API for random Drake quotes (Drake as a Service)"}</span>
                    <hr/>
                    <div className={styles.thirteen}>
                        <p className='md:text-lg sm:text-md mb-4'>"When you see your enemy somewhere in the club and you realize, he just not in a position to reciprocate your energy"</p>
                        <p className='text-xs absolute bottom-4 right-4 text-gray-400'>- Aubrey Graham, probably</p>
                    </div>
                    <div className='flex flex-row justify-between space-x-4 text-xs mt-1 font-bold w-full px-2'>
                        <p>localhost:3000</p>
                        <span className='flex flex-row space-x-4'>
                            <p>💬 tweet</p>
                            <p>🔀 shuffle</p>
                        </span>
                    </div>
                </div>

                <span className='text-xs font-extralight w-fit mx-auto'>made with 💛</span>
            </main>
        </>
    );
}
