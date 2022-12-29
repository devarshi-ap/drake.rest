import Link from "next/link";

export default function Footer() {
    return (
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
            <Link
                href="https://github.com/devarshi-ap/drake.rest"
                className="underline decoration-yellow-500"
            >
                source
            </Link>
        </span>
    );
}
