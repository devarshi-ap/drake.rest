import Link from "next/link"

export default function Custom404() {
    return (
        <div className="flex flex-col w-[85%] mx-auto mt-20">

            <div className="flex flex-col w-full items-center place-content-center h-[40vh] font-mono space-y-5" >
                <span className="text-6xl animate-pulse">🏴‍☠️</span>
                <h1 className="text-2xl">Ahoy matey! This here be a 404 page.</h1>
            </div>
            
            <div className="w-fit mx-auto">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    GET:
                </h2>
                <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
                    <li>
                        <Link
                            href={`/api/quotes/random`}
                            className="font-semibold text-gray-800 dark:text-gray-300 underline decoration-green-500"
                        >
                            /api/quotes/random
                        </Link>{' '}
                        ~ get random quote
                    </li>
                    <li>
                        <Link
                            href={`/api/quotes/all`}
                            className="font-semibold underline text-gray-800 dark:text-gray-300 decoration-red-500"
                        >
                            /api/quotes/all
                        </Link>{' '}
                        ~ get all quotes
                    </li>
                    <li>
                        <Link
                            href={`/api/_info`}
                            className="font-semibold underline text-gray-800 dark:text-gray-300 decoration-violet-500"
                        >
                            /api/_info
                        </Link>{' '}
                        ~ get JSON of API info-manual
                    </li>
                </ul>
            </div>
        </div>
    )
}