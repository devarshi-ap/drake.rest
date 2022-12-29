import Link from "next/link";

export default function Endpoint(props: {
    path: string;
    color: string;
    description: string;
}) {
    return (
        <li>
            <Link
                href={props.path}
                className={`font-semibold underline text-gray-800 dark:text-gray-300 decoration-${props.color}-500`}
            >
                {props.path}
            </Link>{' '}
            ~ {props.description}
        </li>
    );
}
