import styles from '../styles/Home.module.css';

export default function QuoteBox(props: {quote: string}) {
    return (
        <div className={styles.thirteen}>
            <p className="md:text-lg sm:text-md mb-4">"{props.quote}"</p>
            <p className="text-xs absolute bottom-4 right-4 text-gray-500 dark:text-gray-400">
                - Aubrey Graham, probably
            </p>
        </div>
    );
}
